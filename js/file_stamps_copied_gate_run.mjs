import { path_join } from "./path_join.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_map_path_join_left } from "./list_map_path_join_left.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { folder_copy_fresh } from "./folder_copy_fresh.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { json_equal } from "./json_equal.mjs";
import { equal_not } from "./equal_not.mjs";
import { add } from "./add.mjs";
import { folder_temp } from "./folder_temp.mjs";
import { json_to } from "./json_to.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { less_than } from "./less_than.mjs";
export async function file_stamps_copied_gate_run() {
  "Gate: a file taken across into a copy of a folder still stands the same way it stood where it came from. What a file says about itself here is when it was written and how long it is, and everything remembered about a file is remembered against exactly that pair.";
  "This is the one thing the whole gate rests on and the one thing that breaks in silence. The gate freezes the working folder into a copy and asks its questions there, and every answer it has ever worked out about a file it keeps against that file's stamp. Where a copy says a file was written a hair away from when the original says it, nothing is wrong and nothing is reported - every file in the copy simply reads as freshly changed, so every question reads and parses the entire repo again, several runs at once, every time it is asked. Measured before it was fixed: six and a half seconds against one, on the first question alone.";
  "Two ways to break it, one of them not obvious. Asking to the fraction the disk keeps breaks it, because taking a folder across keeps the moments only to the whole millisecond. Cutting the fraction away rather than rounding it breaks it too, and looks just as reasonable - taking the folder across rounds, so cutting matched barely half the repo where rounding matched all of it. Only comparing a real copy against what it came from tells those two apart, which is why this makes one.";
  "A file somebody else writes while the copy is being made is left out rather than counted against anyone. Several of us work in this one folder at once, so a file that moved mid-copy is expected, and holding a copy to a moment that has since passed would fail a gate over nothing. That is what asking twice is for.";
  let source = "data/examples";
  async function lambda_folder(folder_path) {
    let target = path_join([folder_path, "copied"]);
    let names = await folder_read_files(source);
    let sources = list_map_path_join_left(names, source);
    let before = await file_stamps_by_path(sources);
    await folder_copy_fresh(source, target, []);
    let after = await file_stamps_by_path(sources);
    let copies = list_map_path_join_left(names, target);
    let copied = await file_stamps_by_path(copies);
    let differing = [];
    let checked = 0;
    for (let name of names) {
      let source_path = path_join([source, name]);
      let copy_path = path_join([target, name]);
      let stamp_before = property_get(before, source_path);
      let stamp_after = property_get(after, source_path);
      let stamp_copied = property_get(copied, copy_path);
      if (undefined_is(stamp_before)) {
        continue;
      }
      if (undefined_is(stamp_after)) {
        continue;
      }
      let steady = json_equal(stamp_before, stamp_after);
      if (equal_not(steady, true)) {
        continue;
      }
      if (undefined_is(stamp_copied)) {
        differing.push({
          name,
          source: stamp_before,
          copy: "missing",
        });
        continue;
      }
      checked = add(checked, 1);
      let same = json_equal(stamp_before, stamp_copied);
      if (same) {
        continue;
      }
      differing.push({
        name,
        source: stamp_before,
        copy: stamp_copied,
      });
    }
    let result = {
      checked,
      differing,
    };
    return result;
  }
  let answer = await folder_temp(lambda_folder);
  let checked = property_get(answer, "checked");
  let differing = property_get(answer, "differing");
  for (let one of differing) {
    console.log("stamp differs after copy  " + json_to(one));
  }
  console.log("stamps checked across a copy: " + checked);
  if (list_empty_not_is(differing)) {
    throw new Error(
      "file stamps copied gate: " +
        differing.length +
        " of " +
        checked +
        " files stand differently in a copy than where they came from - is the moment a file was written being asked for more finely than taking a folder across can carry?",
    );
  }
  if (less_than(checked, 20)) {
    throw new Error(
      "file stamps copied gate: only " +
        checked +
        " files were there to check in " +
        source +
        " - too few to tell a kept stamp from a lucky one, so this passed without proving anything.",
    );
  }
  let r = {
    checked,
    differing: 0,
  };
  return r;
}

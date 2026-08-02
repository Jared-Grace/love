import { path_join } from "./path_join.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { add } from "./add.mjs";
import { list_map_path_join_left } from "./list_map_path_join_left.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { folder_copy_fresh } from "./folder_copy_fresh.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_not_is_assert } from "./undefined_not_is_assert.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { equal_not } from "./equal_not.mjs";
import { json_equal } from "./json_equal.mjs";
import { folder_temp } from "./folder_temp.mjs";
import { json_to } from "./json_to.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { round } from "./round.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
export async function file_stamps_copied_gate_run() {
  "Gate: a file taken across into a copy of a folder still stands the same way it stood where it came from. What a file says about itself here is when it was written and how long it is, and everything remembered about a file is remembered against exactly that pair.";
  "This is the one thing the whole gate rests on and the one thing that breaks in silence. The gate freezes the working folder into a copy and asks its questions there, and every answer it has ever worked out about a file it keeps against that file's stamp. Where a copy says a file was written a hair away from when the original says it, nothing is wrong and nothing is reported - every file in the copy simply reads as freshly changed, so every question reads and parses the entire repo again, several runs at once, every time it is asked. Measured before it was fixed: six and a half seconds against one, on the first question alone.";
  "Two ways to break it, one of them not obvious. Asking to the fraction the disk keeps breaks it, because taking a folder across keeps the moments only to the whole millisecond. Cutting the fraction away rather than rounding it breaks it too, and looks just as reasonable - taking the folder across rounds, so cutting matched barely half the repo where rounding matched all of it. Only comparing a real copy against what it came from tells those two apart, which is why this makes one.";
  "The files asked about are made here rather than borrowed from the repo, and that is what lets this be asked anywhere. Where it matters most is inside the frozen copy the gate works in, and every file already sitting there arrived by being copied - so its moment is already a whole millisecond, and copying it again matches however finely it is asked. A borrowed file would have proved nothing exactly where the proof was needed. A file written a moment ago carries the fraction the disk keeps, which is the only kind of file this question has an answer for.";
  "Fresh files are also why nobody else can shake this. Several of us write in the one working folder at once, so a borrowed file can move between being asked about and being copied, and the gate would have failed over somebody else's ordinary work.";
  let wanted = 40;
  async function lambda_folder(folder_path) {
    let fs = await import("fs");
    let source = path_join([folder_path, "written"]);
    let target = path_join([folder_path, "copied"]);
    await folder_exists_ensure(source);
    let names = [];
    let index = 0;
    while (less_than(index, wanted)) {
      let name = "stamp_" + index + ".txt";
      let written_path = path_join([source, name]);
      await fs.promises.writeFile(written_path, name);
      names.push(name);
      index = add(index, 1);
    }
    let sources = list_map_path_join_left(names, source);
    let before = await file_stamps_by_path(sources);
    await folder_copy_fresh(source, target, []);
    let copies = list_map_path_join_left(names, target);
    let copied = await file_stamps_by_path(copies);
    let differing = [];
    let fractional = 0;
    let checked = 0;
    for (let name of names) {
      let source_path = path_join([source, name]);
      let copy_path = path_join([target, name]);
      let stamp_before = property_get(before, source_path);
      let stamp_copied = property_get(copied, copy_path);
      undefined_not_is_assert(stamp_before, source_path);
      undefined_not_is_assert(stamp_copied, copy_path);
      checked = add(checked, 1);
      let exact = await path_modified_ms(source_path);
      let whole = round(exact);
      if (equal_not(exact, whole)) {
        fractional = add(fractional, 1);
      }
      let live_exact = await path_modified_ms(source_path);
      let copy_exact = await path_modified_ms(copy_path);
      console.log("SAMPLE " + name + " live=" + live_exact + " copy=" + copy_exact);
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
      fractional,
      differing,
    };
    return result;
  }
  let answer = await folder_temp(lambda_folder);
  let checked = property_get(answer, "checked");
  let fractional = property_get(answer, "fractional");
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
  if (equal(fractional, 0)) {
    throw new Error(
      "file stamps copied gate: not one of the " +
        checked +
        " files written here kept a fraction of a millisecond, so a copy would have matched however finely it was asked - this passed without asking anything. Where are these files being written?",
    );
  }
  let r = {
    checked,
    fractional,
    differing: 0,
  };
  return r;
}

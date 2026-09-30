import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { text_trim } from "./text_trim.mjs";
import { properties_get } from "./properties_get.mjs";
import { git_commit_maps_paths } from "./git_commit_maps_paths.mjs";
import { list_size } from "./list_size.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { git_commit_maps_folder } from "./git_commit_maps_folder.mjs";
import { git_commit_map_read } from "./git_commit_map_read.mjs";
export async function git_commit_map_save(clone_folder, laid) {
  "$plain clone_folder";
  arguments_assert(arguments, 2);
  ("Keeps the record of what a rewrite renamed every commit to, next to the records of the earlier rewrites, numbered after them - the rewriting tool's own record out of the copy it rewrote, with the commits laid on top afterwards added below it.");
  ("★ THE COMMITS LAID ON TOP ARE RENAMED TOO, AND THE TOOL NEVER SAW THEM. They were made while the rewrite ran, so they are not in its record; they are given new names when their parents change, and a name written down for one of them in those minutes needs a line here as much as any other. Leaving them out would make such a name read as never having been a commit here.");
  ("An existing record is never written over: the number is one past the records already kept, and a file already standing under that name is refused rather than replaced, because each record is the only account of its rewrite.");
  let source = path_join([clone_folder, "filter-repo", "commit-map"]);
  let fs = await import("fs");
  let text = await fs.promises.readFile(source, "utf-8");
  let trimmed = text_trim(text);
  let lines = [trimmed];
  for (let before of properties_get(laid)) {
    lines.push(before + " " + laid[before]);
  }
  let joined = lines.join("\n") + "\n";
  let paths = await git_commit_maps_paths();
  let number = String(list_size(paths) + 1).padStart(2, "0");
  let today = date_today_iso();
  let name = number + "_" + today + ".txt";
  let folder = git_commit_maps_folder();
  let file_path = path_join([folder, name]);
  await fs.promises.writeFile(file_path, joined, {
    encoding: "utf-8",
    flag: "wx",
  });
  let read = await git_commit_map_read(file_path);
  let r = {
    file_path,
    rows: read.rows,
  };
  return r;
}

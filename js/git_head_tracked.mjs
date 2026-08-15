import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { git_object_name_path } from "./git_object_name_path.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export async function git_head_tracked(folder) {
  "What the current commit tracks, both ways round - the blobs it holds by name, and the paths it holds them at.";
  "Both, because a reading about what history carries and the present does not has two ways of being wrong and needs a guard for each. A path is what a rewrite is told to drop, so a path the present still tracks must never be offered. A blob is what the saving is measured in, and the same blob can sit at a live path and at a dead one at once - counting it as a saving would promise back bytes the repository is going to keep either way.";
  arguments_assert(arguments, 1);
  let printed = await git_folder_run(folder, [
    "ls-tree",
    "-r",
    "HEAD",
    "--format=%(objectname) %(path)",
  ]);
  let blob_names = {};
  let paths = {};
  for (let line of text_split_newline(printed)) {
    let blank = text_empty_is(line);
    if (blank) {
      continue;
    }
    let entry = git_object_name_path(line);
    blob_names[entry.name] = true;
    paths[entry.path] = true;
  }
  let r = {
    blob_names,
    paths,
  };
  return r;
}

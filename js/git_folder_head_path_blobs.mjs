import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { git_object_name_path } from "./git_object_name_path.mjs";
import { property_set } from "./property_set.mjs";
export async function git_folder_head_path_blobs(folder) {
  "$plain folder";
  arguments_assert(arguments, 1);
  ("Every path the current commit holds, with the name of the content it holds there.");
  ("The pair is what lets two commits be compared file by file rather than all at once. One name for the whole commit answers whether anything moved and never which thing did, and a rewrite that is meant to change some files and no others needs the difference named rather than counted.");
  ("The name of a piece of content is worked out from the content alone, so the same name on both sides of a rewrite is proof that those bytes are untouched, and a different one is proof that they are not. Neither proof depends on the history the content is reached through, which is the one thing a rewrite changes.");
  let printed = await git_folder_run(folder, [
    "ls-tree",
    "-r",
    "HEAD",
    "--format=%(objectname) %(path)",
  ]);
  let blobs = {};
  for (let line of text_split_newline(printed)) {
    let blank = text_empty_is(line);
    if (blank) {
      continue;
    }
    let entry = git_object_name_path(line);
    property_set(blobs, entry.path, entry.name);
  }
  return blobs;
}

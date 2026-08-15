import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
export async function git_folder_files_changed_since(folder, oldest) {
  "Every file any commit has touched between the one named and where the folder stands now, each named once. Read-only.";
  "It answers files rather than commits because of what it is for. Everyone here commits to the one branch, so between noting where you started and committing what you wrote, neighbours land work underneath you - and the question that matters is not how many of them there were, it is whether any of them moved something you had read. A list of files can be held against what you read; a list of commits cannot, and here two out of every three of those commits are messaged with one bare word, so their messages answer nothing at all.";
  "Named once rather than once per commit, because the same file being touched three times is still one file to check, and the repeat only makes the list longer to read.";
  arguments_assert(arguments, 2);
  let range_text = text_combine_multiple([oldest, "..HEAD"]);
  let printed = await git_folder_run(folder, [
    "log",
    "--name-only",
    "--format=",
    range_text,
  ]);
  let s = text_trim(printed);
  let lines = text_split_newline(s);
  let named = list_filter_text_empty_not_is(lines);
  let files = list_unique(named);
  return files;
}

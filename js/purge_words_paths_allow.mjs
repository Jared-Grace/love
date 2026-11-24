import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { purge_words_allowed } from "./purge_words_allowed.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { text_word_start_regex } from "./text_word_start_regex.mjs";
import { git_folder_grep_case_blind_paths } from "./git_folder_grep_case_blind_paths.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { purge_words_allowed_path } from "./purge_words_allowed_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function purge_words_paths_allow(paths_comma) {
  arguments_assert(arguments, 1);
  ("Lets every purged word that a given file holds stay in that file, by adding the file to the places each such word is allowed - for files where a word is one of many like it, such as a long list of names, places or dictionary words.");
  ("★ THE CALLER NAMES THE FILES; THIS NEVER ALLOWS A FILE BECAUSE IT WAS FOUND. A command that allowed whatever the gate complained about would turn the gate off the first time anyone ran it. Whether a file is a crowd of names or a short list that points at somebody is the judgement, and only a person reading the file makes it.");
  ("The words are not handed in or printed: a file is matched to a word by searching for it, so only repository paths - already public - travel through the arguments and the answer.");
  let paths = text_split_comma(paths_comma);
  let rows = await purge_words_allowed();
  let folder = await git_folder_love();
  let added = [];
  for (let row_index = 0; less_than(row_index, rows.length); row_index++) {
    let row = rows[row_index];
    let pattern = text_word_start_regex(row.word);
    let found = await git_folder_grep_case_blind_paths(folder, pattern);
    for (let path of paths) {
      let holds = list_includes(found, path);
      let missing = list_includes_not(row.paths, path);
      if (holds && missing) {
        list_add(row.paths, path);
        list_add(added, {
          path,
          row: row_index,
        });
      }
    }
  }
  let file_path = purge_words_allowed_path();
  await file_overwrite_json(file_path, rows);
  return added;
}

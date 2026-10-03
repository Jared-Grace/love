import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_languages_prefix } from "./bible_search_languages_prefix.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function bible_search_language_word_path(language_code, word) {
  "$plain language_code";
  "$plain word";
  "Where storage keeps the index of one word of one language: the chapters and verses holding it.";
  arguments_assert(arguments, 2);
  let prefix = bible_search_languages_prefix();
  let file_name = file_name_json(word);
  let rest = list_join_slash_forward([language_code, file_name]);
  let path = list_join_empty([prefix, rest]);
  return path;
}

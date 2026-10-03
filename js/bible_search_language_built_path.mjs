import { arguments_assert } from "./arguments_assert.mjs";
import { bible_search_languages_prefix } from "./bible_search_languages_prefix.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function bible_search_language_built_path(language_code) {
  "$plain language_code";
  "Where storage keeps the mark saying one language's search index is up there whole.";
  "In a folder of its own beside the languages, named mark: a language is named by two letters, so no language can ever be called that, and the sweep that takes down stale English words walks past this whole folder of languages without opening it.";
  arguments_assert(arguments, 1);
  let prefix = bible_search_languages_prefix();
  let file_name = file_name_json(language_code);
  let rest = list_join_slash_forward(["mark", file_name]);
  let path = list_join_empty([prefix, rest]);
  return path;
}

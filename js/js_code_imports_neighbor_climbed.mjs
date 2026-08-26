import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_imports_relative_paths } from "./js_imports_relative_paths.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { text_split_last } from "./text_split_last.mjs";
import { folder_js } from "./folder_js.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_code_imports_neighbor_climbed(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("Every import line in a piece of this repo's javascript that reaches a file sitting in its own folder by climbing out of the repo first and walking back in by the name the repo is checked out under.");
  ("A neighbour is reached with one dot. Reaching it with two says something extra that the file had no business knowing - the word somebody happened to call the folder they cloned into. Rename that folder, or clone it under another word, and every line spelled this way names a place that is not there; nothing goes red beforehand, because today the folder is still called what they say it is.");
  ("Only a climb that lands back in this repo's own javascript is counted. A climb that reaches a different repo standing beside this one is a real dependency spelled the only way it can be spelled, and is left alone.");
  ("The repo's name is read off the repo rather than typed, so this cannot be the thing that goes stale when the folder is renamed.");
  let ast = js_parse(code);
  let sources = js_imports_relative_paths(ast);
  let folder = folder_repo_love();
  let repo_name = text_split_last(folder, "/");
  let js = folder_js();
  let repo_js_path = text_combine_multiple(["/", repo_name, "/", js, "/"]);
  function climbed_is(source) {
    let climbs = text_starts_with(source, "..");
    if (not(climbs)) {
      return false;
    }
    let named = text_includes(source, repo_js_path);
    return named;
  }
  let climbed = list_filter(sources, climbed_is);
  return climbed;
}

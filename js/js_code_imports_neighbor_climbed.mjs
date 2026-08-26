import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_imports_relative_paths } from "./js_imports_relative_paths.mjs";
import { folder_repo_love_js_spelled } from "./folder_repo_love_js_spelled.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_code_imports_neighbor_climbed(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("Every import line in a piece of javascript that reaches a file in this repo by climbing out of wherever it is and walking back in by the name the repo is checked out under.");
  ("A neighbour is reached with one dot. Reaching it with two says something extra the file had no business knowing - the word somebody happened to call the folder they cloned into. Rename that folder, or clone it under another word, and every line spelled this way names a place that is not there; nothing goes red beforehand, because today the folder is still called what they say it is.");
  ("This asks about the line and not about the file the line is in, because it is handed the code alone. A file standing in another repo beside this one is spelling exactly this and is right to, so whoever sweeps with this has to say which files it is asking about; the reading on its own cannot tell.");
  ("A climb into a repo that is not this one is left alone. That is a real dependency, spelled the only way it can be spelled.");
  let ast = js_parse(code);
  let sources = js_imports_relative_paths(ast);
  let repo_js_path = folder_repo_love_js_spelled();
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

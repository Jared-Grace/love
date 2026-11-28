import { arguments_assert } from "./arguments_assert.mjs";
import { path_name } from "./path_name.mjs";
import { apps_page_language_or_null } from "./apps_page_language_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { html_code } from "./html_code.mjs";
import { html_code_page_of_language } from "./html_code_page_of_language.mjs";
export function html_code_regenerated(file_path, name, body) {
  "$plain file_path";
  "$plain name";
  "$plain body";
  "The page to write back over a generated page on disk, given the name and body read off it.";
  "A page per language is asked for by its file name rather than its title, because its title is in the reader's language and names no app - read back as a name it would come out as an app nobody has, and the page would lose its description and its card. Its own title and description are written back in, with its app's everything else.";
  arguments_assert(arguments, 3);
  let page_name = path_name(file_path);
  let page = apps_page_language_or_null(page_name);
  if (null_is(page)) {
    let code = html_code(name, body);
    return code;
  }
  let code_page = html_code_page_of_language(page, body);
  return code_page;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
export function file_names_html_js(app_name) {
  "$plain app_name";
  arguments_assert(arguments, 1);
  ("The two file names an app is built into - the page and the script - in that");
  ("order.");
  ("Named as the pair rather than asked for one at a time, because three addresses");
  ("want both together and none of them wants either alone: each is about to ask");
  ("of every piece of an app the same question, and what makes the question whole");
  ("is that the list is all of them.");
  ("Both names are always given here. Whether the file behind a name is there is a");
  ("different question, and the answer differs by where you look - what is served,");
  ("what is waiting on disk, what a frozen copy just built - so each address asks");
  ("it of its own place. A page carrying no script of its own is a real page, and");
  ("that is the case naming the pair up front used to get wrong.");
  let html = file_name_html(app_name);
  let js = file_name_js(app_name);
  let file_names = [html, js];
  return file_names;
}

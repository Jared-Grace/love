import { arguments_assert } from "./arguments_assert.mjs";
import { html_name_to_path_folder } from "./html_name_to_path_folder.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { app_shared_path_stage_served } from "./app_shared_path_stage_served.mjs";
export function app_shared_path_stage_served_named(stage_name, app_name) {
  "$plain stage_name";
  "$plain app_name";
  "The path an app's page at one named working stage is FETCHED at - the working stage gives /dev/code.html and the checked stage gives /latest/code.html.";
  "The stage arrives as a word rather than being fixed here, because the two stages hold the very same pages built out of the very same code and differ in nothing but which folder they were written into. A walk that can only reach one of them can only ever answer about that one.";
  "Which one a walk should ask for is not a question this can answer. It belongs to whoever just built something and wants to know whether the thing they built plays, and that is the caller.";
  arguments_assert(arguments, 2);
  let relative = html_name_to_path_folder(stage_name, app_name, file_name_html);
  let served = app_shared_path_stage_served(relative);
  return served;
}

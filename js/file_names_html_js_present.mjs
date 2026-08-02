import { file_names_html_js } from "./file_names_html_js.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
export async function file_names_html_js_present(app_name, lambda$path) {
  "$plain app_name";
  "the pieces of one app that are really there, out of the pair an app could have";
  "each one is asked for rather than assumed present. taking the pair on faith made every page carrying no script of its own report one that was never there";
  "where those pieces are living is the caller's business and nothing else changes between callers, so the caller hands over the way to turn a name into a path and this asks the same question of whatever comes back. one side asks it of what is waiting to be sent and another of what a frozen copy just built, and both are the same question";
  "the path is waited on, so a caller whose paths come back straight away is free to hand over something that does no waiting at all";
  let candidates = file_names_html_js(app_name);
  let present = [];
  for (let file_name of candidates) {
    let path = await lambda$path(file_name);
    let there = await file_exists(path);
    if (there) {
      list_add(present, file_name);
    }
  }
  return present;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { server_url } from "./server_url.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function qa_app_stage_public_url(app_name) {
  "$plain app_name";
  "the address on this machine an app is opened at as the public opens it - at the top of the site, with no stage folder in front of it. Opened with the latest build routed in, it shows what would go out.";
  arguments_assert(arguments, 1);
  let file_name = file_name_html(app_name);
  let left = server_url();
  let url = text_combine_multiple([left, "/", file_name]);
  return url;
}

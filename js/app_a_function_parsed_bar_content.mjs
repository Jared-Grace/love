import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_function_name_selected } from "./app_a_function_name_selected.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_a_function_upload } from "./app_a_function_upload.mjs";
import { app_a_function_download } from "./app_a_function_download.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { app_a_button } from "./app_a_button.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { html_bar_content } from "./html_bar_content.mjs";
export async function app_a_function_parsed_bar_content(context) {
  arguments_assert(arguments, 1);
  let f_name = app_a_function_name_selected(context);
  let parsed = await function_parse_unaliased(f_name);
  let ast = property_get(parsed, "ast");
  let root = property_get(context, "root");
  html_clear(root);
  async function upload() {
    let r = await app_a_function_upload();
    return r;
  }
  async function download() {
    let r5 = await app_a_function_download();
    return r5;
  }
  if (false) {
    let a2 = emoji_arrow_up();
    app_a_button(content, a2, upload);
    let text = emoji_arrow_down();
    app_a_button(content, text, download);
  }
  let bc = html_bar_content(root);
  let content = property_get(bc, "content");
  let bar = property_get(bc, "bar");
  return {
    f_name,
    parsed,
    ast,
    root,
    upload,
    download,
    content,
    bar,
  };
}

import { html_extension } from "../../../love/public/src/html_extension.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function file_name_html(name) {
  let file_name = text_combine(name, html_extension());
  return file_name;
}

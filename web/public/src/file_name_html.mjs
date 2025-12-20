import { html_extension } from "../../../love/public/src/html_extension.mjs";
export function file_name_html(name) {
  let file_name = name + html_extension();
  return file_name;
}

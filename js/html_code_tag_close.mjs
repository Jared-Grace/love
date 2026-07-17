import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_tag_close(tag_name) {
  let r = text_combine_multiple(["</", tag_name, ">"]);
  return r;
}

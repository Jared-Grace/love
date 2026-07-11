import { text_replace_space_to } from "../../../love/public/src/text_replace_space_to.mjs";
export function html_nbsp_replace(t) {
  let nbsp = "&nbsp;";
  let replaced = text_replace_space_to(t, nbsp);
  return replaced;
}

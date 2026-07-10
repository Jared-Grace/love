import { text_replace } from "../../../love/public/src/text_replace.mjs";
export function html_nbsp_replace(s) {
  const nbsp = "&nbsp;";
  let replaced = text_replace(s, " ", nbsp);
  return replaced;
}

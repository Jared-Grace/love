import { text_not_is } from "../../../love/public/src/text_not_is.mjs";
export function text_is_if_or_null(href) {
  let n = text_not_is(href);
  if (n) {
    href = null;
  }
  return href;
}

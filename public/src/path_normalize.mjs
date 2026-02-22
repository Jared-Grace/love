import { text_slash_forward } from "../../../love/public/src/text_slash_forward.mjs";
export function path_normalize(path) {
  let s = text_slash_forward();
  let n = path
    .replace(/\\/g, s)
    .replace(/\/+/g, s)
    .replace(/\/\.\//g, s)
    .replace(/\/$/, "")
    .replace(/^\.\/+/, "");
  return n;
}

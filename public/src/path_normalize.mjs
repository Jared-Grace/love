import { text_slash_forward } from "../../../love/public/src/text_slash_forward.mjs";
export function path_normalize(path) {
  let s = text_slash_forward();
  let s2 = text_slash_forward();
  let s3 = text_slash_forward();
  let n = path
    .replace(/\\/g, s)
    .replace(/\/+/g, s2)
    .replace(/\/\.\//g, s3)
    .replace(/\/$/, "")
    .replace(/^\.\/+/, "");
  return n;
}

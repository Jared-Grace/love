import { newline } from "../../../love/public/src/newline.mjs";
export function text_combine_newline(before, f_path) {
  let v2 = before + newline() + f_path;
  return v2;
}

import { file_extension_js } from "../../../love/public/src/file_extension_js.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function file_name_js(entryName) {
  let r2 = file_extension_js();
  let r = text_combine(entryName, r2);
  return r;
}

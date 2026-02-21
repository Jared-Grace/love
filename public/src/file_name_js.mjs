import { file_extension_js } from "../../../love/public/src/file_extension_js.mjs";
export function file_name_js(entryName) {
  let r2 = file_extension_js();
  let r = `${entryName}${r2}`;
  return r;
}

import { file_name_js } from "../../../love/public/src/file_name_js.mjs";
export function vite_config_file_name_get(format, entryName) {
  let r = file_name_js(entryName);
  return r;
}

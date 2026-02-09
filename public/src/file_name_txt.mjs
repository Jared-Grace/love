import { json_extension } from "../../../love/public/src/json_extension.mjs";
export function file_name_txt(name) {
  let file_name = name + json_extension();
  return file_name;
}

import { file_name_txt_extension } from "../../../love/public/src/file_name_txt_extension.mjs";
export function file_name_txt(name) {
  let file_name = name + file_name_txt_extension();
  return file_name;
}

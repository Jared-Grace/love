import { file_name_txt_extension } from "../../../love/public/src/file_name_txt_extension.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function file_name_txt(name) {
  let file_name = text_combine(name, file_name_txt_extension());
  return file_name;
}

import { json_extension } from "./json_extension.mjs";
import { text_combine } from "./text_combine.mjs";
export function file_name_json(name) {
  let file_name = text_combine(name, json_extension());
  return file_name;
}

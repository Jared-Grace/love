import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
export function json_format_to(object) {
  let json = json_format_to_spaces(object, 1);
  return json;
}

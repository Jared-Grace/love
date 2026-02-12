import { json_from } from "../../../love/public/src/json_from.mjs";
import { text_remove_while_starts_with } from "../../../love/public/src/text_remove_while_starts_with.mjs";
import { text_remove_if_starts_with } from "../../../love/public/src/text_remove_if_starts_with.mjs";
export function json_from_try(explains_json) {
  let removed = text_remove_if_starts_with(explains_json, "json");
  let removed2 = text_remove_while_starts_with(removed, "`");
  let result = json_from(removed2);
  return result;
}

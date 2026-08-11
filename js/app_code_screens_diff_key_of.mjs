import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_screens_diff_key_of(record) {
  arguments_assert(arguments, 1);
  let id = property_get(record, "id");
  let screen = property_get(record, "screen");
  let kind_text = property_text_to(record, "kind");
  let key = text_combine_multiple([id, "|", screen, "|", kind_text]);
  return key;
}

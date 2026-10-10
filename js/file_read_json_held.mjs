import { equal } from "./equal.mjs";
import { file_read_held } from "./file_read_held.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { property_get } from "./property_get.mjs";
import { json_from } from "./json_from.mjs";
import { object_freeze_deep } from "./object_freeze_deep.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function file_read_json_held(file_path) {
  "What a file holding JSON spells, worked out again only when the file has been written since this process last read it.";
  "The function facts record takes a quarter of a second to read and another to work out, and the pass that tidies one file asked for it several times over while it had not changed at all.";
  "What is handed back is frozen and shared by every caller. A caller that changed it would change it for every caller after, and for whatever writes it back to the disk - so instead of that happening in silence, the change throws at the line attempting it.";
  "Whether the file changed is the held reader's question, answered by when it was written and how long it is; the same text handed back means nothing new to work out.";
  let text = await file_read_held(file_path);
  let held_is = global_function_property_exists(file_read_json_held, file_path);
  if (held_is) {
    let held = global_function_property_get(file_read_json_held, file_path);
    let text_held = property_get(held, "text");
    if (equal(text, text_held)) {
      let parsed_held = property_get(held, "parsed");
      return parsed_held;
    }
  }
  let parsed = json_from(text);
  object_freeze_deep(parsed);
  let record = {
    text,
    parsed,
  };
  global_function_property_set(file_read_json_held, file_path, record);
  return parsed;
}

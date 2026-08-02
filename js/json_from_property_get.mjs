import { arguments_assert } from "./arguments_assert.mjs";
import { json_from } from "./json_from.mjs";
import { property_get } from "./property_get.mjs";
export function json_from_property_get(json, property_name) {
  arguments_assert(arguments, 2);
  ("One named part of a record that arrived written out as text.");
  ("A worker's reply carries the number of the job it answers, a hook's answer");
  ("carries its verdict, a translator's answer carries the translated words. In");
  ("every case the whole record is spelled out over the wire and only one thing in");
  ("it is wanted, so the reading back and the reaching in are one question.");
  let parsed = json_from(json);
  let held = property_get(parsed, property_name);
  return held;
}

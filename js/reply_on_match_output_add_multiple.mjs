import { reply_property_outputs } from "./reply_property_outputs.mjs";
import { reply_on_match_property_add_multiple } from "./reply_on_match_property_add_multiple.mjs";
export function reply_on_match_output_add_multiple(possibility, items) {
  let property_name = reply_property_outputs();
  reply_on_match_property_add_multiple(possibility, property_name, items);
}

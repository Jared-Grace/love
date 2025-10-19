import { reply_property_outputs } from "../../../love/public/src/reply_property_outputs.mjs";
import { reply_on_match_property_add_multiple } from "../../../love/public/src/reply_on_match_property_add_multiple.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function reply_on_match_output_add_multiple(possibility, items) {
  marker("1");
  const property_name = reply_property_outputs();
  reply_on_match_property_add_multiple(possibility, property_name, items);
}

import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function reply_on_match_output_add(possibility, item) {
  let outputs = property_get(possibility, "outputs");
  list_add(outputs, item);
}

import { list_add } from "../../../love/public/src/list_add.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function reply_on_match_output_add(possibility, item) {
  let outputs = property_get(possibility, "outputs");
  list_add(outputs, item);
}

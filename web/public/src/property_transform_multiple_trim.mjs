import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { property_transform_multiple } from "../../../love/public/src/property_transform_multiple.mjs";
export function property_transform_multiple_trim(list, property_name) {
  property_transform_multiple(list, property_name, text_trim);
}

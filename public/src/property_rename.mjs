import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_rename(
  item,
  property_name_before,
  property_name_after,
) {
  let value = property_get(item, property_name_before);
  object_property_set_exists_not(item, property_name_after, value);
  property_delete(item, property_name_before);
}

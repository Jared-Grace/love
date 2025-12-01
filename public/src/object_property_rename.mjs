import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_property_rename(
  item,
  property_name_before,
  property_name_after,
) {
  let value = object_property_get(item, property_name_before);
  object_property_set_exists_not(item, property_name_after, value);
  object_property_delete(object, property_name_before);
}

export function object_property_delete(object, property_name) {object_property_exists_assert
  delete object[property_name];
}

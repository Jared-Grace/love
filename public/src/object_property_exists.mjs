export function object_property_exists(object, property_name) {
  return object && Object.hasOwn(object, property_name);
}

export function property_exists(object, property_name) {
  const exists = object && Object.hasOwn(object, property_name);
  return exists;
}

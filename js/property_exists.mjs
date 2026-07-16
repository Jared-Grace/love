export function property_exists(object, property_name) {
  let exists = object ? Object.hasOwn(object, property_name) : false;
  return exists;
}

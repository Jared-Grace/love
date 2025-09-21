import { marker } from "./marker.mjs";
export function list_set(object, property_name, value) {
  marker("1");
  object[property_name] = value;
}

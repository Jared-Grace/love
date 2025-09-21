import { marker } from "./marker.mjs";
export function list_set(list, index, value) {
  marker("1");
  list[index] = value;
}

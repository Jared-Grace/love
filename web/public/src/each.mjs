import { marker } from "../../../love/public/src/marker.mjs";
export function each(list, lambda$item) {
  marker("1");
  for (let item of list) {
    lambda$item(item);
  }
}

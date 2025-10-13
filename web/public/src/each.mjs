import { marker } from "../../../love/public/src/marker.mjs";
export function each(list, lambda$item) {
  marker("1");
  for (let item of list) {
    if (lambda$item(item) === true) {
      return;
    }
  }
}

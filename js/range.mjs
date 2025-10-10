import { marker } from "../../../love/public/src/marker.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function range(count) {
  marker("1");
  let rr = [];
  for (let i = 0; i < count; i++) {
    list_add(rr, i);
  }
  return rr;
}

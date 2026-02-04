import { each_reverse } from "../../../love/public/src/each_reverse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function each_reverse_previous(list, lambda) {
  marker("1");
  function lambda2() {}
  let v = each_reverse(list, lambda2);
  return v;
}

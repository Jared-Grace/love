import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function invoke_multiple_args(list_fns, args) {
  marker("1");
  function lambda(fn) {
    fn(...args);
  }
  each(list_fns, lambda);
}

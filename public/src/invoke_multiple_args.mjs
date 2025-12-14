import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function invoke_multiple_args(list_fns, args) {
  marker("1");
  each(list_fns, () => {});
}

import { list_slice_include } from "../../../love/public/src/list_slice_include.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_slice_from() {
  marker("1");
  let sliced = list_slice_include(list, a, b);
}

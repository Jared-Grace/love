import { log } from "../../../love/public/src/log.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_slice_include(list, a, b) {
  log({});
  marker("1");
  let sliced = list_slice(list, a, b + 1);
  return sliced;
}

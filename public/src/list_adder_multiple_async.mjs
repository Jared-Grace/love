import { marker } from "./marker.mjs";
import { list_adder_generic } from "./list_adder_generic.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function list_adder_multiple_async(lambda$la) {
  marker("1");
  let fn = list_add_multiple;
  let list = list_adder_generic(lambda$la, fn);
  return list;
}

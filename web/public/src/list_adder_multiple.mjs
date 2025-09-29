import { list_adder_generic } from "../../../love/public/src/list_adder_generic.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function list_adder_multiple(lambda$la) {
  let fn = list_add_multiple;
  let list = list_adder_generic(lambda$la, fn);
  return list;
}

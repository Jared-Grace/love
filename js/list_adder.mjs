import { list_adder_generic } from "../../../love/public/src/list_adder_generic.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function list_adder(lambda$la) {
  let fn = list_add;
  let list = list_adder_generic(lambda$la, fn);
  return list;
}

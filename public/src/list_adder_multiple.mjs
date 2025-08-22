import { list_adder_generic } from "./list_adder_generic.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function list_adder_multiple(lambda) {
  let fn = list_add_multiple;
  let list = list_adder_generic(lambda, fn);
  return list;
}

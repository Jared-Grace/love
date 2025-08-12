import { list_adder_generic } from "./list_adder_generic.mjs";
import { list_add } from "./list_add.mjs";
export function list_adder(lambda) {
  let fn = list_add;
  let list = list_adder_generic(lambda, fn);
  return list;
}

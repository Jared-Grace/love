import { list_single } from "./list_single.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_adder_single(lambda) {
  let list = list_adder(lambda);
  let only = list_single(list);
  return only;
}

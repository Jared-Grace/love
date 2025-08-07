import { list_adder } from "./list_adder.mjs";
import { list_unique } from "./list_unique.mjs";
export function list_adder_unique(lambda) {
  let items = list_adder(lambda);
  return list_unique(items);
}

import { invoke_multiple } from "./invoke_multiple.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_adder_invoke(lambda) {
  let fns = list_adder(lambda);
  invoke_multiple(fns);
}

import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_adder_invoke(lambda) {
  let fns = list_adder(lambda);
  invoke_multiple(fns);
}

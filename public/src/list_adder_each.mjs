import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_adder_each(lambda$la) {
  function lambda() {}
  let list = list_adder(lambda);
  return list;
}

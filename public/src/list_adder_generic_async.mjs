import { marker } from "../../../love/public/src/marker.mjs";
export async function list_adder_generic_async(lambda, fn) {
  let list = [];
  function list_adder_inner(item) {
    fn(list, item);
  }
  await lambda(list_adder_inner);
  return list;
}

import { list_add } from "./list_add.mjs";
export async function list_adder_async(lambda) {
  let list = [];
  function list_adder_inner(item) {
    list_add(list, item);
  }
  await lambda(list_adder_inner);
  return list;
}

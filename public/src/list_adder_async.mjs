import { list_add } from "./list_add.mjs";
export async function list_adder_async(lambda) {
  let list = [];
  await lambda(function list_adder_inner(item) {
    list_add(list, item);
  });
  return list;
}

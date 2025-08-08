import { list_add } from "./list_add.mjs";

export function list_adder(lambda) {
  let list = [];
  lambda(function list_adder_inner(item) {
    list_add(list, item);
  });
  return list;
}

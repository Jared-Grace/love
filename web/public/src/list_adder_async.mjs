import { log } from "./log.mjs";
import { list_add } from "./list_add.mjs";
export async function list_adder_async(lambda$la) {
  let list = [];
  function list_adder_inner(item) {
    log(message);
    list_add(list, item);
  }
  await lambda$la(list_adder_inner);
  return list;
}

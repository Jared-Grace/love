import { log } from "../../../love/public/src/log.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_adder_single(lambda) {
  let list = list_adder(lambda);
  log(list_adder_single.name, {
    list,
  });
  let only = list_single(list);
  return only;
}

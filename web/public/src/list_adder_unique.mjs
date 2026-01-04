import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function list_adder_unique(lambda$la) {
  let items = list_adder(lambda$la);
  let unique = list_unique(items);
  return unique;
}

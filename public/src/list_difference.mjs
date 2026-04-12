import { list_difference_mapper } from "../../../love/public/src/list_difference_mapper.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export function list_difference(list, list_other) {
  let mapper = identity;
  let difference = list_difference_mapper(list, list_other, mapper);
  return difference;
}

import { list_difference_mapper } from "./list_difference_mapper.mjs";
import { identity } from "./identity.mjs";
export function list_difference(list, list_other) {
  let mapper = identity;
  let difference = list_difference_mapper(list, list_other, mapper);
  return difference;
}

import { list_difference_mapped } from "../../../love/public/src/list_difference_mapped.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export function list_difference(list, list_other) {
  let mapper = identity;
  let difference = list_difference_mapped(list, list_other, mapper);
  return difference;
}

import { identity } from "../../../love/public/src/identity.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
export function list_sort_number(m) {
  list_sort_number_mapper(m, identity);
}

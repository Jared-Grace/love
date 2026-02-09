import { identity } from "../../../love/public/src/identity.mjs";
import { list_sort_string_mapper } from "../../../love/public/src/list_sort_string_mapper.mjs";
export function list_sort_text(list) {
  list_sort_string_mapper(list, identity);
}

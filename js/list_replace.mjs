import { list_insert_generic } from "../../../love/public/src/list_insert_generic.mjs";
export function list_replace(list, index, value) {
  const delete_count = 1;
  list_insert_generic(index, list, delete_count, value);
}

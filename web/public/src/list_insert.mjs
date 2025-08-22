import { list_insert_generic } from "./list_insert_generic.mjs";
export function list_insert(list, index, value) {
  const delete_count = 0;
  list_insert_generic(index, list, delete_count, value);
}

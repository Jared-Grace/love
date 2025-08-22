import { list_insert } from "./list_insert.mjs";
export function list_add_first(body, statement) {
  list_insert(body, 0, statement);
}

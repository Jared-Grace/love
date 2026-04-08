import { log } from "../../../love/public/src/log.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
export function list_remove(list, item) {
  log(list_remove.name, {
    list,
  });
  const index = list_index_of(list, item);
  list_remove_at(list, index);
}

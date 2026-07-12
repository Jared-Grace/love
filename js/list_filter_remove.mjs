import { log } from "./log.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_remove(list, lambda$item) {
  let filtered = list_filter(list, lambda$item);
  log(list_filter_remove.name, {
    filtered,
  });
  list_remove_multiple(list, filtered);
}

import { log } from "../../../love/public/src/log.mjs";
import { list_remove_multiple } from "../../../love/public/src/list_remove_multiple.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_remove(existing, lambda) {
  let filtered = list_filter(existing, lambda);
  log(list_filter_remove.name, {
    filtered,
  });
  list_remove_multiple(existing, filtered);
}

import { log } from "../../../love/public/src/log.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_empty } from "../../../love/public/src/list_empty.mjs";
export function list_replace_all(list, list_new) {
  log({
    list,
    list_new,
  });
  list_empty(list);
  log({
    list,
    list_new,
  });
  list_add_multiple(list, list_new);
  log({
    list,
    list_new,
  });
}

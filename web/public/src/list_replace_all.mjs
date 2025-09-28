import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty } from "./list_empty.mjs";
export function list_replace_all(args, args_new) {
  list_empty(args);
  list_add_multiple(args, args_new);
}

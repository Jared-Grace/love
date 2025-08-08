import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";

export function list_get_end(stack, index_from_end) {
  list_get(stack, list_size(stack) - 1);
}

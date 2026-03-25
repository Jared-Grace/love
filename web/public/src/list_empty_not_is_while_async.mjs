import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
export function list_empty_not_is_while_async(queue, lambda) {
  while (list_empty_not_is(queue)) {
    lambda();
  }
}

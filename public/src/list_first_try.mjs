import { list_get_try } from "../../../love/public/src/list_get_try.mjs";
export function list_first_try(list) {
  const index = 0;
  const first = list_get_try(list, index);
  return first;
}

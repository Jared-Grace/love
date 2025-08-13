import { list_get } from "./list_get.mjs";
export function list_second(list) {
  const index = 1;
  const second = list_get(list, index);
  return second;
}

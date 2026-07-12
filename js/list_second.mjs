import { list_get } from "./list_get.mjs";
export function list_second(list) {
  let index = 1;
  let second = list_get(list, index);
  return second;
}

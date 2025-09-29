import { list_get } from "../../../love/public/src/list_get.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { random } from "../../../love/public/src/random.mjs";
export function list_random_item(arr) {
  const p = random() * list_size(arr);
  let index = floor(p);
  let r = list_get(arr, index);
  return r;
}

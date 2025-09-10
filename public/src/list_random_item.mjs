import { random } from "./random.mjs";
export function list_random_item(arr) {
  let r = arr[Math.floor(random() * arr.length)];
  return r;
}

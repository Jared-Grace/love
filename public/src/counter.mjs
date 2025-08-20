import { marker } from "./marker.mjs";
export function counter(lambda) {
  let i = 0;
  lambda(c);
  function c() {
    i++;
  }
  return i;
}

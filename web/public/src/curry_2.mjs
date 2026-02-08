import { curry_1 } from "../../../love/public/src/curry_1.mjs";
export function curry_2(fn) {
  let c = curry_1(fn);
  let r = curry_1(c);
  return r;
}

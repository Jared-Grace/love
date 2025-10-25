import { range_1 } from "../../../love/public/src/range_1.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function granddad() {
  let r = range_1(5);
  function lambda(item) {
    log(item * item);
  }
  each(r, lambda);
}

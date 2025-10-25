import { range } from "../../../love/public/src/range.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function granddad() {
  let r = range(5);
  function lambda(item) {
    log(item);
  }
  each(r, lambda);
}

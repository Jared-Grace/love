import { range_1 } from "../../../love/public/src/range_1.mjs";
import { each_index } from "./each_index.mjs";
export function granddad() {
  let r = range_1(5);
  function lambda(item, index) {}
  each_index(r, lambda);
}

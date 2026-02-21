import { abs } from "../../../love/public/src/abs.mjs";
export function date_diff_ms(now, before) {
  let v = Math.abs(now - before);
  return v;
}

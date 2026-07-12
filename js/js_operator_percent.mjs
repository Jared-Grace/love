import { modulo } from "./modulo.mjs";
export function js_operator_percent() {
  let operator = "%";
  let fn = modulo;
  let o = {
    fn,
    operator,
  };
  return o;
}

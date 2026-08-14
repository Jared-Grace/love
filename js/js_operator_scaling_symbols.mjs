import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
export function js_operator_scaling_symbols() {
  "The two signs that multiply and divide, as they are written.";
  "The pair alongside adding and taking away, and free to be reordered for the same reason: each number carries the sign in front of it, so a run of them says the same thing however it is laid out. What separates the two pairs is that they may not be mixed in one run, since multiplying is done before adding.";
  let times_sign = js_operator_asterisk_symbol();
  let over_sign = js_operator_division_symbol();
  let symbols = [times_sign, over_sign];
  return symbols;
}

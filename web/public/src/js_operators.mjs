import { js_operator_asterisk_verb } from "../../../love/public/src/js_operator_asterisk_verb.mjs";
import { js_operator_asterisk } from "../../../love/public/src/js_operator_asterisk.mjs";
import { js_operator_division_verb } from "../../../love/public/src/js_operator_division_verb.mjs";
import { js_operator_division } from "../../../love/public/src/js_operator_division.mjs";
import { js_operator_minus_verb } from "../../../love/public/src/js_operator_minus_verb.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { js_operator_plus_verb } from "../../../love/public/src/js_operator_plus_verb.mjs";
import { js_operator_plus } from "../../../love/public/src/js_operator_plus.mjs";
export function js_operators() {
  let r2 = [
    {
      verb: js_operator_plus(),
      operator: js_operator_plus_verb(),
    },
    {
      verb: js_operator_minus(),
      operator: js_operator_minus_verb(),
    },
    {
      verb: js_operator_division(),
      operator: js_operator_division_verb(),
    },
    {
      verb: js_operator_asterisk(),
      operator: js_operator_asterisk_verb(),
    },
  ];
  return r2;
}

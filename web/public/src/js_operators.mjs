import { js_operator_asterisk_verb } from "../../../love/public/src/js_operator_asterisk_verb.mjs";
import { js_operator_asterisk } from "../../../love/public/src/js_operator_asterisk.mjs";
import { js_operator_division_verb } from "../../../love/public/src/js_operator_division_verb.mjs";
import { js_operator_division } from "../../../love/public/src/js_operator_division.mjs";
import { js_operator_minus_verb } from "../../../love/public/src/js_operator_minus_verb.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { js_operator_plus_verb } from "../../../love/public/src/js_operator_plus_verb.mjs";
import { js_operator_plus } from "../../../love/public/src/js_operator_plus.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
export function js_operators() {
  let os = [
    {
      operator: js_operator_plus(),
      verb: js_operator_plus_verb(),
      left_transform: identity,
    },
    {
      operator: js_operator_minus(),
      verb: js_operator_minus_verb(),
      left_transform: add,
    },
    {
      operator: js_operator_asterisk(),
      verb: js_operator_asterisk_verb(),
      left_transform: identity,
    },
    {
      operator: js_operator_division(),
      verb: js_operator_division_verb(),
      left_transform: multiply,
    },
  ];
  return os;
}

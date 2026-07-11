import { js_operator_asterisk_verb } from "../../../love/public/src/js_operator_asterisk_verb.mjs";
import { js_operator_asterisk_symbol } from "../../../love/public/src/js_operator_asterisk_symbol.mjs";
import { js_operator_division_verb } from "../../../love/public/src/js_operator_division_verb.mjs";
import { js_operator_division_symbol } from "../../../love/public/src/js_operator_division_symbol.mjs";
import { js_operator_minus_verb } from "../../../love/public/src/js_operator_minus_verb.mjs";
import { js_operator_minus_symbol } from "../../../love/public/src/js_operator_minus_symbol.mjs";
import { js_operator_plus_verb } from "../../../love/public/src/js_operator_plus_verb.mjs";
import { js_operator_plus_symbol } from "../../../love/public/src/js_operator_plus_symbol.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
export function js_operators_arithmetic() {
  let os = [
    {
      operator: js_operator_plus_symbol(),
      verb: js_operator_plus_verb(),
      left_transform: identity,
    },
    {
      operator: js_operator_minus_symbol(),
      verb: js_operator_minus_verb(),
      left_transform: add,
    },
    {
      operator: js_operator_asterisk_symbol(),
      verb: js_operator_asterisk_verb(),
      left_transform: identity,
    },
    {
      operator: js_operator_division_symbol(),
      verb: js_operator_division_verb(),
      left_transform: multiply,
    },
  ];
  return os;
}

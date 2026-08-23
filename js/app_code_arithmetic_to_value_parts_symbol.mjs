import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { integer_random_below } from "./integer_random_below.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_arithmetic_to_value_parts_symbol(value, symbol) {
  arguments_assert(arguments, 2);
  ("a small arithmetic line written with the operator asked for that comes to the value asked for, given as its three pieces: 7 asked for with / comes back as 21, / and 3");
  ("Pieces rather than a line of text, because the two things a lesson wants out of this cannot both be got from the text. A line to print wants the writing; a line to press one operator at a time wants a shape, and reading the shape back out of the writing is a parser written to undo a printer standing next to it.");
  ("Each of +, - and / has a form that works for ANY value from 2 up, so a caller asking for a particular value and a particular operator is never turned away and never has to ask twice.");
  ("The operator is handed in rather than drawn here, because two callers want opposite things of it. A line whose two sides should look unalike draws one for each side; a line the lesson is about to say holds two of the SAME operator draws one and asks twice with it.");
  function form_add() {
    "the value split into two addends, both at least 1";
    let left = integer_random_below(value);
    let right = subtract(value, left);
    let parts = {
      left,
      symbol,
      right,
    };
    return parts;
  }
  function form_subtract() {
    "a larger number minus a small one, landing on the value";
    let right = integer_random(1, 4);
    let left = add(value, right);
    let parts = {
      left,
      symbol,
      right,
    };
    return parts;
  }
  function form_divide() {
    "a multiple of a small divisor, divided back down to the value";
    let right = integer_random(2, 4);
    let left = multiply(value, right);
    let parts = {
      left,
      symbol,
      right,
    };
    return parts;
  }
  let forms = {};
  let plus = js_operator_plus_symbol();
  property_set(forms, plus, form_add);
  let minus = js_operator_minus_symbol();
  property_set(forms, minus, form_subtract);
  let division = js_operator_division_symbol();
  property_set(forms, division, form_divide);
  let form = property_get(forms, symbol);
  let built = form();
  return built;
}

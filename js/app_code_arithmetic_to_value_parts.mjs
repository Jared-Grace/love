import { add } from "./add.mjs";
import { integer_random } from "./integer_random.mjs";
import { integer_random_below } from "./integer_random_below.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_arithmetic_to_value_parts(value) {
  "a random small arithmetic expression that comes to the value asked for, given as its three pieces: the number on the left, the operator, and the number on the right";
  "Pieces rather than a line of text, because the two things a lesson wants out of this cannot both be got from the text. A line to print wants the writing; a line to press one operator at a time wants a shape, and reading the shape back out of the writing is a parser written to undo a printer standing next to it.";
  "Each of +, - and / has a form that works for ANY value from 2 up, so a caller asking for a particular value is never turned away and never has to ask twice. There is no * form, because a small product needs a factor pair the value may not have.";
  "Three forms rather than one, because the point of asking twice for the same value is two sides that look different and come to the same number - 3 + 4 === 5 + 2. Two sides drawn from one form would look like the same working out twice.";
  function form_add() {
    "the value split into two addends, both at least 1";
    let left = integer_random_below(value);
    let right = subtract(value, left);
    let parts = {
      left,
      symbol: "+",
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
      symbol: "-",
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
      symbol: "/",
      right,
    };
    return parts;
  }
  let forms = [form_add, form_subtract, form_divide];
  let chosen = list_random_item(forms);
  let built = chosen();
  return built;
}

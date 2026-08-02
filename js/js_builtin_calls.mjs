import { text_frozen } from "./text_frozen.mjs";
import { round } from "./round.mjs";
import { floor } from "./floor.mjs";
import { ceil } from "./ceil.mjs";
import { abs } from "./abs.mjs";
import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { json_to } from "./json_to.mjs";
import { json_from } from "./json_from.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
export function js_builtin_calls() {
  "Every method of a built-in this repo already keeps a function of its own for, paired with that function and with the name the built-in is reached through.";
  "Only the methods a function already stands for are listed. One with nothing standing for it is not a gap this list can fill - naming it here would leave the rewrite pointing at a name nothing answers to, which is worse than leaving the built-in call alone.";
  "The name before the dot is carried on every line rather than assumed, because a method name on its own does not say which built-in it belongs to. Both halves are asked for, so a method spelled the same on two built-ins cannot be answered with the wrong one.";
  "The names are frozen because several of them are spelled exactly like the function standing for them. Left plain, the canonicalising pass reads such a word as a reference to that function - so renaming the function would quietly rename the method being looked for, and the rewrite would stop finding anything while still reading as if it worked.";
  let math = text_frozen("Math");
  let json = text_frozen("JSON");
  let date = text_frozen("Date");
  let calls = [
    {
      object: math,
      member: text_frozen("round"),
      fn: round,
    },
    {
      object: math,
      member: text_frozen("floor"),
      fn: floor,
    },
    {
      object: math,
      member: text_frozen("ceil"),
      fn: ceil,
    },
    {
      object: math,
      member: text_frozen("abs"),
      fn: abs,
    },
    {
      object: math,
      member: text_frozen("max"),
      fn: math_max,
    },
    {
      object: math,
      member: text_frozen("min"),
      fn: math_min,
    },
    {
      object: json,
      member: text_frozen("stringify"),
      fn: json_to,
    },
    {
      object: json,
      member: text_frozen("parse"),
      fn: json_from,
    },
    {
      object: date,
      member: text_frozen("now"),
      fn: date_now_milliseconds,
    },
  ];
  return calls;
}

import { text_frozen } from "./text_frozen.mjs";
import { round } from "./round.mjs";
import { floor } from "./floor.mjs";
import { ceil } from "./ceil.mjs";
import { abs } from "./abs.mjs";
import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
export function js_builtin_calls() {
  "Every method of the built-in Math this repo already keeps a function of its own for, paired with that function.";
  "Only the methods a function already stands for are listed. One with nothing standing for it is not a gap this list can fill - naming it here would leave the rewrite pointing at a name nothing answers to, which is worse than leaving the built-in call alone.";
  "The method names are frozen because four of them are spelled exactly like the function standing for them. Left plain, the canonicalising pass reads such a word as a reference to that function - so renaming the function would quietly rename the method being looked for, and the rewrite would stop finding anything while still reading as if it worked.";
  let calls = [
    {
      member: text_frozen("round"),
      fn: round,
    },
    {
      member: text_frozen("floor"),
      fn: floor,
    },
    {
      member: text_frozen("ceil"),
      fn: ceil,
    },
    {
      member: text_frozen("abs"),
      fn: abs,
    },
    {
      member: text_frozen("max"),
      fn: math_max,
    },
    {
      member: text_frozen("min"),
      fn: math_min,
    },
  ];
  return calls;
}

import { list_any } from "./list_any.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function app_code_expression_step_reason(symbol, others) {
  arguments_assert(arguments, 2);
  ("The one sentence saying why this operator is the one that may be worked out next, as the pieces of a row: the operators it outranks, or the one it shares a rank with and stands to the left of, or nothing left to outrank at all.");
  ("A rule the learner can carry to the next line, rather than a fact about this one. Saying that only this part has a value on each side is true of the shape underneath the line and is not something a reader can see: shown 5 - 2 + 4, both the minus and the plus look like they have a number on each side, and the reason the minus goes first is that the two are read left to right. A telling that names what is invisible asks to be taken on trust and leaves the learner nothing to use on the next line.");
  ("Three cases and no more, because the operators fall into two ranks. Something weaker still on the line means the rank decides; nothing weaker means the two are equals and the position decides; nothing at all left means there was never a choice.");
  ("The weaker operators are named in the order the line writes them, all of them, because the rule is about this operator against every one of them - naming only the first would read as a fact about that pair.");
  let none_left = list_empty_is(others);
  if (none_left) {
    let alone = ["The ", symbol, " is the only operator left"];
    return alone;
  }
  let strong_symbols = app_code_operators_strong();
  function strong_is(candidate) {
    "whether one of the other operators is solved before the others too";
    let held = list_includes(strong_symbols, candidate);
    return held;
  }
  let strong = list_includes(strong_symbols, symbol);
  let any_strong = list_any(others, strong_is);
  let right = not(any_strong);
  let outranks = and(strong, right);
  if (outranks) {
    let parts = ["The ", symbol, " is solved before the "];
    let first = true;
    for (let weaker of others) {
      let later = not(first);
      if (later) {
        list_add(parts, " and the ");
      }
      list_add(parts, weaker);
      first = false;
    }
    return parts;
  }
  let other = list_first(others);
  let same = equal(other, symbol);
  if (same) {
    ("a line carrying the same operator twice has no second symbol to name, and naming the one it has twice would read as two different operators");
    let repeated = ["The ", symbol, " operators are solved left to right"];
    return repeated;
  }
  let equals = [
    "The ",
    symbol,
    " and the ",
    other,
    " are solved left to right",
  ];
  return equals;
}

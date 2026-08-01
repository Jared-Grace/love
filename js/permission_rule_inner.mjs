import { text_empty } from "./text_empty.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function permission_rule_inner(rule) {
  arguments_assert(arguments, 1);
  ("what one allow rule grants, which is the text between its parentheses, or empty text when the rule is not in that shape");
  ("a rule is a tool name and then a thing in brackets, so every reader of a rule takes the brackets off before it can ask anything at all about what is inside. Two readers were doing that separately and a third was about to, and the three would have had to agree by hand about a rule with no brackets and a rule whose brackets never close.");
  let opening = "(";
  let closing = ")";
  let at = rule.indexOf(opening);
  let b = less_than(at, 0);
  if (b) {
    let v = text_empty();
    return v;
  }
  let b2 = text_ends_with(rule, closing);
  if (not(b2)) {
    let v2 = text_empty();
    return v2;
  }
  let difference = subtract(rule.length, closing.length);
  let after_opening = at + 1;
  let inner = rule.slice(after_opening, difference);
  return inner;
}

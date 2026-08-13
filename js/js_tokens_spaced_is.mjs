import { equal } from "./equal.mjs";
import { js_token_value_is } from "./js_token_value_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function js_tokens_spaced_is(before, previous, token) {
  "whether a space belongs between previous and token when tokens are written back out as code. before is the token standing in front of previous, and is needed for one thing only: telling a minus that subtracts from a minus that negates.";
  let start = equal(previous, null);
  if (start) {
    return false;
  }
  ("a closing bracket, a comma, a semicolon and a dot are written against what comes before them");
  let tight = [")", "]", ",", ";", "."];
  let tight_is = list_includes(tight, token);
  if (tight_is) {
    return false;
  }
  ("and nothing is written after an opening bracket or a dot");
  let opens = ["(", "[", "."];
  let opened = list_includes(opens, previous);
  if (opened) {
    return false;
  }
  let previous_value = js_token_value_is(previous);
  ("a ( after a value is a call and a [ after one is a lookup, so both are written against it; after anything else the bracket groups, and grouping is spaced like the operator it follows");
  let attaching = ["(", "[", "--", "++"];
  let attaches = list_includes(attaching, token);
  if (attaches) {
    let r = not(previous_value);
    return r;
  }
  if (previous_value) {
    return true;
  }
  ("previous is an operator. With a value in front of it it joins two things and is spaced on both sides; with nothing in front of it it acts on what follows and is written against it.");
  let before_value = js_token_value_is(before);
  return before_value;
}

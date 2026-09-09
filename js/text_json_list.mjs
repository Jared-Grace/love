import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
export function text_json_list(text) {
  "$plain text";
  "The JSON list held inside a stretch of ordinary text, however the text wraps it, and nothing at all where there is no list in there or what is in there does not parse.";
  ("★ IT EXISTS BECAUSE A WRITING MODEL TOLD TO ANSWER WITH JSON AND NOTHING ELSE STILL OFTEN DOES NOT. It fences the list in backticks, or opens with a line saying here are the scenes, or closes with an offer to write more - and every one of those is a reply that is right in every way that matters and unreadable to `$fn ",
    fn_name("json_parse_try"),
    "`. Throwing the whole ask away over a sentence of politeness means paying for the ask twice.");
  ("★ IT TAKES THE FIRST OPENING BRACKET AND THE LAST CLOSING ONE, WHICH IS THE ONLY CUT THAT IS RIGHT FOR NESTED DATA. Taking the first closing bracket cuts a list of objects off at its first inner list; taking the last opening one starts inside one. What lies between the outermost pair is the whole list wherever the list is the largest structure in the text, and that is the case this is for - a reply built around one answer, not a page holding several.");
  ("IT ANSWERS NOTHING RATHER THAN THROWING, because a caller of this is a caller reading a stranger's words, and a reply that came back as an apology or an error message is an ordinary outcome there rather than a broken program. Whoever asks decides what to do with a reply that held no list.");
  ("IT NEVER CHECKS WHAT IS IN THE LIST. What a caller wants of the entries is the caller's own question, and a check written here would be a rule about scenes living in a text helper.");
  arguments_assert(arguments, 1);
  let opened = text.indexOf("[");
  let closed = text.lastIndexOf("]");
  let missing = less_than(opened, 0) || less_than(closed, opened);
  if (missing) {
    let nothing = null;
    return nothing;
  }
  let inner = text.slice(opened, closed + 1);
  let parsed = json_parse_try(inner);
  return parsed;
}

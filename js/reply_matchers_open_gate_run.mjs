import { arguments_assert } from "./arguments_assert.mjs";
import { functions_reply_matchers_open_callers_walked } from "./functions_reply_matchers_open_callers_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { reply_matchers_open } from "./reply_matchers_open.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function reply_matchers_open_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no live reply rule may call a matcher that accepts any word at all. Read-only.");
  ("★ IT RATCHETS AGAINST NOTHING RATHER THAN AGAINST WHAT THE REPO ALREADY HAS, because what the repo already has is nothing. The one piece of this kind was written for the proposal bench and has never been called, so there is no history here to grandfather and a record seeded at zero would be a file whose only content is that it is empty.");
  ("What it is holding is a decision, not a bug. Matching on any word makes a rule ambiguous - the piece lands on the next word of every message, so the rule answers messages it was never aimed at - and the narrower piece is preferred even where the wider one would reach more people. That decision was made once; without this, keeping it made would mean noticing a call in a review, every time, forever.");
  ("It does not touch the proposal bench and is not meant to. A proposal may go on spelling one of these names and arguing for it, because a proposal is a question put to somebody rather than a rule. The line this draws is between written down and answering real messages.");
  ("The names it is watching are printed on a clean run. A list read from somewhere else is the one thing that could make this pass while checking nothing, so seeing the set is how a reader tells a clean answer apart from an empty question - and only a clean answer raises it, since one naming offenders has already shown it looked.");
  let told = await functions_reply_matchers_open_callers_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let names = list_map_property(offenders, "f_name");
  let open = reply_matchers_open();
  let joined = list_join_comma(open);
  let hint = text_combine_multiple([
    "these functions call a reply matcher that accepts any word at all, which makes every rule built on them ambiguous - match against a written-down list instead, or leave the call on the proposal bench until somebody has agreed to it. The matchers held open are ",
    joined,
  ]);
  let r = list_empty_is_assert_walked_generic(walked, names, hint);
  console.log("matchers held open: " + joined);
  return r;
}

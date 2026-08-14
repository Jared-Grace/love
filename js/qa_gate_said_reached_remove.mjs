import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function qa_gate_said_reached_remove(said) {
  "Everything a gate said with the far half of each arrow taken out, so that what is read back is WHO reached rather than WHAT was reached.";
  ("Gates here write an offence as a pair with an arrow between them, and the arrow points the same way in every one of them: the function at fault stands on the left, and what it reached, hides or holds stands on the right. ",
    fn_name("hash_fields_all"),
    " -> ",
    fn_name("app_code_hash_fields"),
    " is a complaint about ",
    fn_name("hash_fields_all"),
    ". The right-hand name is evidence, and it is not accused of anything.");
  ("Reading both halves as accused is not a small inaccuracy, because of what the reading is FOR. A red gate's names are matched against what one app ships, to decide whether that gate can hold that app's deployment. The name on the right of an arrow is app-specific exactly when the offence is worth reporting, so it is precisely the offences that matter that get filed against the wrong app - and the app so filed is the one that did nothing, cannot see the fault, and cannot repair it. Measured on 2026-08-14: the code app was held out of a deployment by ",
    fn_name("hash_fields_all"),
    ", which nothing the code app ships even imports.");
  ("Taking the right half out cannot hide an offender, because the offender is the left half and every left half survives. It can only stop an innocent name being counted.");
  ("An entry ends at the quote that closes it or at the end of its line, whichever comes first, because a gate writes these both ways - inside a list it throws, and printed one to a line before it throws.");
  let arrow = " -> ";
  let quote = '"';
  let line_break = "\n";
  let pieces = [];
  let rest = said;
  let more = true;
  while (more) {
    let at = rest.indexOf(arrow);
    let last = less_than(at, 0);
    if (last) {
      list_add(pieces, rest);
      more = false;
      continue;
    }
    let before = rest.slice(0, at);
    list_add(pieces, before);
    let after = rest.slice(at + arrow.length);
    let length = after.length;
    let quote_found = after.indexOf(quote);
    let line_break_found = after.indexOf(line_break);
    let quote_at = less_than(quote_found, 0) ? length : quote_found;
    let line_break_at = less_than(line_break_found, 0)
      ? length
      : line_break_found;
    let end = less_than(quote_at, line_break_at) ? quote_at : line_break_at;
    rest = after.slice(end);
  }
  let left = text_combine_multiple(pieces);
  return left;
}

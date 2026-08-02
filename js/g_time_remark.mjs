import { list_concat } from "./list_concat.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_time_part } from "./g_time_part.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_time_remark(time, christian) {
  ("a whole sentence an NPC can say ABOUT the time of day — hoping your morning is going well rather than simply naming it. the shape a greeting word cannot carry: a greeting sits in front of your name and has to stay short, so anything longer than good morning has to be its own sentence. always answers one, and the caller decides whether to use it (",
    fn_name("g_greeting"),
    " takes it about half the time), which is what keeps the same NPC from sounding like a recording. no full stop here — the caller picks the dot or the exclamation mark, so the same sentence can land calm or warm");
  let part = g_time_part(time);
  ("every opening below takes the plain present tense, so any opening pairs with any closing and all twelve read. a wish opening (may your …) would need be rather than is and would break exactly half the pairs, which is why there isn't one");
  let openings = ["Hope your ", "I hope your ", "I trust your "];
  ("a believer hopes the same things and says them the same way, so the faith openings are added to the plain ones rather than swapped in — and they are openings rather than closings because praying for your day is a way of hoping, not a different thing to hope. both keep the plain present tense, so all twenty pairs still read");
  if (christian) {
    let openings_faith = ["I pray your ", "I'm praying your "];
    openings = list_concat(openings, openings_faith);
  }
  let closings = [
    " is going well",
    " has been a good one",
    " is treating you kindly",
    " is a blessed one",
  ];
  let opening = list_random_item(openings);
  let closing = list_random_item(closings);
  let remark = text_combine_multiple([opening, part, closing]);
  return remark;
}

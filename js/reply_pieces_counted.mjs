import { property_count_add } from "./property_count_add.mjs";
import { reply_property_pieces } from "./reply_property_pieces.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
export function reply_pieces_counted(rule) {
  "A rule that reads what the given rule reads, and notes on every reading that one more piece of the message was answered.";
  "★ COUNTED ONLY WHERE A PIECE IS ONE REPLY - THE TOP OF THE RULES, NOT INSIDE ONE. Inside a rule, two readings of the same words give the same reply, so counting there would weigh nothing real.";
  function count(possibilities) {
    for (let possibility of possibilities) {
      let key = reply_property_pieces();
      property_count_add(possibility, key, 1);
    }
  }
  let r = reply_on_match(rule, [count]);
  return r;
}

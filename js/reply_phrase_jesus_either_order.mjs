import { reply_phrase_jesus } from "./reply_phrase_jesus.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_phrase_jesus_either_order() {
  "Jesus, Christ, Jesus Christ or Christ Jesus, all standing for one another.";
  let name = reply_phrase_jesus();
  let reversed = reply_sequence(["christ", "jesus"]);
  let either = reply_choice([name, reversed]);
  return either;
}

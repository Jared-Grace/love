import { reply_either_both_unordered } from "./reply_either_both_unordered.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_phrase_jesus() {
  "Every way of saying the name of Jesus, each standing for the others. Lord is not one of them, because it also names the Father.";
  let jesus = "jesus";
  let christ = "christ";
  let name = reply_either_both_unordered(jesus, christ);
  let yeshua = "yeshua";
  let messiah = "messiah";
  let yeshua_messiah = reply_sequence([yeshua, "the", messiah]);
  let phrase_jesus = reply_choice([name, yeshua, messiah, yeshua_messiah]);
  return phrase_jesus;
}

import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_phrase_jesus() {
  "Every way of saying the name of Jesus, each standing for the others. Lord is not one of them, because it also names the Father.";
  let jesus = reply_choice(["jesus", "iesus"]);
  let christ = "christ";
  ("★ THE ORDER HERE DOES NOT DECIDE HOW A MESSAGE IS SPLIT. A verse ending in Christ Jesus can be read as ending at Christ, with Jesus left over for the rule that answers his name. Listing the two-word names first did not stop that, measured 2026-11-11 on Philippians 4:7. What stops it is the tie-break at the top: of two readings costing the same, the one in fewer replies wins.");
  let jesus_christ = reply_sequence([jesus, christ]);
  let christ_jesus = reply_sequence([christ, jesus]);
  let yeshua = "yeshua";
  let messiah = "messiah";
  let yeshua_messiah = reply_sequence([yeshua, "the", messiah]);
  let messiah_yeshua = reply_sequence([messiah, yeshua]);
  let phrase_jesus = reply_choice([
    jesus_christ,
    christ_jesus,
    yeshua_messiah,
    messiah_yeshua,
    jesus,
    christ,
    yeshua,
    messiah,
  ]);
  return phrase_jesus;
}

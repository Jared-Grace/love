import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_phrase_jesus() {
  "Every way of saying the name of Jesus, each standing for the others. Lord is not one of them, because it also names the Father.";
  let jesus = reply_choice(["jesus", "iesus"]);
  let christ = "christ";
  ("★ THE TWO-WORD NAMES ARE LISTED BEFORE THE ONE-WORD ONES. Two readings that cost the same are settled by which was found first, so with Christ listed alone ahead of Christ Jesus, a verse ending in Christ Jesus was read as ending at Christ, and Jesus was left over for the rule that answers his name - a second reply. Measured 2026-11-11 on Philippians 4:7.");
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

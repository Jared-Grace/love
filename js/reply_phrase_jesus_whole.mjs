import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_phrase_jesus_whole() {
  "The two-word names of Jesus only: Jesus Christ, Christ Jesus, Yeshua the Messiah, Messiah Yeshua.";
  "★ FOR A PLACE WHERE THE NAME MUST BE READ WHOLE OR NOT AT ALL. A verse that ends in Christ Jesus, read with Christ alone allowed, could stop after Christ and leave Jesus to the rule that answers his name. Both readings cost nothing, so the tie went to the split and the verse got two replies. Measured 2026-11-11 on Philippians 4:7.";
  let jesus = reply_choice(["jesus", "iesus"]);
  let christ = "christ";
  let jesus_christ = reply_sequence([jesus, christ]);
  let christ_jesus = reply_sequence([christ, jesus]);
  let yeshua = "yeshua";
  let messiah = "messiah";
  let yeshua_messiah = reply_sequence([yeshua, "the", messiah]);
  let messiah_yeshua = reply_sequence([messiah, yeshua]);
  let whole = reply_choice([
    jesus_christ,
    christ_jesus,
    yeshua_messiah,
    messiah_yeshua,
  ]);
  return whole;
}

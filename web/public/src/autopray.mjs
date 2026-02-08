import { each_object } from "../../../love/public/src/each_object.mjs";
import { text_may_the_lord } from "../../../love/public/src/text_may_the_lord.mjs";
import { prayer_end } from "../../../love/public/src/prayer_end.mjs";
import { prayer_start } from "../../../love/public/src/prayer_start.mjs";
import { kjv } from "../../../love/public/src/kjv.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export async function autopray() {
  let v = kjv();
  function lambda2(verse_text, verse_reference) {
    let v2 = prayer_start();
    let v3 = prayer_end();
    let v4 = text_may_the_lord();
    let p = list_join_newline([
      v2,
      v4,
      "lead all creation to hear, believe, obey, enjoy and proclaim the word of God:",
      verse_text,
      verse_reference,
      v3,
    ]);
    log_keep(p);
  }
  while (true) {
    each_object(v, lambda2);
  }
}

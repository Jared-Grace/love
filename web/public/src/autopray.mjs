import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_may_the_lord } from "../../../love/public/src/string_may_the_lord.mjs";
import { prayer_end } from "../../../love/public/src/prayer_end.mjs";
import { prayer_start } from "../../../love/public/src/prayer_start.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { kjv } from "../../../love/public/src/kjv.mjs";
import { sleep } from "./sleep.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function autopray() {
  marker("1");
  let v = kjv();
  async function lambda2(verse_text, verse_reference) {
    let v2 = prayer_start();
    let v3 = prayer_end();
    let v4 = string_may_the_lord();
    let p = list_join_newline([
      v2,
      v4,
      "lead all creation to hear, believe, obey, enjoy and proclaim the word of God:",
      verse_text,
      verse_reference,
      v3,
    ]);
    log(p);
    const isaiah_chapters_count = 66;
    await sleep(isaiah_chapters_count);
  }
  while (true) {
    await each_object_async(v, lambda2);
  }
}

import { isaiah_chapters_count } from "../../../love/public/src/isaiah_chapters_count.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_may_the_lord } from "../../../love/public/src/text_may_the_lord.mjs";
import { prayer_end } from "../../../love/public/src/prayer_end.mjs";
import { prayer_start } from "../../../love/public/src/prayer_start.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { kjv } from "../../../love/public/src/kjv.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
export async function app_autopray_main(context) {
  let root = property_get(context, "root");
  let v = kjv();
  async function lambda2(verse_text, verse_reference) {
    html_clear(root);
    let v2 = prayer_start();
    let v3 = prayer_end();
    let v4 = text_may_the_lord();
    html_p_text_multiple(root, [
      v2,
      v4,
      "lead all creation to hear, believe, obey, enjoy and proclaim the word of God:",
      verse_text,
      verse_reference,
      v3,
    ]);
    const c = isaiah_chapters_count();
    await sleep(c);
  }
  while (true) {
    await each_object_async(v, lambda2);
  }
}

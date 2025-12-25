import { string_may_the_lord } from "../../../love/public/src/string_may_the_lord.mjs";
import { prayer_end } from "../../../love/public/src/prayer_end.mjs";
import { prayer_start } from "../../../love/public/src/prayer_start.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { kjv } from "../../../love/public/src/kjv.mjs";
import { sleep } from "./sleep.mjs";
export async function app_autopray_main(context) {
  let root = $g;
  let v = kjv();
  async function lambda2(verse_text, verse_reference) {
    html_clear(root);
    let v2 = prayer_start();
    let v3 = prayer_end();
    let v4 = string_may_the_lord();
    html_p_text_multiple(root, [
      v2,
      v4,
      "lead all creation to hear, believe, obey, enjoy and proclaim the word of God:",
      verse_text,
      verse_reference,
      v3,
    ]);
    const isaiah_chapters_count = 66;
    await sleep(isaiah_chapters_count);
  }
  while (true) {
    await each_object_async(v, lambda2);
  }
}

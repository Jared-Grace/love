import { isaiah_chapters_count } from "./isaiah_chapters_count.mjs";
import { property_get } from "./property_get.mjs";
import { text_may_the_lord } from "./text_may_the_lord.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { object_map_async } from "./object_map_async.mjs";
import { sleep } from "./sleep.mjs";
export async function app_autopray(context) {
  let root = property_get(context, "root");
  async function lambda(verse_text, verse_reference) {
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
    let c = isaiah_chapters_count();
    await sleep(c);
  }
  while (true) {
    await object_map_async(v, lambda);
  }
}

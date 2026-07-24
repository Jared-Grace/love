import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
import { app_autopray } from "./app_autopray.mjs";
import { text_may_the_lord } from "./text_may_the_lord.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { sleep } from "./sleep.mjs";
import { isaiah_chapters_count } from "./isaiah_chapters_count.mjs";
export async function app_autopray_verse_show(root, reference, verse_text) {
  html_clear(root);
  let v = prayer_start();
  let v3 = prayer_end();
  let v4 = text_may_the_lord();
  html_p_text_multiple(root, [
    v,
    v4,
    "lead all creation to hear, believe, obey, enjoy and proclaim the word of God:",
    verse_text,
    reference,
    v3,
  ]);
  ("add the way to reach the developer while this verse is on screen — it is drawn fresh each verse because the page is cleared every time, so it stays visible through the pause below rather than flickering");
  app_shared_contact_button(root, app_autopray);
  let c = isaiah_chapters_count();
  await sleep(c);
}

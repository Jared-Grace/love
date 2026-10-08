import { html_clear } from "./html_clear.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { text_may_the_lord } from "./text_may_the_lord.mjs";
import { prayer_lead_all_creation } from "./prayer_lead_all_creation.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { isaiah_chapters_count } from "./isaiah_chapters_count.mjs";
import { sleep } from "./sleep.mjs";
export async function app_autopray_verse_show(root, reference, verse_text) {
  html_clear(root);
  let v = prayer_start();
  let v3 = prayer_end();
  let v4 = text_may_the_lord();
  let v5 = prayer_lead_all_creation();
  html_p_text_multiple(root, [v, v4, v5, verse_text, reference, v3]);
  ("add the foot of the page while this verse is on screen — it is drawn fresh each verse because the page is cleared every time, so it stays visible through the pause below rather than flickering");
  app_shared_footer(root);
  let c = isaiah_chapters_count();
  await sleep(c);
}

import { arguments_assert } from "./arguments_assert.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { log } from "./log.mjs";
import { html_scroll_top_now } from "./html_scroll_top_now.mjs";
export async function app_shared_gloss_bible_home_generic_scroll(verses_inner) {
  arguments_assert(arguments, 1);
  let p2 = list_first_property(verses_inner, "p_verse");
  log(app_shared_gloss_bible_home_generic_scroll.name, {
    p: p2,
    verses: verses_inner,
  });
  await html_scroll_top_now(p2);
}

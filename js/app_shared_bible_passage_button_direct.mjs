import { fn_name } from "./fn_name.mjs";
import { html_style_background } from "./html_style_background.mjs";
import { app_shared_game_button_green } from "./app_shared_game_button_green.mjs";
import { app_shared_scripture } from "./app_shared_scripture.mjs";
export function app_shared_bible_passage_button_direct(
  reference,
  verse_text,
  overlay,
  lambda,
) {
  ("a Bible passage choice button built from a reference + verse text DIRECTLY (no chapter-code lookup) — for verses that carry their own reference/text (e.g. the how-are-you comfort verses, which span many books). dark bg + light-green reference + glowing gold verse (",
    fn_name("app_shared_scripture"),
    "); the base that ",
    fn_name("app_g_bible_passage_button"),
    " delegates to");
  let b = app_shared_game_button_green(overlay, "", lambda);
  html_style_background(b, "rgba(0, 0, 0, 0.8)");
  app_shared_scripture(b, reference, verse_text);
  return b;
}

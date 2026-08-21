import { app_g_overlay_fonts } from "./app_g_overlay_fonts.mjs";
import { app_shared_scripture_verse } from "./app_shared_scripture_verse.mjs";
import { property_get } from "./property_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_overlay_verse_add(card, drawn) {
  "put a drawn Scripture onto the card of a prayer-family overlay: the words, then the reference under them.";
  "the words are gold and the reference is white, and that is not decoration - gold is what this game gives God's own word everywhere, so the two are coloured apart to say which of them He said and which is only where to find it.";
  "the drawn verse arrives already chosen, because which one to show is the whole difference between the overlays: the prayer-wait draws on waiting, the dove draws on the Spirit's leading. what to do with one once it is drawn is the same either way, and was written out twice before this had a name - eight lines each, down to the width the words are allowed to run to.";
  let fonts = app_g_overlay_fonts();
  let text = property_get(drawn, "text");
  let verse = html_p_text(card, text);
  html_style_assign(verse, {
    "font-size": fonts.verse,
    margin: "0",
    "max-width": "80vw",
    "text-align": "center",
  });
  app_shared_scripture_verse(verse);
  let text_reference = property_get(drawn, "reference");
  let reference = html_p_text(card, text_reference);
  html_style_assign(reference, {
    color: "white",
    "font-size": fonts.reference,
    margin: "0",
    "text-align": "center",
  });
  return verse;
}

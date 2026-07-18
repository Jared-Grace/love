import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { app_shared_color_gold_text } from "./app_shared_color_gold_text.mjs";
export function app_g_scripture(parent, reference, verse_text) {
  "render displayed Scripture inline: reference (green) + 📖 (the written-word marker) + verse (softly glowing GOLD text = God's word); DRY across gospel-share passage buttons and the prayer-wait verse";
  let reference_span = html_span_text(parent, reference);
  html_style_set(reference_span, "color", "#a0eaa0");
  let separator = html_span_text(parent, "📖");
  html_style_assign(separator, {
    margin: "0 0.6em",
    "font-size": "0.8em",
    opacity: "0.7",
  });
  let verse_span = html_span_text(parent, verse_text);
  html_style_set(verse_span, "color", app_shared_color_gold_text());
  html_bold_mild(verse_span);
  html_style_set(verse_span, "text-shadow", "0 0 0.2em rgba(255, 255, 255, 0.7)");
}

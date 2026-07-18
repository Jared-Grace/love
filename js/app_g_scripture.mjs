import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_scripture_verse } from "./app_g_scripture_verse.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_scripture(parent, reference, verse_text) {
  "render displayed Scripture inline: reference (green) + 📖 (the written-word marker) + glowing gold verse (app_g_scripture_verse); attaches the reference/verse spans to `parent` so a discernment reveal can restyle them onto the gold surface (verse → dark inscribed, reference → dark green, kept NOT-gold)";
  let reference_span = html_span_text(parent, reference);
  html_style_set(reference_span, "color", "#a0eaa0");
  let separator = html_span_text(parent, "📖");
  html_style_assign(separator, {
    margin: "0 0.6em",
    "font-size": "0.8em",
    opacity: "0.7",
  });
  let verse_span = html_span_text(parent, verse_text);
  app_g_scripture_verse(verse_span);
  property_set(parent, "reference_span", reference_span);
  property_set(parent, "verse_span", verse_span);
}

import { app_g_scripture_reference_god_says } from "./app_g_scripture_reference_god_says.mjs";
import { app_g_scripture_separator_font_size } from "./app_g_scripture_separator_font_size.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_scripture_verse } from "./app_g_scripture_verse.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_scripture(parent, reference, verse_text) {
  ("render displayed Scripture inline: reference (green) + 📖 (the written-word marker) + glowing gold verse (",
    app_g_scripture_verse.name,
    "); attaches the reference/verse spans to `parent` so a discernment reveal can restyle them onto the gold surface (verse → dark inscribed, reference → dark green, kept NOT-gold)");
  let said = app_g_scripture_reference_god_says(reference);
  let reference_span = html_span_text(parent, said);
  html_font_color_set(reference_span, "#a0eaa0");
  let separator = html_span_text(parent, "📖");
  let font_size = app_g_scripture_separator_font_size();
  html_style_assign(separator, {
    margin: "0 0.6em",
    "font-size": font_size,
    opacity: "0.7",
  });
  let verse_span = html_span_text(parent, verse_text);
  app_g_scripture_verse(verse_span);
  property_set(parent, "reference_span", reference_span);
  property_set(parent, "verse_span", verse_span);
}

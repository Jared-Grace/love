import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { app_shared_container_trim_frame } from "./app_shared_container_trim_frame.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
export function app_shared_container_blue_medium_titled(parent, title_text) {
  "a nested card headed by its centered name in the deep blue of the card family, holding whatever the caller draws into the div it hands back - the section level of a testament to section to books tree, so the book picker and the search results group the same way. its left-right padding is trimmed so what sits inside gets the row width";
  let card = app_shared_container_blue_medium(parent);
  ("the framing card's trim, the same amount the testament card above it wears: a page listing every section of both testaments spends most of its height and width on these frames, and the books inside them are what the reader came to see");
  app_shared_container_trim_frame(card);
  let header = html_div_text_centered(card, title_text);
  let color = app_shared_color_blue_dark();
  html_font_color_set(header, color);
  let body = html_div_centered(card);
  return body;
}

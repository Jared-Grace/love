import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
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
  ("this is the one level of the nesting that stands apart from its neighbours by more than the frame gap, because these are the groups a reader scans down - Law, History, Poetry, Prophets - and at the frame gap alone they ran together as one field of buttons with headings in it. The extra is small on purpose: enough that the eye finds where one group ends, not so much that a testament stops fitting on a screen. Only the top gap is named, so the last group still closes the same distance from the testament's bottom edge as it does from its sides.");
  let value = app_shared_spaced_tiny_gap();
  html_style_margin_top(card, value);
  let header = html_div_text_centered(card, title_text);
  let color = app_shared_color_blue_dark();
  html_font_color_set(header, color);
  let body = html_div_centered(card);
  return body;
}

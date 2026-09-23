import { property_get } from "./property_get.mjs";
import { app_shared_mobile_default_bible_font_size } from "./app_shared_mobile_default_bible_font_size.mjs";
import { app_index_cards_draw } from "./app_index_cards_draw.mjs";
export function app_index_generic(context, entries) {
  let root = property_get(context, "root");
  ("★ THE SIZE THIS OPENS AT IS THE ONE CHOSEN IN THE BIBLE READER, not one of its own. The twin that reads a page's own remembered size is right for a page a reader settles into, because that is where the buttons changing it are; this page has no such buttons, so its own remembered size is one nobody ever chose. It stayed at the size everything starts at while somebody who needed larger text had already said so next door, and they met that answer again every time they came back here to open anything - the one page in the way of every other, telling them it was not part of what they were reading.");
  app_shared_mobile_default_bible_font_size(context);
  let cards = app_index_cards_draw(root, entries);
  return cards;
}

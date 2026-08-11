import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { each } from "./each.mjs";
import { app_verses_card4_refresh } from "./app_verses_card4_refresh.mjs";
export function app_verses_display(card, verse_groups, display_group) {
  arguments_assert(arguments, 3);
  html_clear(card);
  each(verse_groups, display_group);
  app_verses_card4_refresh(verse_groups, card);
}

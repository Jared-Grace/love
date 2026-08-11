import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
export function app_verses_card4_refresh(verse_groups, card) {
  arguments_assert(arguments, 2);
  let empty = list_empty_is(verse_groups);
  html_display_none_or_block(empty, card);
}

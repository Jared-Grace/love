import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_mobile_default_bible_font_size } from "./app_shared_mobile_default_bible_font_size.mjs";
import { app_shared_folds } from "./app_shared_folds.mjs";
import { app_shared_folds_set } from "./app_shared_folds_set.mjs";
import { app_shared_buttons_expand_collapse } from "./app_shared_buttons_expand_collapse.mjs";
import { false_get } from "./false_get.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { app_shared_folds_collapsible } from "./app_shared_folds_collapsible.mjs";
import { app_index_cards_draw } from "./app_index_cards_draw.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
export function app_index_categories_show(context, entries) {
  "The front page's apps, gathered under the thing a visitor came to do - reading, learning, sharing - each group a card that folds, and handed back every app card drawn, one row per card, in the order they were drawn.";
  "★ EVERY GROUP STARTS SHUT, and that is the whole point of having groups. Open, the page is the same column of fifteen cards it was before, and somebody looking for one app still reads down all of them; shut, the first screen of a phone holds every group's name at once, and the one thing asked of the reader is which of six they came for.";
  "The open-everything and shut-everything pair sits above the groups because a page that hides things behind taps owes the reader both: somebody who wants to see every app, or to find one with their browser's own search, cannot do either while the groups are shut.";
  "The rows handed back are the cards themselves and not the groups, so the one caller that writes into a card later - the chapter counts on the two language apps - finds its card the same way wherever the card was drawn. A shut group still holds its cards, so the count is written into it all the same and is there when the group is opened.";
  arguments_assert(arguments, 2);
  let root = property_get(context, "root");
  app_shared_mobile_default_bible_font_size(context);
  let folds = app_shared_folds();
  function expand_all() {
    app_shared_folds_set(folds, false);
  }
  function collapse_all() {
    app_shared_folds_set(folds, true);
  }
  let groups = [folds];
  ("opening a group is only folding - its cards are already on the page - so once every group is open there is nothing more to open");
  app_shared_buttons_expand_collapse(
    root,
    {
      expand_all_lambda: expand_all,
      collapse_all_lambda: collapse_all,
      folds_expand: groups,
      folds_collapse: groups,
      expand_more_is: false_get,
    },
    "groups of apps",
  );
  let gathered = list_group_by_property(entries, "category");
  let cards = [];
  function group_show(group) {
    let title = property_get(group, "key");
    let items = property_get(group, "items");
    let card = app_shared_folds_collapsible(folds, root, title);
    let body = property_get(card, "body");
    let drawn = app_index_cards_draw(body, items);
    list_add_multiple(cards, drawn);
  }
  each(gathered, group_show);
  app_shared_folds_set(folds, true);
  return cards;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_index_dev_build_card } from "./app_index_dev_build_card.mjs";
import { app_index_built_card } from "./app_index_built_card.mjs";
import { app_index_dev_links_draw } from "./app_index_dev_links_draw.mjs";
import { app_index_dev_about_card } from "./app_index_dev_about_card.mjs";
import { app_index_dev_g_card } from "./app_index_dev_g_card.mjs";
export function app_index_dev_cards_draw(root, about_opened) {
  "Every card the front page shows only while somebody is working on this site, drawn in the order they have always come in.";
  "★ THEY LIVE IN THEIR OWN PIECE, fetched only on a machine on this same network, because every one of them already refused to draw anywhere else - and still every visitor to the public page downloaded all of them to be told no. Measured on 2026-09-23: the public page stood four bytes under its ceiling, and a card a visitor would actually see could not be added.";
  "Each card still asks for itself whether it is wanted. The fetch is asked the same question first, so the answer is given twice on the working machine and the cards are never reached anywhere else; the second asking is kept because it is what each card was written to do on its own.";
  arguments_assert(arguments, 2);
  ("the way into the dev builds comes before the working links, because it is not a place to go but a choice of which copy of everything on this page the rest of it leads to");
  app_index_dev_build_card(root);
  ("and the same card the other way for whoever is standing in the dev build, so the way back to the ordinary site is a tap rather than an address typed out on a phone. Exactly one of the two ever shows, because each asks which copy this page is.");
  app_index_built_card(root);
  app_index_dev_links_draw(root);
  ("about sits here with the working links rather than among the apps, because it is the same kind of thing they are: a way in for whoever is working, and worth one tap instead of the four it takes to reach the same paragraph through an app's settings.");
  app_index_dev_about_card(root, about_opened);
  ("the dev tools card comes after the apps, not among them: it is not an app somebody came here to use, it is the way in to the game's test screens from a phone, which has no localhost to reach them from");
  app_index_dev_g_card(root);
}

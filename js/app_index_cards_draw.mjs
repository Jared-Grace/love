import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { app_index_card_link } from "./app_index_card_link.mjs";
import { app_index_label } from "./app_index_label.mjs";
import { window_app_url_generic } from "./window_app_url_generic.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { list_map } from "./list_map.mjs";
export function app_index_cards_draw(root, entries) {
  "one card per app, drawn into whatever it is handed - the page itself, or one folding group of it - and handed back one row per card.";
  "It takes the place to draw into rather than finding the page itself, because the front page draws its cards into several folding groups while the page listing every app draws them straight onto the page; the cards are the same cards either way.";
  let hash = {};
  ("an app opens in a tab of its own, so this page stays where it is and a reader who came here to open two things does not have to come back for the second.");
  ("The tab that could not be typed into was a tab this page OPENED, by running window.open itself. Measured on a phone: a box in such a tab received keyup for every letter and never keydown, so nothing was ever entered, while the same page reached by its own address took every letter. The letters were lost before the page saw them, so no code here could have caught it or fixed it.");
  ("A real link is not that. The browser follows it itself, and the page it lands on is one reached by its own address - the case that was measured WORKING. Whether that holds on the phone in question is the thing being found out, and until it has been there is one place to change it back: the card below is the only kind of card on this page that leads to an app.");
  ("A link also gives a reader the choice this page cannot give them: held down rather than tapped, a browser offers to open it here, or beside this, or to keep the address. A button offers none of those, whichever way its lambda was written.");
  ("★ WHAT WAS DRAWN IS HANDED BACK, one row per card, each carrying the app it leads to and the line of writing under its button. A caller that has nothing more to say ignores it and this page is what it always was. The one caller that does have more to say is the front page, which learns how many chapters two of these apps have published only after every card is already on the screen - a number that arrives late can only be put somewhere that was kept hold of.");
  ("A card may instead lead off this site - a video channel, say - and then it carries its own address and its own label, and no app. Its row is handed back with no app, so nothing written late about an app can land on it.");
  function card_drawn(entry) {
    let text = property_get(entry, "text");
    let away = property_exists(entry, "url");
    if (away) {
      let label_away = property_get(entry, "label");
      let url_away = property_get(entry, "url");
      let caption_away = app_index_card_link(root, label_away, text, url_away);
      let r = {
        app_fn: null,
        text,
        caption: caption_away,
      };
      return r;
    }
    let fn = property_get(entry, "app_fn");
    let label = app_index_label(fn);
    let url = window_app_url_generic(app_shared_name_prefix_without, fn, hash);
    let caption = app_index_card_link(root, label, text, url);
    let drawn = {
      app_fn: fn,
      text,
      caption,
    };
    return drawn;
  }
  let cards = list_map(entries, card_drawn);
  return cards;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue_collapsible } from "./app_shared_container_blue_collapsible.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_spaced_small } from "./app_shared_spaced_small.mjs";
import { app_music_reference_show } from "./app_music_reference_show.mjs";
import { list_add } from "./list_add.mjs";
export function app_music_song_line_show(folds, parent, words, references) {
  "$plain words";
  "$plain references";
  "One sung line as a card that opens: the words themselves for a title, and folded behind them the passages that line rests on.";
  "IT STARTS SHUT, so what a reader meets is the song and not a wall of scripture. Everything in it is already drawn and already filled - shutting is only display - so opening it is instant and the browser's own find still reaches nothing that is hidden, which is why the page also offers a button that opens the lot.";
  "The card that folds is the shared one every page here folds with, so the caret, what tapping the title does, and how it is opened from outside are the same here as in the search results.";
  "It joins the page's group of folding cards as it is drawn, which is how the open-everything and shut-everything buttons above know whether either of them still has anything to do - including after a reader has opened lines one at a time.";
  "It hands back the places waiting for words, because those are wanted by the whole page rather than by this line: one fetch fills every line at once.";
  arguments_assert(arguments, 4);
  let r = app_shared_folds_collapsible(folds, parent, words);
  let body = property_get(r, "body");
  let collapsed_set = property_get(r, "collapsed_set");
  app_shared_spaced_small(body);
  let asked_list = [];
  for (let reference of references) {
    let asked = app_music_reference_show(body, reference);
    list_add(asked_list, asked);
  }
  collapsed_set(true);
  let shown = {
    asked_list: asked_list,
  };
  return shown;
}

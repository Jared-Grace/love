import { app_shared_bible_languages_offered } from "./app_shared_bible_languages_offered.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
export function app_shared_bible_languages_choosable_is(context) {
  "Whether this app has more than one language to offer, and so whether there is a choice to put in front of a reader at all.";
  "A chooser holding a single entry asks a question with one answer. The reader reads it, works out what it is for, taps the only line on it and arrives back where they started - and the app has spent their attention to tell them nothing. Where there is nothing to choose, the way in is not shown.";
  "It is asked rather than declared, so an app that gains a second language gains its chooser in the same breath and nobody has to remember to turn one on.";
  let offered = app_shared_bible_languages_offered(context);
  let several = list_size_greater_than(offered, 1);
  return several;
}

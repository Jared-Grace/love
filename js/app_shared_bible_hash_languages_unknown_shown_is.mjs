import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { app_shared_bible_language_unknown_screen } from "./app_shared_bible_language_unknown_screen.mjs";
import { ebible_language_codes_unknown } from "./ebible_language_codes_unknown.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_shared_bible_hash_languages_unknown_shown_is(parent, hash) {
  "The one line a bible page puts in front of its own work: did the link name a language nobody has, and has the reader been shown so? A page that hears yes has nothing left to do and should stop.";
  "It answers and draws in the same breath so that a page cannot ask and then forget to say anything. The alternative shape - one function to ask and another to tell - is two calls a page can get half right, and getting it half right is the silence this exists to end.";
  "It is asked before a single bible is fetched. Every reader of these codes downstream goes looking for the one language a code names and throws when it names none, and the throw happens inside the page's opening, before a line is drawn - so the reader is left on the words a page paints while it starts, for ever.";
  let codes = app_shared_bible_hash_to_languages_chosen(hash);
  let unknown = ebible_language_codes_unknown(codes);
  let all_known = list_empty_is(unknown);
  if (all_known) {
    return false;
  }
  app_shared_bible_language_unknown_screen(parent, unknown);
  return true;
}

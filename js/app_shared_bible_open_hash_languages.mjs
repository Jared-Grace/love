import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { app_shared_bible_open } from "./app_shared_bible_open.mjs";
export function app_shared_bible_open_hash_languages(
  chapter_code,
  verse,
  mode,
) {
  arguments_assert(arguments, 3);
  ("The bible reader opened beside this page, at a chapter the caller names, in whatever languages the address of this page already names.");
  ("$plain chapter_code");
  ("$plain verse");
  ("IT EXISTS BECAUSE THE ORDER HAS TO BE TURNED ROUND TWICE AND ONE CALLER FORGOT. A link keeps the language read down the middle last and a chosen list keeps it first, so ",
    fn_name("app_shared_bible_open_generic"),
    " turns the list round on the way out; a caller handing it a list read straight out of an address has to turn it round first or the reader opens with the middle language swapped. That is invisible wherever one language is named and wrong the moment two are, which is the shape of defect nothing goes red about.");
  ("SO THE TURNING ROUND LIVES HERE ONCE rather than at every place that wants to hand the reader over. A caller that has languages of its own to name still calls the generic underneath; this is only for the common case of passing on what the address already says.");
  ("An address naming no language at all is English, which is what the reader opens at anyway - so a page with no language setting of its own, like the picture Bible, hands over nothing and loses nothing.");
  let languages_chosen = app_shared_bible_languages_chosen_get();
  list_reverse(languages_chosen);
  app_shared_bible_open(languages_chosen, chapter_code, verse, mode);
}

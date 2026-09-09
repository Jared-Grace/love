import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_dash_pieces_absent } from "./app_ceb_bible_gloss_words_dash_pieces_absent.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_words_dash_pieces_absent_words() {
  arguments_assert(arguments, 0);
  ("Just the pieces themselves out of the dashed-word reading: the runs of letters the store's own word list holds that the store explains nowhere on its own.");
  ("The reading they come out of answers with the dashed words as well as the pieces, because a piece means nothing without the word it was cut from. Three readings then put those pieces to a different witness - a dictionary that has not been asked, the translation the explanations are about, the roots authors have claimed - and none of the three wants the dashed words at all. Each was asking for the reading and then taking that one field out of it.");
  let measured = await app_ceb_bible_gloss_words_dash_pieces_absent();
  let absent = property_get(measured, "words_absent");
  return absent;
}

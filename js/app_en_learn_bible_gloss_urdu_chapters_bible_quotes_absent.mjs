import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_urdu_chapters_quote_index } from "./ebible_urdu_chapters_quote_index.mjs";
import { gloss_passages_bible_quotes_absent_urdu } from "./gloss_passages_bible_quotes_absent_urdu.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_claims_generic } from "./app_en_learn_bible_gloss_urdu_chapters_claims_generic.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_bible_quotes_absent() {
  "Every authored chapter of the Urdu-explained English store holding an explanation that quotes another chapter of the Bible with words that chapter of the Urdu Bible does not hold.";
  "The Bible is read once and handed to every chapter, because the sweep asks of each chapter only its own passages and the Bible is the same for all of them.";
  arguments_assert(arguments, 0);
  let index = await ebible_urdu_chapters_quote_index();
  function claims(passages, text_index, word_keys_read) {
    let found = gloss_passages_bible_quotes_absent_urdu(
      passages,
      text_index,
      word_keys_read,
      index,
    );
    return found;
  }
  let r = await app_en_learn_bible_gloss_urdu_chapters_claims_generic(claims);
  return r;
}

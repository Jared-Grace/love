import { app_ceb_bible_gloss_words_dash_kept_distinct } from "./app_ceb_bible_gloss_words_dash_kept_distinct.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_cebuano_words_unwritten } from "./bible_cebuano_words_unwritten.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_unwritten() {
  "The words the Cebuano gloss store explains that the Cebuano translation never writes standing alone.";
  "★ AN EXPLANATION IS PAINTED UNDER A WORD OF THE VERSE, SO A WORD IN THIS LIST IS AN EXPLANATION THE READER CANNOT FIND ANYTHING TO STAND IT ON. Every explained word was supposed to have come out of the passage it sits under, which is why this list should be nearly empty and why whatever is in it is worth reading one by one rather than counting. It is not the same question as the dash pieces: those are made by the reader cutting a word up, while these are words an author actually wrote down as the thing being explained.";
  "The store's own spelling is kept and the dash with it, so a word joined by a dash is asked about whole rather than in halves - the halves are a different measurement and already have one.";
  "The comparison against the translation, the lowering of both sides and the counting of the written words are the shared test, which the dash pieces ask in exactly the same words; what is chosen here is only which words to put to it.";
  arguments_assert(arguments, 0);
  let explained = await app_ceb_bible_gloss_words_dash_kept_distinct();
  let measured = await bible_cebuano_words_unwritten(explained);
  let words = property_get(measured, "lowered");
  let unwritten = property_get(measured, "unwritten");
  let r = {
    explained: list_size(words),
    written_words: property_get(measured, "written_words"),
    unwritten: list_size(unwritten),
    words: unwritten,
  };
  return r;
}

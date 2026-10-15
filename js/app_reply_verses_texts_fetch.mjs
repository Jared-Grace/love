import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { bible_references_old_testament } from "./bible_references_old_testament.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_reply_verses_add } from "./app_reply_verses_add.mjs";
import { each_async } from "./each_async.mjs";
export async function app_reply_verses_texts_fetch(
  verse_count,
  encouragement,
  encouragement_singles,
  jewish,
  languages_chosen,
) {
  "Picks verses at random and fetches them in the chosen languages, handing back the lines a reply shows: each reference, then its words in every language.";
  "The languages are handed in as a list rather than read off the holder while fetching, because a fetch made ahead of time is still running after a button has put the holder back the way it was.";
  arguments_assert(arguments, 5);
  let e = encouragement;
  if (equal(verse_count, 1)) {
    e = encouragement_singles;
  }
  if (jewish) {
    e = bible_references_old_testament(e);
  }
  let taken = list_shuffle_take(e, verse_count);
  let texts = [];
  let reference_current = null;
  async function reference_each(reference) {
    reference_current = await app_reply_verses_add(
      reference,
      reference_current,
      texts,
      languages_chosen,
    );
  }
  await each_async(taken, reference_each);
  return texts;
}

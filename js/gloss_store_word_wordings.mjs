import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_word_explains_counted } from "./gloss_chapter_word_explains_counted.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
export async function gloss_store_word_wordings(fn, lambda$pointer_is) {
  "The settled wording one whole gloss store gives each word - the explanation written for it most often anywhere in the store, counting only explanations that say something.";
  "A word is explained again at every place it stands, and the wordings drift, so there is rarely one answer. The commonest is taken because the question being asked of this table is not what the best wording is but whether any wording exists at all: an entry whose explanation points at a word met earlier, when no earlier entry said anything, sends its reader nowhere, and any real sentence about the word is better than that.";
  "The count is kept rather than the first one found, so a wording written once in passing does not outrank one written two hundred times.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_count(chapter_code) {
    let counted = await gloss_chapter_word_explains_counted(
      chapter_code,
      fn,
      lambda$pointer_is,
    );
    return counted;
  }
  let per_chapter = await list_map_async(chapter_codes, chapter_count);
  let gathered = {};
  for (let chapter of per_chapter) {
    let words = object_property_names(chapter);
    for (let word of words) {
      let wordings = property_get(chapter, word);
      let held = property_get_or_null(gathered, word);
      let fresh = null_is(held);
      if (fresh) {
        held = {};
        property_set(gathered, word, held);
      }
      let explains = object_property_names(wordings);
      for (let explain of explains) {
        let counted = property_get(wordings, explain);
        let seen = property_get_or_null(held, explain);
        let before = 0;
        let again = null_not_is(seen);
        if (again) {
          before = seen;
        }
        let value = add(before, counted);
        property_set(held, explain, value);
      }
    }
  }
  let settled = {};
  let words = object_property_names(gathered);
  for (let word of words) {
    let held = property_get(gathered, word);
    let explains = object_property_names(held);
    let best = null;
    let most = 0;
    for (let explain of explains) {
      let counted = property_get(held, explain);
      let better = greater_than(counted, most);
      if (better) {
        most = counted;
        best = explain;
      }
    }
    property_set(settled, word, best);
  }
  return settled;
}

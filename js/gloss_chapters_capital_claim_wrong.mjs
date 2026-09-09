import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_capital_claim_wrong } from "./gloss_chapter_capital_claim_wrong.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_capital_claim_wrong(
  fn,
  lambda$capital_claim_is,
) {
  "How many explanations across one whole gloss store say the word is written with a capital letter, how many of those sit on a word carrying no capital at all, and which words and wordings those were.";
  "Every chapter is judged on its own and the answers are added, rather than the store being heaped into one list, because a chapter is what a reader goes down in one sitting and the fault is a sentence that is false where it stands.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let found = await gloss_chapter_capital_claim_wrong(
      chapter_code,
      fn,
      lambda$capital_claim_is,
    );
    return found;
  }
  let founds = await list_map_async(chapter_codes, chapter_read);
  function claiming_read(found) {
    let claiming_found = property_get(found, "claiming");
    return claiming_found;
  }
  function wrong_read(found) {
    let wrong_found = property_get(found, "wrong");
    return wrong_found;
  }
  function words_read(found) {
    let words_found = property_get(found, "words");
    return words_found;
  }
  function wordings_read(found) {
    let wordings_found = property_get(found, "wordings");
    return wordings_found;
  }
  let claiming = list_map_sum(founds, claiming_read);
  let wrong = list_map_sum(founds, wrong_read);
  let nested = list_map(founds, words_read);
  let list = list_flat(nested);
  let words = list_unique(list);
  let nested2 = list_map(founds, wordings_read);
  let list2 = list_flat(nested2);
  let wordings = list_unique(list2);
  let r = {
    chapters: list_size(chapter_codes),
    claiming,
    wrong,
    words,
    wordings,
  };
  return r;
}

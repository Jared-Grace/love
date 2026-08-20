import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_verse_numbers } from "./ebible_version_verse_numbers.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { property_get } from "./property_get.mjs";
import { equal_by_json_lambda } from "./equal_by_json_lambda.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
export async function ebible_version_numbering_agreement(bible_folder) {
  "$plain bible_folder";
  "How far one bible numbers its verses the way the English bible everything else is read in does.";
  "A search result is an address - a chapter and a verse number - and the words it promises are then shown from whichever bible the reader is in. A bible numbering differently, as the Septuagint and the Vulgate do through the Psalms, therefore hands the reader an address pointing at somebody else's verse, and the words searched for are not in it.";
  "Measured chapter by chapter over the chapters both carry: a chapter agrees when the two name exactly the same verse numbers in it, in the same order. Books one carries and the other does not say nothing either way, so they are passed over rather than counted against it - the search already drops a result whose book the reader's bible has not got.";
  let english = ebible_folder_english();
  let mine = await ebible_version_verse_numbers(bible_folder);
  let reference = await ebible_version_verse_numbers(english);
  let mine_codes = properties_get(mine);
  let reference_codes = properties_get(reference);
  let shared_codes = list_intersect(mine_codes, reference_codes);
  function chapter_agrees(chapter_code) {
    let ours = property_get(mine, chapter_code);
    let theirs = property_get(reference, chapter_code);
    let same_is = equal_by_json_lambda(theirs);
    let same = same_is(ours);
    return same;
  }
  let disagreeing = list_filter_not(shared_codes, chapter_agrees);
  let shared = list_size(shared_codes);
  let disagreed = list_size(disagreeing);
  let agreed = subtract(shared, disagreed);
  let ratio = divide(agreed, shared);
  let r = {
    bible_folder,
    shared,
    agreed,
    ratio,
    disagreeing,
  };
  return r;
}

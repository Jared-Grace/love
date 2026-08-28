import { property_null_is } from "./property_null_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_versions_years_sorted } from "./bible_usfm_versions_years_sorted.mjs";
import { bible_usfm_versions } from "./bible_usfm_versions.mjs";
import { bible_usfm_versions_years } from "./bible_usfm_versions_years.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function bible_usfm_versions_years_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: prove the shelf of bibles and the years written down for them still name the same set, so neither list can quietly drift away from the other.");
  ("THE TWO LISTS ARE KEPT APART ON PURPOSE AND THAT IS EXACTLY WHY THEY NEED WATCHING. One says where a translation's files are, which changes when a publisher repackages a download; the other says when its wording was settled, which cannot change at all. Holding them in one place would have every repackaging edit a historical fact, and holding them apart lets a bible be added to the shelf with nobody writing its year, or a year be left behind after the bible it belonged to was taken off.");
  ("Both directions fail here, because they fail differently and only one of them fails on its own. A shelved bible with no year already stops the joined answer the moment anybody asks for it, so this gate only moves that failure earlier; a year left behind for a bible nobody has stops nothing ever, reads as a fact about the shelf, and would sit there unnoticed for as long as it took somebody to count.");
  ("How many bibles were held against their years travels out with the verdict, and it is named rather than handed over bare. A gate that passes says the same word whether it found nothing wrong or reached nothing at all, and the count is the only part of the answer that falls in the second case - which is no use to a reader who cannot tell what the number is of.");
  let rows = bible_usfm_versions_years_sorted();
  let versions = bible_usfm_versions();
  let years = bible_usfm_versions_years();
  let dated_words = object_property_names(years);
  function shelved_not(word) {
    let gone = property_null_is(versions, word);
    return gone;
  }
  let stranded = list_filter(dated_words, shelved_not);
  let none = list_empty_is(stranded);
  assert_json(none, {
    stranded,
    hint: "a year is written down for a bible the shelf no longer carries; take the year out, or put the bible back",
  });
  let walked = list_size(rows);
  let r = {
    walked,
  };
  return r;
}

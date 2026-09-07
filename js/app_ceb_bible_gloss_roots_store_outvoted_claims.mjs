import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_store_outvoted_chapters } from "./app_ceb_bible_gloss_roots_store_outvoted_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { add } from "./add.mjs";
export async function app_ceb_bible_gloss_roots_store_outvoted_claims() {
  "The chapter-by-chapter list of Cebuano gloss roots the dictionary contradicts, collapsed to the distinct claims behind it, biggest first, each carrying the chapters that make it.";
  "★ SIX HUNDRED AND EIGHTY-TWO ROWS IS A FINDING NOBODY CAN ANSWER AND SEVENTY-TWO CLAIMS IS A DECISION SOMEBODY CAN MAKE IN AN EVENING. The rows underneath are one per chapter, so a single wrong idea about one word is spread across every chapter that repeated it - halangdon taken back to halang appears fifteen times and is one thing to agree or disagree with, not fifteen. Collapsing them is not a summary that loses detail, because the chapters are carried along and the rows can still be walked; it is the same finding addressed to a reader rather than to a counter.";
  "The reading time of the person who has to say yes is the scarce thing here, and every measurement made so far has been spent describing a decision instead of making it cheap. A list ordered by how many chapters repeat a claim puts the ones worth arguing about at the top, and a claim made once sits at the bottom where a reader may stop.";
  "Measured: 682 entries collapse to 305 claims - 140 deeper, 78 apart, 44 kin, 43 shallower. Set the accents and the hidden containments aside and 71 apart claims remain, covering 164 of the entries, and that is the pile somebody can actually read. The largest are halangdon taken to halang against a dictionary saying hangad, fourteen times; kaloy-i to kaloy against luoy, eleven; gamhanan to gama against gahom, seven.";
  "Reading them shows the disagreement does not run one way, and the name this was built under says otherwise. The dictionary gives pangit as the root of pagpangita where the store says kita, and finding is what pangita means; it gives gamhanan under gamhanang where the store said gahum, which is a form further forward rather than a root. So a row here is two sources disagreeing with a sibling chapter siding with one of them, and which one is wrong is still a reading.";
  "Nothing is written and nothing is corrected. What comes back is the same evidence, grouped.";
  arguments_assert(arguments, 0);
  let measured = await app_ceb_bible_gloss_roots_store_outvoted_chapters();
  let rows = property_get(measured, "rows");
  let claims = {};
  function row_read(row) {
    let word = property_get(row, "word");
    let said = property_get(row, "said");
    let given = property_get(row, "dictionary");
    let key = list_join([word, said, given], " ");
    let held = property_get_or_null(claims, key);
    let fresh = null_is(held);
    if (fresh) {
      let made = {
        word: word,
        said: said,
        dictionary: given,
        relation: property_get(row, "relation"),
        chapters: [],
      };
      property_set(claims, key, made);
      held = made;
    }
    let chapters = property_get(held, "chapters");
    let chapter = property_get(row, "chapter");
    list_add_if_not_includes(chapters, chapter);
  }
  each(rows, row_read);
  let keys = object_property_names(claims);
  let listed = [];
  function key_read(key) {
    let claim = property_get(claims, key);
    let chapters = property_get(claim, "chapters");
    let value = list_size(chapters);
    property_set(claim, "count", value);
    list_add(listed, claim);
  }
  each(keys, key_read);
  function count_of(claim) {
    let count = property_get(claim, "count");
    return count;
  }
  list_sort_number_mapper_reverse(listed, count_of);
  let by_relation = {};
  function relation_count(claim) {
    let relation = property_get(claim, "relation");
    let held = property_get_or_null(by_relation, relation);
    let none = null_is(held);
    let before = none ? 0 : held;
    let value2 = add(before, 1);
    property_set(by_relation, relation, value2);
  }
  each(listed, relation_count);
  let r = {
    entries: list_size(rows),
    claims: list_size(listed),
    by_relation: by_relation,
    listed: listed,
  };
  return r;
}

import { app_ceb_bible_gloss_roots_store_outvoted_claims_relation_count } from "./app_ceb_bible_gloss_roots_store_outvoted_claims_relation_count.mjs";
import { app_ceb_bible_gloss_roots_store_outvoted_claims_key_read } from "./app_ceb_bible_gloss_roots_store_outvoted_claims_key_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_store_outvoted_chapters } from "./app_ceb_bible_gloss_roots_store_outvoted_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_store_outvoted_claims() {
  "The chapter-by-chapter list of Cebuano gloss roots the dictionary contradicts, collapsed to the distinct claims behind it, biggest first, each carrying the chapters that make it.";
  "★ SIX HUNDRED AND EIGHTY-TWO ROWS IS A FINDING NOBODY CAN ANSWER AND SEVENTY-TWO CLAIMS IS A DECISION SOMEBODY CAN MAKE IN AN EVENING. The rows underneath are one per chapter, so a single wrong idea about one word is spread across every chapter that repeated it - halangdon taken back to halang appears fifteen times and is one thing to agree or disagree with, not fifteen. Collapsing them is not a summary that loses detail, because the chapters are carried along and the rows can still be walked; it is the same finding addressed to a reader rather than to a counter.";
  "The reading time of the person who has to say yes is the scarce thing here, and every measurement made so far has been spent describing a decision instead of making it cheap. A list ordered by how many chapters repeat a claim puts the ones worth arguing about at the top, and a claim made once sits at the bottom where a reader may stop.";
  "Measured: 682 entries collapse to 305 claims - 140 deeper, 78 apart, 44 kin, 43 shallower. Set the accents and the hidden containments aside and 71 apart claims remain, covering 164 of the entries, and that is the pile somebody can actually read. The largest are halangdon taken to halang against a dictionary saying hangad, fourteen times; kaloy-i to kaloy against luoy, eleven; gamhanan to gama against gahom, seven.";
  "Reading them shows the disagreement does not run one way, and the name this was first built under said otherwise - it called the chapters wrong, and was renamed to outvoted once the rows were read. The dictionary gives pangit as the root of pagpangita where the store says kita, and finding is what pangita means; it gives gamhanan under gamhanang where the store said gahum, which is a form further forward rather than a root. So a row here is two sources disagreeing with a sibling chapter siding with one of them, and which one is wrong is still a reading.";
  "Nothing is written and nothing is corrected. What comes back is the same evidence, grouped.";
  arguments_assert(arguments, 0);
  let measured = await app_ceb_bible_gloss_roots_store_outvoted_chapters();
  let rows = property_get(measured, "rows");
  let r2 = app_ceb_bible_gloss_roots_store_outvoted_claims_key_read(rows);
  let key_read = property_get(r2, "key_read");
  let listed = property_get(r2, "listed");
  let keys = property_get(r2, "keys");
  let r3 = app_ceb_bible_gloss_roots_store_outvoted_claims_relation_count(
    keys,
    key_read,
    listed,
  );
  let relation_count = property_get(r3, "relation_count");
  let by_relation = property_get(r3, "by_relation");
  each(listed, relation_count);
  let r = {
    entries: list_size(rows),
    claims: list_size(listed),
    by_relation: by_relation,
    listed: listed,
  };
  return r;
}

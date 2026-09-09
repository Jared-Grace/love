import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_store_outvoted_chapters } from "./app_ceb_bible_gloss_roots_store_outvoted_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { app_ceb_bible_gloss_roots_store_outvoted_claims_key_read } from "./app_ceb_bible_gloss_roots_store_outvoted_claims_key_read.mjs";
import { app_ceb_bible_gloss_roots_store_outvoted_claims_relation_count } from "./app_ceb_bible_gloss_roots_store_outvoted_claims_relation_count.mjs";
export async function app_ceb_bible_gloss_roots_store_outvoted_claims_by_relation() {
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
  return {
    rows,
    listed,
    relation_count,
    by_relation,
  };
}

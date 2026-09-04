import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { json_value_texts_mapped } from "./json_value_texts_mapped.mjs";
import { urdu_glued_words_split } from "./urdu_glued_words_split.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
import { property_not } from "./property_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_en_learn_bible_gloss_urdu_glued_words_repair() {
  "Put the missing spaces back into the store of English words explained in Urdu: every chapter of it, every piece of Urdu in every chapter, spelled the way somebody reading Urdu ruled it should be spelled.";
  "The store is Urdu by construction and is named here rather than matched by shape, which is what bounds the repair. Word rulings made for one publisher's bible have no business reaching writing they were not made about, and the only thing that keeps them from it is a caller that knows what it is holding.";
  "Two different kinds of Urdu inside a chapter carry the fault and both are put right by the same reading. The verse itself is a copy of the bible's own Urdu, taken before the missing spaces were ever put back, so a reader on that verse still sees the welded spelling. The explanations are written by hand, but a gloss quotes the verse's word, so a word welded in the verse was copied welded into the gloss beside it - measured on the first of September, 187 of the one and 99 of the other.";
  "It reaches every piece of text in a chapter rather than the ones named here, and that is deliberate. The English of the verse and the Greek beside it are handed to the same reading and come back untouched, because every word the reading knows is written in the Urdu script and nothing in another script can match one. Naming the fields instead would have to be kept in step with the shape of the store, and a field left off the list looks exactly like a field with nothing wrong in it.";
  "A chapter whose text does not change is not written back. That leaves the file dates telling the truth about which chapters this touched, and it is what lets the answer say how many were actually spelled wrong rather than how many were looked at.";
  "It asks again after writing. Running the reading over what was just written must change nothing further, and a chapter where it would is reported by name rather than passed over, because that is the one outcome that means the repair does not settle.";
  "Which chapters the store holds is asked of the reading that every other sweep over a gloss store asks, rather than opened here. Reading a folder and turning its file names into chapter names is not this function's work and was written out twice, once here and once in the repair standing beside it - which is exactly the shared run a gate names.";
  let fn = app_en_learn_bible_gloss_urdu_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_repair(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let before = json_format_to(chapter);
    let repaired = json_value_texts_mapped(chapter, urdu_glued_words_split);
    let after = json_format_to(repaired);
    let same = equal(before, after);
    if (same) {
      let clean = null;
      return clean;
    }
    await file_overwrite_uncached(path, after);
    let again = json_value_texts_mapped(repaired, urdu_glued_words_split);
    let right = json_format_to(again);
    let settled = equal(after, right);
    let r = {
      chapter_code,
      settled,
    };
    return r;
  }
  let changed = await list_map_async_filter_null_not_is(
    chapter_codes,
    chapter_repair,
  );
  function unsettled_is(chapter) {
    let u = property_not(chapter, "settled");
    return u;
  }
  let unsettled = list_filter(changed, unsettled_is);
  let r2 = {
    chapters: list_size(chapter_codes),
    repaired: list_size(changed),
    unsettled,
  };
  return r2;
}

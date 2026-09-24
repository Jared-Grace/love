import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { chapter_passages_verse_order_sort } from "./chapter_passages_verse_order_sort.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function chapter_passage_write(chapter_code, fn, passage) {
  "Save one passage into a chapter's store, replacing whatever passage covered the same verses and leaving every other passage of the chapter exactly as it was.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A passage is recognised by the verse numbers it covers, so writing one that is already there corrects it rather than doubling it, and a chapter can be authored over as many sittings as it takes.";
  "A chapter nobody has written to yet is started here rather than refused, so the first passage of a chapter is written exactly like the fortieth.";
  "It is the store that decides which store, and the store is a function - so which one is asked for rather than settled here. A sermon chapter and a gloss chapter are the same shape and different material, and this holds only the shape.";
  "THE CHAPTER IS PUT BACK INTO VERSE ORDER BEFORE IT IS SAVED, BECAUSE A WRITTEN PASSAGE GOES LAST AND UNTIL 2026-09-24 IT STAYED THERE. A chapter is written a passage at a time and each one landed on the end, so what the file held was the order the chapter happened to be authored in; a passage covering several verses is slower to write than a single one, so it arrived after verses that come later in the Bible. A hundred and eighty-one of the two hundred and sixty chapters of the Urdu gloss store were out of order the day this was measured, and the reader of that store is shown the file.";
  let path = local_function_path_json(chapter_code, fn);
  let exists = await file_exists(path);
  let chapter = exists
    ? await file_read_json(path)
    : {
        chapter_code,
        passages: [],
      };
  let passages = property_get(chapter, "passages");
  let key = g_sermon_passage_verses_key(passage);
  function passage_other(other) {
    let left = g_sermon_passage_verses_key(other);
    let neq = not_equal(left, key);
    return neq;
  }
  let others = list_filter(passages, passage_other);
  list_add(others, passage);
  let ordered = chapter_passages_verse_order_sort(others);
  let contents = json_format_to({
    chapter_code,
    passages: ordered,
  });
  await file_overwrite_uncached(path, contents);
  return path;
}

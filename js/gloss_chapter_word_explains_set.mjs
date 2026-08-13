import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { gloss_passage_word_explains_set } from "./gloss_passage_word_explains_set.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapter_word_explains_set(
  chapter_code,
  fn,
  explains,
  lambda$explain,
) {
  "Give every explanation in one authored gloss chapter that is about a named word, and that the caller is willing to write over, the wording written for that word - answering with the words it rewrote.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are. A chapter holding none of the words is left on disk exactly as it was found, rather than being written back out unchanged - a store this size is read by other people at the same time, and a file whose bytes did not need to move should not move.";
  function passage_set(passage) {
    let changed = gloss_passage_word_explains_set(
      passage,
      explains,
      lambda$explain,
    );
    return changed;
  }
  let read = await gloss_chapter_passages_collect_generic(
    chapter_code,
    fn,
    passage_set,
  );
  let changes = property_get(read, "collected");
  let none_changed = list_empty_is(changes);
  if (none_changed) {
    return changes;
  }
  let object = property_get(read, "chapter");
  let contents = json_format_to(object);
  let file_path = property_get(read, "path");
  await file_overwrite_uncached(file_path, contents);
  return changes;
}

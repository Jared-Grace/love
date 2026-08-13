import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
export async function gloss_chapter_entries_collect_generic(
  chapter_code,
  fn,
  lambda_found,
) {
  "Everything one authored gloss chapter's explanations yield, gathered passage by passage into a single flat list - the caller says what to look for in a passage's explanations.";
  "$plain chapter_code";
  "the code is a chapter's name, like JAS02, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "A chapter nobody has authored yet answers with nothing, so a sweep crosses the gaps without being told where they are.";
  "Three sweeps over a gloss store were the same eleven lines apart from the one call in the middle - open the chapter, give up quietly if it is not there, walk its passages, gather what each one's explanations gave back. The part that differed was one call and the part that agreed was everything else, which is what this is for.";
  "The caller is handed the explanations rather than the passage, because none of the three wanted the passage for anything else, and asking for the smaller thing is what lets a reader of the caller see at once that it cannot reach past its own explanations.";
  function passage_read(passage) {
    let entries = gloss_passage_entries(passage);
    let found = lambda_found(entries);
    return found;
  }
  let read = await gloss_chapter_passages_collect_generic(
    chapter_code,
    fn,
    passage_read,
  );
  let collected = property_get(read, "collected");
  return collected;
}

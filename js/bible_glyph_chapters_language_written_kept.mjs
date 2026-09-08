import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists } from "./function_exists.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
export async function bible_glyph_chapters_language_written_kept(written_name) {
  "$plain written_name";
  "the name of the written translation function. It names a file this reads and nothing that runs on its behalf.";
  arguments_assert(arguments, 1);
  ("What one language file already holds, keyed by chapter code, so a chapter that cannot be reached this run can keep the text it was given last run instead of being dropped.");
  ("IT ANSWERS WITH NOTHING RATHER THAN REFUSING WHEN THE FILE IS NOT THERE YET, because the first run of a new language has nothing to keep and that is the ordinary state rather than a fault.");
  ("THE POINT IS THAT A BLIP MUST NOT DELETE SCRIPTURE. The file is rewritten whole every run from whatever storage answered, so one unreachable fetch takes a chapter of somebody's translation off the page and nothing goes red. Measured on the eighth of September, Exodus one had been in the Tagalog file for twenty eight runs and was gone from the twenty ninth while storage still held all twenty two of its verses.");
  let found = await function_exists(written_name);
  let exists = property_get(found, "exists");
  let kept = {};
  if (not(exists)) {
    return kept;
  }
  let written_module = await import("./" + written_name + ".mjs");
  let written_fn = property_get(written_module, written_name);
  let chapters = written_fn();
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    property_set(kept, chapter_code, chapter);
  }
  return kept;
}

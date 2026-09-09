import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function gloss_chapter_passages_collected_write(read) {
  arguments_assert(arguments, 1);
  ("Put one authored gloss chapter back on disk after a walk over its passages has changed something inside it.");
  ("What is handed in is the whole answer that ",
    fn_name("gloss_chapter_passages_collect_generic"),
    " gives back, and it is handed in whole rather than as the chapter and the path apart, because those two belong to each other. A chapter written to the path a different chapter was read from is two chapters lost, and taking them as one word is what makes that unwritable.");
  ("The three sweeps that change entries as they walk them each spelled these lines out for themselves, which is three places the way a chapter is stored could have drifted apart, and one of them is the place a fix would have been missing from.");
  ("Nothing here decides whether the writing is worth doing. A sweep that changed nothing must not call this at all, because a file whose bytes did not need to move should not move while other people are reading the store - and only the sweep that made the changes knows what counts as one.");
  let object = property_get(read, "chapter");
  let contents = json_format_to(object);
  let file_path = property_get(read, "path");
  await file_overwrite_uncached(file_path, contents);
}

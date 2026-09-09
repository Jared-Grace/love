import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
export async function gloss_chapter_entries(chapter_code, fn) {
  arguments_assert(arguments, 2);
  ("Every explanation one authored gloss chapter holds, gathered passage by passage into a single flat list.");
  ("$plain chapter_code");
  ("the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.");
  ("The gathering already exists, but it is written to let the caller say what to look for in each passage, and five readings wanted nothing looked for - they wanted the explanations themselves, whole, to judge the chapter as one piece. Each wrote the same do-nothing pass to say so, and a do-nothing pass written five times is a name that was never given.");
  ("A chapter nobody has authored yet answers with an empty list rather than complaining, the same way the gathering underneath does, so a sweep crosses the gaps without being told where they are.");
  function entries_kept(found) {
    return found;
  }
  let entries = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    entries_kept,
  );
  return entries;
}

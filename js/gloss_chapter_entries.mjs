import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
export async function gloss_chapter_entries(chapter_code, fn) {
  arguments_assert(arguments, 2);
  ("Every explanation one authored gloss chapter holds, gathered passage by passage into a single flat list.");
  ("$plain chapter_code");
  ("the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.");
  ("The gathering underneath is written to let the caller say what to look for in each passage, and five readings wanted nothing looked for - they wanted the explanations themselves, whole, because what they judge is the chapter as one piece rather than any passage of it. Each wrote out the same do-nothing pass to say so, and a do-nothing pass written five times is a name that was never given.");
  ("The pass calls what it is handed by the name the answer is about to take, and so hides that name for the one line it lives. That is not a slip and it cannot be tidied away: the search that finds the five copies compares the writing once the private names are taken out, so a copy only reads as a copy when it spells its own names the way they spell theirs. Given a different name here, this function is the same work and matches nothing.");
  ("A chapter nobody has authored yet answers with nothing rather than complaining, the same way the gathering underneath does, so a sweep crosses the gaps without being told where they are.");
  function entries_pass(entries) {
    return entries;
  }
  let entries = await gloss_chapter_entries_collect_generic(
    chapter_code,
    fn,
    entries_pass,
  );
  return entries;
}

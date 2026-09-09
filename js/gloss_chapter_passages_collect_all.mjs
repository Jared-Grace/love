import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_chapter_passages_collect_generic } from "./gloss_chapter_passages_collect_generic.mjs";
export async function gloss_chapter_passages_collect_all(chapter_code, fn) {
  arguments_assert(arguments, 2);
  ("Every passage of one authored gloss chapter, kept whole, with the chapter itself and the path it was read from standing beside them.");
  ("$plain chapter_code");
  ("the code is a chapter's name, like ROM15, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.");
  ("The gathering underneath asks a question of each passage and keeps whatever the passage says back. Asked to say back the passage itself it keeps every one of them, and that is what a sweep working entry by entry needs: it does its own choosing further in, over the entries, and there is nothing for the passage-level question to decide. Four such sweeps each wrote that do-nothing question out for themselves as a little function of their own, which is four chances to write one that does something.");
  ("The chapter and its path come out with the passages rather than being dropped here, because a sweep that changes an entry has to put the chapter back on disk afterwards and cannot do that from the passages alone. ",
    fn_name("gloss_chapter_passages_collected_write"),
    " is what takes this answer back the other way, and the two are meant to be read as a pair.");
  function passage_pass(passage) {
    let one = [passage];
    return one;
  }
  let read = await gloss_chapter_passages_collect_generic(
    chapter_code,
    fn,
    passage_pass,
  );
  return read;
}

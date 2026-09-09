import { gloss_store_word_wordings } from "./gloss_store_word_wordings.mjs";
import { gloss_pointers_dangling_repair_wordings } from "./gloss_pointers_dangling_repair_wordings.mjs";
export async function gloss_pointers_dangling_repair(fn, lambda$pointer_is) {
  "Give a real explanation to every word in one whole gloss store whose first explanation in a chapter only points the reader back at a word met earlier, when nothing earlier in that chapter said anything about it, using the store's own settled wordings - answering with the chapters it repaired and how many words moved in each.";
  "The wordings are gathered from the whole store before anything is written, so that a repair cannot vote for itself. A pointer that has just been replaced would otherwise be counted as a real explanation of that word by a later chapter, and one wrong guess would spread across the store in one pass.";
  "The command finds its own set rather than being handed one. Which words dangle is a fact about the store as it stands now, and a list typed by a caller is a fact about the store as it stood when the list was made.";
  "What it cannot repair is what the store has never explained anywhere at all, and no reading of the store will ever produce those - they have to be written. That is the other half, and it takes its table from a caller.";
  let wordings = await gloss_store_word_wordings(fn, lambda$pointer_is);
  let repaired = await gloss_pointers_dangling_repair_wordings(
    fn,
    lambda$pointer_is,
    wordings,
  );
  return repaired;
}

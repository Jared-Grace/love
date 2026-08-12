import { ebible_verse_languages_end_is } from "./ebible_verse_languages_end_is.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_last } from "./list_last.mjs";
import { list_next_try } from "./list_next_try.mjs";
import { greater_than } from "./greater_than.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
export async function ebible_index_flat_passage_run(
  list,
  run,
  bible_folders,
  reach,
) {
  "The run of verses a page was asked for, carried on until it stops on a finished sentence rather than wherever the counting happened to land.";
  "A verse is where a bible was divided up, not where a sentence was, so a run of them cut to a length ends mid-thought about half the time - and somebody copying it out gets half a sentence with no sign that the rest exists. Carrying on to the end of the sentence is what turns a count of verses into something a person can read on its own.";
  "It grows off the same flat list of the whole bible the run was cut from, so a sentence that runs over the end of a chapter is followed into the next one, and the end of the bible simply stops it.";
  "A bound stands on how far it may carry on. Nothing in the text promises a sentence ever ends - a bible could be missing the verse that finishes it, and one language here writes no ending at all - and a page that kept reaching would show the rest of the book rather than say so. Stopping at the bound gives back a run ending mid-sentence, which is what the page did before any of this, so the worst case is the old behaviour rather than a page that never arrives.";
  let extended = list_copy(run);
  let reached = 0;
  while (greater_than(reach, reached)) {
    let last = list_last(extended);
    let ended = await ebible_verse_languages_end_is(last, bible_folders);
    if (ended) {
      break;
    }
    let next = list_next_try(list, last);
    if (null_is(next)) {
      break;
    }
    list_add(extended, next);
    reached = add(reached, 1);
  }
  return extended;
}

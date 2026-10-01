import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_get } from "./list_get.mjs";
import { ebible_verse_languages_end_is } from "./ebible_verse_languages_end_is.mjs";
import { list_take } from "./list_take.mjs";
import { ebible_index_flat_passage_run } from "./ebible_index_flat_passage_run.mjs";
export async function ebible_index_flat_passage_run_most(
  list,
  run,
  bible_folders,
  reach,
) {
  "The run of verses a page was asked for, cut back to the last finished sentence inside it - so the count asked for is the most a reader is sent, not the least.";
  "Somebody who chose four verses chose a size for a message. Carrying a sentence on to five sends more than they asked; stopping at three, where a sentence ends, sends a whole thought and stays under it. So the longest run up to the count that ends a sentence is the answer.";
  "Only when no sentence ends anywhere inside the count is the run carried past it - one sentence longer than the count is still sent whole, and as briefly as it can be, by carrying on to where it first ends.";
  let index = list_size(run);
  while (greater_than(index, 0)) {
    let last_index = subtract(index, 1);
    let last = list_get(run, last_index);
    let ended = await ebible_verse_languages_end_is(last, bible_folders);
    if (ended) {
      let taken = list_take(run, index);
      return taken;
    }
    index = last_index;
  }
  let extended = await ebible_index_flat_passage_run(
    list,
    run,
    bible_folders,
    reach,
  );
  return extended;
}

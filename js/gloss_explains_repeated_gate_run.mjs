import { gloss_explains_repeated_measure } from "./gloss_explains_repeated_measure.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explains_repeated_baseline_path } from "./gloss_explains_repeated_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { gloss_store_shares_versus_baseline } from "./gloss_store_shares_versus_baseline.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_explains_repeated_gate_run() {
  "Gate: no gloss store hands one word's explanation to a larger share of its other words than it already did. Throws so the dispatcher seam exits nonzero.";
  "The page paints the explanations one under another and the reader goes down them in order, so a sentence written once and handed to eight words is seven words the reader is told nothing new about. It reads as an explanation because it is prose in the right place, which is exactly why nobody notices it is not one - and the pass that writes these glosses produces this shape whenever it is left to itself, because the commonest words are the ones it has least to say about.";
  "A share rather than a count, because these stores are still being written. A count would rise the moment a new chapter was authored however well it was written, so a gate on the count would go red at every chapter and would be asking for the store to stop growing rather than for the writing to get better.";
  "Measured against the record rather than against zero, because the words still owed their own explanation are being written one chapter at a time and a gate demanding they all be finished today would just be red every day. The record only moves down: a store carrying a larger share than it did fails, and a store carrying a smaller one fails too, which is what makes somebody write the smaller number down and keep it.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. These stores live on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  "Which chapters and which wordings is a separate question with its own reader, because the share is what the gate has to decide on and the wordings are what somebody sitting down to mend them needs. A gate that printed every repeated sentence in every store would bury its own verdict.";
  let measured = await gloss_explains_repeated_measure();
  let counts = property_get(measured, "counts");
  let missing = property_get(measured, "missing");
  let path = gloss_explains_repeated_baseline_path();
  let recorded = await baseline_known_read(path);
  let change = gloss_store_shares_versus_baseline(counts, recorded);
  let added = property_get(change, "added");
  list_empty_is_assert_json(added, {
    hint: "these gloss stores now hand one word's explanation to a larger share of their other words than they did - write the second word its own explanation rather than handing it the first word's",
    added,
  });
  let stale = property_get(change, "stale");
  let f_name = fn_name("gloss_explains_repeated_baseline_write");
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "these gloss stores hand one word's explanation to a smaller share of their other words than the record holds, which is good news the record has not been told - run ",
      f_name,
      " to keep the ground that was gained",
    ]),
    stale,
  });
  let r = {
    stores: list_size(counts),
    counts,
    skipped: missing,
  };
  return r;
}

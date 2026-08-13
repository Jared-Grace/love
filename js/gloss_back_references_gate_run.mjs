import { baseline_known_read } from "./baseline_known_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_back_references_baseline_path } from "./gloss_back_references_baseline_path.mjs";
import { gloss_back_references_counts_versus_baseline } from "./gloss_back_references_counts_versus_baseline.mjs";
import { gloss_back_references_measure } from "./gloss_back_references_measure.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function gloss_back_references_gate_run() {
  "Gate: no gloss store explains a word by pointing the reader further up in more places than it already did. Throws so the dispatcher seam exits nonzero.";
  "An explanation reading ‘Same as above’ is not a short explanation, it is an absent one - the reader is sent to look for something that was never written down anywhere. Thousands of them were taken out of the Cebuano store by hand, and the pass that writes these glosses would put them straight back if it were run again over a chapter, since that is the shape it produces when left to itself.";
  "Measured against the record rather than against zero, because the words still owed an explanation are being written one at a time and a gate demanding they all be finished today would just be red every day. The record only moves down: a store carrying more than it did fails, and a store carrying fewer fails too, which is what makes somebody write the smaller number down and keep it.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. These stores live on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  let measured = await gloss_back_references_measure();
  let counts = property_get(measured, "counts");
  let missing = property_get(measured, "missing");
  let path = gloss_back_references_baseline_path();
  let recorded = await baseline_known_read(path);
  let change = gloss_back_references_counts_versus_baseline(counts, recorded);
  let added = property_get(change, "added");
  list_empty_is_assert_json(added, {
    hint: "these gloss stores now point the reader further up in more places than they did - the explanations naming ‘above’ say nothing on their own, so write out what each word is instead",
    added,
  });
  let stale = property_get(change, "stale");
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "these gloss stores point the reader further up in fewer places than the record holds, which is good news the record has not been told - run ",
      fn_name("gloss_back_references_baseline_write"),
      " to keep the ground that was gained",
    ]),
    stale,
  });
  function sites_get(count) {
    let sites = property_get(count, "sites");
    return sites;
  }
  let r = {
    stores: list_size(counts),
    sites: list_map_sum(counts, sites_get),
    skipped: missing,
  };
  return r;
}

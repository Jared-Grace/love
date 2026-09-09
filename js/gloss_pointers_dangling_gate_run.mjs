import { gloss_pointers_dangling_measure } from "./gloss_pointers_dangling_measure.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_pointers_dangling_baseline_path } from "./gloss_pointers_dangling_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { gloss_store_dangling_versus_baseline } from "./gloss_store_dangling_versus_baseline.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function gloss_pointers_dangling_gate_run() {
  "Gate: no gloss store sends the reader back to a word met earlier in the chapter and leaves nothing there for them to find, more often than it already did. Throws so the dispatcher seam exits nonzero.";
  "An explanation saying this is the same preposition met above is good writing when the word really was explained above - it is shorter than saying it again and it teaches the reader that the two are one word. It is an absent explanation when nothing above ever said anything: the reader is sent to look for a sentence that was never written, and the entry has quietly taught nothing.";
  "Which of the two a sentence is cannot be read off its wording, and that is why this gate exists beside the one that looks for turns of phrase rather than instead of it. Measured over the Urdu store, the phrase for ‘which came above’ opens eleven hundred explanations that go on to say fully what the word means, and a reader judging by phrase would call every one of them a refusal to explain. Whether the thing pointed at was ever written is not a matter of phrasing and can be settled.";
  "The chapter is the window, because the chapter is what a reader goes down in one sitting. A word explained in Matthew and pointed back at in Mark was never met by the reader of Mark.";
  "Measured against the record rather than against zero, because these are being written out one at a time and a gate demanding they all be finished today would be red every day. The record only moves down: a store pointing at nothing more often than it did fails, and a store doing it less often fails too, which is what makes somebody write the smaller number down and keep it.";
  "A store that is not on the disk is passed over and said so, rather than counted as clean. These stores live on a drive that is not always mounted, and every Claude in the repo runs this gate - a sweep that read nothing and called it nought would turn one unmounted drive into a record wiped for everybody.";
  let measured = await gloss_pointers_dangling_measure();
  let counts = property_get(measured, "counts");
  let missing = property_get(measured, "missing");
  let path = gloss_pointers_dangling_baseline_path();
  let recorded = await baseline_known_read(path);
  let change = gloss_store_dangling_versus_baseline(counts, recorded);
  let added = property_get(change, "added");
  list_empty_is_assert_json(added, {
    hint: "these gloss stores send the reader back to a word met earlier and leave nothing there more often than they did - write out what the word is, rather than pointing at an explanation nobody wrote",
    added,
  });
  let stale = property_get(change, "stale");
  let f_name = fn_name("gloss_pointers_dangling_baseline_write");
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "these gloss stores point at nothing less often than the record holds, which is good news the record has not been told - run ",
      f_name,
      " to keep the ground that was gained",
    ]),
    stale,
  });
  function dangling_get(count) {
    let dangling = property_get(count, "dangling");
    return dangling;
  }
  let r = {
    stores: list_size(counts),
    dangling: list_map_sum(counts, dangling_get),
    skipped: missing,
  };
  return r;
}

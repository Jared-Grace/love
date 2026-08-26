import { firebase_function_chapters_uploaded } from "./firebase_function_chapters_uploaded.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapters_write_coverage_generic } from "./gloss_chapters_write_coverage_generic.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapters_finished_unpublished(
  fn,
  passages_read,
  namespace_read,
) {
  "Every chapter of one gloss store that has been explained all the way through and is still not published, with how many chapters the store holds.";
  "Writing a chapter and publishing it are separate steps on purpose, and this is the gap that opens between them. A finished chapter that was never carried up sits on the one machine it was written on, and nothing anywhere goes wrong: the app offers exactly the chapters it can see, every reader who arrives is shown something correct, and the work simply never reaches anybody. That is the one fault a reader cannot report, because from where they stand there is nothing to report.";
  "Only a chapter with nothing left to write is counted. A part-written chapter held back is somebody still working on it, which is the ordinary state of this material for weeks at a time, so counting those would put a light on that is red by design and says nothing when it goes out.";
  "What has been published is asked of the bucket rather than of a list kept here. The chapter is written on one machine and read by a page somewhere else, so the only place that knows whether it arrived is the place the page fetches it from.";
  "The verdict comes back in the shape every gate over one of these stores ends in - what was walked, and what was wrong with it - so the sentence naming the fault is written once by whoever asks rather than here.";
  arguments_assert(arguments, 3);
  let chapter_codes = await gloss_chapters_stored(fn);
  let coverage = await gloss_chapters_write_coverage_generic(fn, passages_read);
  let waiting = property_get(coverage, "waiting");
  ("The chapters still wanting work are read from the coverage report rather than worked out again here, so that what finished means is settled in exactly one place and cannot drift between the report an author reads and the gate that stops a chapter being forgotten.");
  let waiting_codes = list_map_property(waiting, "chapter_code");
  let finished = list_without_multiple(chapter_codes, waiting_codes);
  ("What a store was uploaded under is asked for rather than worked out from the writing function's name, because that word is frozen: the files up there were filed under the word as it stood on the day they went, and a name that followed a later rename would look in a folder nothing was ever written to.");
  let f_name = namespace_read();
  let published = await firebase_function_chapters_uploaded(f_name);
  let offenders = list_without_multiple(finished, published);
  let r = {
    chapters: list_size(chapter_codes),
    offenders,
  };
  return r;
}

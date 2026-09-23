import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapters_write_coverage_generic } from "./gloss_chapters_write_coverage_generic.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { firebase_function_chapters_uploaded } from "./firebase_function_chapters_uploaded.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_published_unfinished(
  fn,
  passages_read,
  namespace_read,
) {
  "Every chapter of one gloss store that has been carried up to the reader while passages in it are still unexplained, with how many chapters the store holds.";
  "This is the mirror of the finished-and-unpublished walk beside it, and it is the half nobody was walking. That one asks which finished chapters never went up; this one asks which chapters went up before they were finished. Together they are the two ways writing and publishing can come apart, and only one of them puts a hole in front of a reader.";
  "★ A CHAPTER IS OFFERED AS A WHOLE, SO PUBLISHING IT EARLY IS NOT PUBLISHING PART OF IT. The app lists whatever the bucket holds and the reader opens the chapter at the top; nothing tells them the verses run out partway down. They meet a passage with no explanations under it, which from where they stand is the app being broken rather than the work being unfinished.";
  "It went undetected because each reading that could have seen it answers a different question. The absent-chapters reading asks which chapters have no file, and a half-written chapter has a file. The alignment and empty-meaning gates ask whether the explanations that exist line up and say something, and explanations nobody wrote cannot fail either test. The coverage report does see it, and is the only thing that does, but it is a report run by hand and the hole was found by running it for an unrelated reason.";
  "MEASURED: one chapter of two hundred and sixty sat published with seven of its fourteen passages unwritten, while every gate over this store was green and the absent-chapters reading said nothing was missing.";
  "Being unfinished is not on its own the fault, and a gate over incompleteness alone was rejected rather than overlooked: the walk this stands on says in its own words that completeness is a report and never a gate, because material is authored over weeks and such a light would be red for months by design. Publishing is what turns the same state into a fault, and publishing is a decision somebody makes in one command, so the red here is never the ordinary condition of a store being written. A chapter still being worked on stays out of the bucket and stays silent.";
  "What has been published is asked of the bucket rather than of a list kept here, for the reason the mirror walk gives: the chapter is written on one machine and read by a page somewhere else, so the only place that knows whether it arrived is the place the page fetches it from.";
  "The chapters still wanting work are read from the coverage report rather than worked out again here, so that what finished means is settled in exactly one place and cannot drift between the report an author reads and the gates that stand on it.";
  "The verdict comes back in the shape every gate over one of these stores ends in - what was walked, and what was wrong with it - so the sentence naming the fault is written once by whoever asks rather than here.";
  arguments_assert(arguments, 3);
  let chapter_codes = await gloss_chapters_stored(fn);
  let coverage = await gloss_chapters_write_coverage_generic(fn, passages_read);
  let waiting = property_get(coverage, "waiting");
  let waiting_codes = list_map_property(waiting, "chapter_code");
  let f_name = namespace_read();
  let published = await firebase_function_chapters_uploaded(f_name);
  let offenders = list_intersection(waiting_codes, published);
  let r = {
    chapters: list_size(chapter_codes),
    offenders,
  };
  return r;
}

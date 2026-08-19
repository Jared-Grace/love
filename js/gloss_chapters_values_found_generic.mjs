import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { property_set } from "./property_set.mjs";
export async function gloss_chapters_values_found_generic(
  fn,
  values,
  key,
  value_passages,
) {
  "$plain values";
  "$plain key";
  "How many chapters of a gloss have been authored, and which of them hold any of these unwanted values, with the passages holding each.";
  "Two sweeps over the same store were written out twice over: one looking for the name of a lexicon said out loud to a reader, one looking for a marker left where the short English under a word ought to be. What they differ by is the list of what they are looking for and how a passage is asked whether it holds one, and both of those arrive here as arguments.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is measured from the moment it is written and nobody has to remember to name it anywhere.";
  "How many chapters were walked travels out beside the offenders, because finding nothing and looking at nothing are the same word otherwise, and a store read out of a folder is exactly the sweep that can quietly start reading an empty one.";
  "The word each finding files its value under is handed in rather than settled here, because a sweep for a lexicon name and a sweep for a missing gloss are read by different people looking for different things, and the word they read is part of what those reports already promised.";
  arguments_assert(arguments, 4);
  async function chapter_read(chapter_code) {
    async function value_read(value) {
      let passages = await value_passages(chapter_code, fn, value);
      let asked = {};
      property_set(asked, key, value);
      property_set(asked, "passages", passages);
      return asked;
    }
    let answers = await list_map_async(values, value_read);
    function passages_is(asked) {
      let offending = property_list_empty_not_is(asked, "passages");
      return offending;
    }
    let found = list_filter(answers, passages_is);
    return found;
  }
  let offenders = await gloss_chapters_offenders_generic(fn, chapter_read);
  let chapter_codes = await gloss_chapters_stored(fn);
  let r = {
    chapters: list_size(chapter_codes),
    offenders,
  };
  return r;
}

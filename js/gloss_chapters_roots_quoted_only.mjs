import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { gloss_entries_roots_quoted_only } from "./gloss_entries_roots_quoted_only.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
export async function gloss_chapters_roots_quoted_only(fn) {
  "Every chapter of one gloss store holding an explanation that only appears to name its word's root because the root's letters arrive inside the quoted word, each named beside what was found in it.";
  "This is the companion of the disagreement sweep and reads the same store the same way. The difference is which side of the judgment it stands on: that one gathers the sentences the reading calls wrong, and this one gathers the sentences it calls right for a reason that cannot fail. A store can be draining the first list and getting no more trustworthy at all, and only this reading says so.";
  "How many words the dictionary was asked about is carried out with the findings, because a sweep over a store nobody has looked much up for finds little and looks like good news.";
  let known = await binisaya_words_known();
  let list = object_property_names(known);
  let consulted = list_size(list);
  function found_of(entries) {
    let found = gloss_entries_roots_quoted_only(entries, known);
    return found;
  }
  async function chapter_read(chapter_code) {
    let found = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      found_of,
    );
    return found;
  }
  let offenders = await gloss_chapters_offenders_generic(fn, chapter_read);
  let r = {
    consulted,
    offenders,
  };
  return r;
}

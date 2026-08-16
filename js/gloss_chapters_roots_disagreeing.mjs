import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapter_roots_disagreeing } from "./gloss_chapter_roots_disagreeing.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function gloss_chapters_roots_disagreeing(fn) {
  "Every chapter of one gloss store holding an explanation that says nothing about the root an outside dictionary takes its word back to.";
  "It reads only the words already looked up, so it answers on whatever has been gathered so far rather than waiting on a sweep to finish. That is the point: a sweep over thousands of words takes hours, and a reader should be able to see what it has found without stopping it.";
  "The count of words consulted comes back beside the findings, because a small number of findings means one thing when the whole vocabulary has been asked about and quite another when barely any of it has.";
  let known = await binisaya_words_known();
  let list = object_property_names(known);
  let consulted = list_size(list);
  async function chapter_read(chapter_code) {
    let disagreeing = await gloss_chapter_roots_disagreeing(
      chapter_code,
      fn,
      known,
    );
    return disagreeing;
  }
  let offenders = await gloss_chapters_offenders_generic(fn, chapter_read);
  let r = {
    consulted,
    offenders,
  };
  return r;
}

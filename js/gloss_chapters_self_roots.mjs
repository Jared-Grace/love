import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_chapters_offenders_generic } from "./gloss_chapters_offenders_generic.mjs";
import { gloss_entries_self_roots } from "./gloss_entries_self_roots.mjs";
export async function gloss_chapters_self_roots(fn) {
  "Every chapter of one gloss store holding an explanation that gives its own word as the root it is built from.";
  "This asks nothing of any dictionary, so it answers over the whole store at once rather than over the part of the vocabulary somebody has looked up so far. A word given as its own origin is wrong on the face of it, and that is the whole test.";
  async function chapter_read(chapter_code) {
    let found = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      gloss_entries_self_roots,
    );
    return found;
  }
  let r = await gloss_chapters_offenders_generic(fn, chapter_read);
  return r;
}

import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_pointers_verdicts_generic } from "./gloss_chapter_pointers_verdicts_generic.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_pointers_verdicts_generic(
  fn,
  lambda$pointer_is,
) {
  "How many pointing explanations a whole gloss store has, counted by what became of each one - addressed, or refused for a reason said in plain words.";
  "It reads every chapter the store holds and writes nothing back. The tally is what turns a bare count of what is left into an account of whether any of it can still be won without a person.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let verdicts = await gloss_chapter_pointers_verdicts_generic(
      chapter_code,
      fn,
      lambda$pointer_is,
    );
    return verdicts;
  }
  let nested = await list_map_async(chapter_codes, chapter_read);
  let verdicts = list_flat(nested);
  let counts = list_tally(verdicts);
  let r = {
    chapters: list_size(chapter_codes),
    pointers: list_size(verdicts),
    counts,
  };
  return r;
}

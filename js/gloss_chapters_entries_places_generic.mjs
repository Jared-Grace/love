import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_entries_places_generic } from "./gloss_chapter_entries_places_generic.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
export async function gloss_chapters_entries_places_generic(
  fn,
  lambda$entry_is,
) {
  "Every entry across one whole gloss store that answers to a given reading of an entry, given back with the verses it stands in and the explanation it is wearing.";
  "Each chapter is read on its own and the answers are joined into one list, because the place a wording has to be judged in is a verse, and a verse belongs to a chapter.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let places = await gloss_chapter_entries_places_generic(
      chapter_code,
      fn,
      lambda$entry_is,
    );
    return places;
  }
  let nested = await list_map_async(chapter_codes, chapter_read);
  let places = list_flat(nested);
  return places;
}

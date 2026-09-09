import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_pointers_dangling_places } from "./gloss_chapter_pointers_dangling_places.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
export async function gloss_pointers_dangling_places(fn, lambda$pointer_is) {
  "Every word anywhere in one gloss store whose first explanation in a chapter only points the reader back at a word met earlier when nothing earlier in that chapter said anything about it, given back with the verses it stands in.";
  "This is the list of wordings still owed after a repair has taken everything the store could answer out of its own settled wordings. What is left is what nobody has ever written a real explanation for, anywhere, so it has to be authored - and the verses are what it has to be authored from.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_places(chapter_code) {
    let places_found = await gloss_chapter_pointers_dangling_places(
      chapter_code,
      fn,
      lambda$pointer_is,
    );
    return places_found;
  }
  let per_chapter = await list_map_async(chapter_codes, chapter_places);
  let places = list_flat(per_chapter);
  return places;
}

import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_set } from "./property_set.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
export async function ebible_version_verse_numbers(bible_folder) {
  "$plain bible_folder";
  "Every verse number one bible carries, kept under the chapter it belongs to.";
  "Read by the very walk the search index is built from, and that has to stay true rather than merely sound true. It once asked the remembered list of chapters instead, which for two dozen of these bibles answers with nothing at all - and a bible whose numbering is read as nothing agrees with the reference nowhere, so it was thrown out of the index entire while the walk beside it was reading all eleven hundred of its chapters perfectly well.";
  let dictionary = {};
  async function lambda(chapter_code, verses) {
    let property_name = verse_number_key();
    let numbers = list_map_property(verses, property_name);
    property_set(dictionary, chapter_code, numbers);
  }
  await ebible_chapters_each_verses_check_with(bible_folder, lambda);
  return dictionary;
}

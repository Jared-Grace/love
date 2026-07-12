import { text_symbols_unique_multiple } from "./text_symbols_unique_multiple.mjs";
import { log } from "./log.mjs";
import { ebible_chapters_each_verses_check_with } from "./ebible_chapters_each_verses_check_with.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { text_symbols_unique_adder } from "./text_symbols_unique_adder.mjs";
export async function ebible_version_symbols_unique(bible_folder) {
  let unique = await text_symbols_unique_adder(lambda$la);
  async function lambda$la(la) {
    async function lambda(chapter_code, verses) {
      log(ebible_version_symbols_unique.name, {
        bible_folder,
        chapter_code,
      });
      let mapped = list_map_property(verses, "text");
      let unique_chapter = text_symbols_unique_multiple(mapped);
      la(unique_chapter);
    }
    await ebible_chapters_each_verses_check_with(bible_folder, lambda);
  }
  return unique;
}

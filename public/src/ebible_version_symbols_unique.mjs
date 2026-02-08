import { text_symbols_unique_multiple } from "../../../love/public/src/text_symbols_unique_multiple.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_chapters_each_verses_check_with } from "../../../love/public/src/ebible_chapters_each_verses_check_with.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { text_symbols_unique_adder } from "../../../love/public/src/text_symbols_unique_adder.mjs";
export async function ebible_version_symbols_unique(bible_folder) {
  let unique = await text_symbols_unique_adder(lambda$la);
  async function lambda$la(la) {
    async function lambda2(chapter_code, verses) {
      log({
        bible_folder,
        chapter_code,
      });
      let mapped = list_map_property(verses, "text");
      let unique_chapter = text_symbols_unique_multiple(mapped);
      la(unique_chapter);
    }
    await ebible_chapters_each_verses_check_with(bible_folder, lambda2);
  }
  return unique;
}

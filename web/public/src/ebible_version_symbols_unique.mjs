import { log } from "../../../love/public/src/log.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { ebible_chapters_each_verses_check_with } from "../../../love/public/src/ebible_chapters_each_verses_check_with.mjs";
import { string_symbols_unique } from "../../../love/public/src/string_symbols_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { string_symbols_unique_adder } from "../../../love/public/src/string_symbols_unique_adder.mjs";
export async function ebible_version_symbols_unique(bible_folder) {
  log({
    bible_folder,
  });
  let unique = await string_symbols_unique_adder(lambda$la);
  async function lambda$la(la) {
    async function lambda2(chapter_code, verses) {
      let mapped = list_map_property(verses, "text");
      let joined = list_join_empty(mapped);
      let unique_chapter = string_symbols_unique(joined);
      la(unique_chapter);
    }
    await ebible_chapters_each_verses_check_with(bible_folder, lambda2);
  }
  return unique;
}

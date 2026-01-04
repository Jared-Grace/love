import { string_symbols_unique_adder } from "../../../love/public/src/string_symbols_unique_adder.mjs";
import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_chapters_each_verses_check_with } from "../../../love/public/src/ebible_chapters_each_verses_check_with.mjs";
import { string_symbols_unique } from "../../../love/public/src/string_symbols_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export async function sandbox() {
  async function lambda(bible_folder) {
    let v = await string_symbols_unique_adder(lambda$la);
    return v;
    async function lambda$la(la) {
      async function lambda2(chapter_code, verses) {
        let mapped = list_map_property(verses, "text");
        let unique_chapter = string_symbols_unique(mapped);
        la(unique_chapter);
      }
      await ebible_chapters_each_verses_check_with(bible_folder, lambda2);
    }
  }
  await each_async(await ebible_versions_english(), lambda);
}

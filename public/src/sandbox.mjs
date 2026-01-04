import { ebible_versions_english } from "../../../love/public/src/ebible_versions_english.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_chapters_each_verses_check_with } from "../../../love/public/src/ebible_chapters_each_verses_check_with.mjs";
import { string_symbols_unique } from "../../../love/public/src/string_symbols_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function sandbox() {
  async function lambda(item) {
    await ebible_chapters_each_verses_check_with(bible_folder, each_chapter);
    let list = await ebible_verses("engbsb", "GEN01");
    let mapped = list_map_property(list, "text");
    let joined2 = string_symbols_unique(mapped);
  }
  await each_async(await ebible_versions_english(), lambda);
}

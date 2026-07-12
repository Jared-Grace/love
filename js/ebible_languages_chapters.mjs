import { ebible_languages_english_each } from "./ebible_languages_english_each.mjs";
import { bible_interlinear_verses_cache } from "./bible_interlinear_verses_cache.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
export async function ebible_languages_chapters() {
  async function lambda(la) {
    await ebible_languages_english_each(chapters_get_add);
    async function chapters_get_add(bible_folder) {
      let chapters = await ebible_version_chapters_cache(bible_folder);
      la({
        bible_folder,
        chapters,
      });
    }
    let i = await bible_interlinear_verses_cache();
    la(i);
  }
  let all = await list_adder_async(lambda);
  return all;
}

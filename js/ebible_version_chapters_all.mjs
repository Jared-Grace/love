import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function ebible_version_chapters_all(version) {
  async function lambda(la) {
    async function each_chapter(chapter_code, verses) {
      la({
        chapter_code,
        verses,
      });
    }
    await ebible_chapters_each_verses(version, each_chapter);
  }
  let chapters = await list_adder_async(lambda);
  return chapters;
}

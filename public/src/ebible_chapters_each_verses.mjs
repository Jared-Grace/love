import { ebible_chapters_each_verses_list } from "../../../love/public/src/ebible_chapters_each_verses_list.mjs";
import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
export async function ebible_chapters_each_verses(
  bible_folder,
  lambda$chapter_code$verses,
) {
  let list = await ebible_chapter_codes(bible_folder);
  await ebible_chapters_each_verses_list(
    list,
    bible_folder,
    lambda$chapter_code$verses,
  );
}

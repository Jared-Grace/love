import { ebible_chapters_each_verses_list } from "../../../love/public/src/ebible_chapters_each_verses_list.mjs";
import { ebible_chapter_codes } from "../../../love/public/src/ebible_chapter_codes.mjs";
export async function ebible_chapters_each_verses(
  bible_folder,
  lambda$chapter_code$verses,
) {
  let chapter_codes = await ebible_chapter_codes(bible_folder);
  await ebible_chapters_each_verses_list(
    chapter_codes,
    bible_folder,
    lambda$chapter_code$verses,
  );
}

import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
import { ebible_chapters_each_verses_check } from "./ebible_chapters_each_verses_check.mjs";
export async function ebible_chapters_each_verses_check_with(
  bible_folder,
  each_chapter,
) {
  await ebible_chapters_each_verses_check(bible_folder);
  await ebible_chapters_each_verses(bible_folder, each_chapter);
}

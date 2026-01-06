import { ebible_chapters_each_verses_check_with } from "../../../love/public/src/ebible_chapters_each_verses_check_with.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_chapters_upload(
  bible_folder,
  lambda$chapter_code$verses,
) {
  marker("1");
  async function lambda(chapter_code, verses) {}
  await ebible_chapters_each_verses_check_with(bible_folder2, lambda);
  let v = await ebible_chapters_each_verses_check_with(
    bible_folder,
    lambda$chapter_code$verses,
  );
  return v;
}

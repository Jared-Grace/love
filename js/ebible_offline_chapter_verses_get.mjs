import { ebible_offline_downloaded_get } from "./ebible_offline_downloaded_get.mjs";
export async function ebible_offline_chapter_verses_get(
  bible_folder,
  chapter_code,
) {
  "one chapter of a bible kept on this device, asked for by the chapter's own code - which is the name every chapter is kept under";
  let verses = await ebible_offline_downloaded_get(bible_folder, chapter_code);
  return verses;
}

import { app_original_bible_gloss_chapters_uploaded } from "./app_original_bible_gloss_chapters_uploaded.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { equal } from "./equal.mjs";
export async function app_original_bible_gloss_chapters_new_testament() {
  "Every published chapter of the original-language gloss that stands in the New Testament, which is every chapter a Greek word can be tapped in.";
  "The testament is asked of each chapter rather than read off a list of book codes kept here, so a book moving between testaments moves in one place.";
  let chapter_codes = await app_original_bible_gloss_chapters_uploaded();
  let testament_new = ebible_testament_new_name();
  let chapters = [];
  for (let chapter_code of chapter_codes) {
    let testament_name = bible_chapter_testament_name(chapter_code);
    if (equal(testament_name, testament_new)) {
      chapters.push(chapter_code);
    }
  }
  return chapters;
}

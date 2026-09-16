import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { app_original_bible_gloss_chapters_uploaded } from "./app_original_bible_gloss_chapters_uploaded.mjs";
import { bible_interlinear_chapter_word_forms } from "./bible_interlinear_chapter_word_forms.mjs";
export async function bible_interlinear_section_marks_welded() {
  "Every word of every chapter the page can show whose spelling ends in one of the two Hebrew paragraph marks while its own transliteration says no such sound is there - which is the mark welded onto the word rather than standing beside it.";
  "★ THE TRANSLITERATION IS THE WITNESS, because it was written by the same hand as the spelling and about the same word, so where the two disagree one of them is wrong and nothing outside the record has to be trusted to see it. A rule about which letters may end a Hebrew word catches the open mark and cannot catch the closed one, since that letter ends real words every day.";
  "A welded mark is wrong twice over: the reader is shown a word that is not the word, and a voice given it says a syllable that is not there.";
  let chapter_codes = await app_original_bible_gloss_chapters_uploaded();
  let welded = [];
  for (let chapter_code of chapter_codes) {
    let forms = await bible_interlinear_chapter_word_forms(chapter_code);
    for (let form of forms) {
      let text = form.text;
      let last = text.slice(-1);
      let open_mark = equal(last, "פ");
      let closed_mark = equal(last, "ס");
      if (not(open_mark) && not(closed_mark)) {
        continue;
      }
      let letters = form.translit.normalize("NFD").replace(/[^a-zA-Z]/g, "");
      let sound = letters.slice(-1).toLowerCase();
      let open_agrees = open_mark && (equal(sound, "p") || equal(sound, "f"));
      let closed_agrees = closed_mark && equal(sound, "s");
      if (open_agrees || closed_agrees) {
        continue;
      }
      welded.push({
        chapter_code,
        text,
        translit: form.translit,
      });
    }
  }
  return welded;
}

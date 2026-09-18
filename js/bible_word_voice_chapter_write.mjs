import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_interlinear_chapter_word_forms } from "./bible_interlinear_chapter_word_forms.mjs";
import { file_exists } from "./file_exists.mjs";
import { google_text_to_speech_voice_gemini } from "./google_text_to_speech_voice_gemini.mjs";
import { google_text_to_speech_voice_audio } from "./google_text_to_speech_voice_audio.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_voice_chapter_write(
  chapter_code,
  voice_names_comma,
) {
  "$plain chapter_code";
  "Records every different spoken form of one chapter in each Gemini voice named, each given only the Hebrew letters, and files it under the form's own spelling.";
  "★ A FORM IS RECORDED ONCE AND PLAYED WHEREVER IT APPEARS, so Genesis 1's 800 or so words cost 188 recordings. That is what makes recording a whole book affordable rather than a thing to ration.";
  "★ THE FILE IS NAMED AFTER THE WORD AND NEVER AFTER ITS PLACE IN THE CHAPTER, because a number is only good while the list it counts stays in the same order, while a form names itself and is unique by construction - the forms are gathered by removing duplicates.";
  "★ THE VOICE IS GIVEN THE LETTERS ALONE, because six other readings were tried on the first 25 words and every instruction either changed nothing, said the word twice, or slowed it down and added a syllable that is not there.";
  "★ A WORD ALREADY RECORDED IS SKIPPED, EACH REQUEST WAITS SEVEN SECONDS AND IS ASKED AGAIN ON A FAILURE, because Gemini voices are limited per minute per project and two runs in a row died on a timed-out token fetch. A chapter takes about half an hour a voice, which is long enough that giving up on one hiccup costs the whole run.";
  arguments_assert(arguments, 2);
  let voice_names = text_split_comma(voice_names_comma);
  let forms = await bible_interlinear_chapter_word_forms(chapter_code);
  let written = [];
  for (let form of forms) {
    for (let voice_name of voice_names) {
      let file_path =
        "gitignore/bible_word_voice/" +
        chapter_code +
        "/" +
        voice_name +
        "/" +
        form.text +
        ".mp3";
      if (await file_exists(file_path)) {
        continue;
      }
      let voice = google_text_to_speech_voice_gemini("he-IL", voice_name);
      async function asked() {
        let r = await google_text_to_speech_voice_audio(voice, {
          text: form.text,
        });
        return r;
      }
      let audio = await retry_standard(asked);
      await file_overwrite_buffer(file_path, audio);
      await sleep(7000);
      written.push({
        text: form.text,
        voice_name,
        bytes: audio.length,
      });
    }
  }
  return written;
}

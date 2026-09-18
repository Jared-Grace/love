import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_interlinear_chapter_word_forms } from "./bible_interlinear_chapter_word_forms.mjs";
import { not } from "./not.mjs";
import { file_exists } from "./file_exists.mjs";
import { google_text_to_speech_voice_gemini } from "./google_text_to_speech_voice_gemini.mjs";
import { google_text_to_speech_voice_audio } from "./google_text_to_speech_voice_audio.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_voice_full_stop_write(
  chapter_code,
  voice_names_comma,
) {
  "$plain chapter_code";
  "Records every word of one chapter that carries the joining dash a third time with a full stop written after it, filed under the word's own spelling so it can be heard against the plain recording.";
  "★ A FULL STOP IS WRITTEN AFTER THE WORD TO SEE WHETHER THE ENGINE IS CUTTING THE TAIL OF A VERY SHORT CLIP, because the words heard cut off early were the shortest in the chapter, and taking the dash off changed nothing - one word was cut off with it and without it.";
  "★ THE DASHED WORDS STAND FOR THE SHORT ONES, sixteen of them, because they are all one or two syllables and the listener has already heard both of their readings, so a third takes little more of the listener's time.";
  arguments_assert(arguments, 2);
  let voice_names = text_split_comma(voice_names_comma);
  let forms = await bible_interlinear_chapter_word_forms(chapter_code);
  let written = [];
  for (let form of forms) {
    let b = form.text.includes("־");
    if (not(b)) {
      continue;
    }
    for (let voice_name of voice_names) {
      let file_path =
        "gitignore/bible_word_voice/" +
        chapter_code +
        "_stop/" +
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
          text: form.text + ".",
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

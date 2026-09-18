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
export async function bible_word_voice_dash_dropped_write(
  chapter_code,
  voice_names_comma,
) {
  "$plain chapter_code";
  "Records every word of one chapter that carries the joining dash a second time with the dash taken off, filed under the word's own spelling so it can be heard against the recording that kept it.";
  "★ THE JOINING DASH IS SUSPECTED OF CLIPPING THE WORD, because two words in the first 39 heard were cut off early and one of them ends in it. The dash joins a word to the next one and is never spoken, so a voice that treats it as the end of a line would stop short exactly like this.";
  "★ THE FILE KEEPS THE DASHED SPELLING IN ITS NAME although the dash was not sent, because the two recordings are of the same word and the screen has to put them side by side.";
  "★ ONLY THE WORDS THAT CARRY THE DASH ARE ASKED FOR, sixteen of the chapter's hundred and eighty-eight, because the question is about the dash and a word without one would answer nothing.";
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
        "_dashless/" +
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
          text: form.text.replaceAll("־", ""),
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

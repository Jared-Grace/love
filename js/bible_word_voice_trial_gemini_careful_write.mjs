import { retry_standard } from "./retry_standard.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_interlinear_chapter_word_forms_first } from "./bible_interlinear_chapter_word_forms_first.mjs";
import { google_text_to_speech_voice_gemini } from "./google_text_to_speech_voice_gemini.mjs";
import { file_exists } from "./file_exists.mjs";
import { google_text_to_speech_voice_audio } from "./google_text_to_speech_voice_audio.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_voice_trial_gemini_careful_write(
  voice_names_comma,
) {
  "Records the first 25 different words of Genesis 1 twice in each Gemini voice named - once given only the Hebrew letters, once also asked to say every syllable - and files both where the voice trial screen plays them side by side.";
  "★ BLENDED SYLLABLES WERE THE ONE FAULT EVERY VOICE SHARED: of eight words faulted across four voices, four were two syllables run into one, and no voice was clear of it. A fault every voice makes is not the voice's, so it is asked for rather than chosen around.";
  "★ THE PLAIN READING IS RECORDED AGAIN HERE RATHER THAN POINTED AT, because a voice does not say the same word identically twice, so a plain recording made in the same run is the only fair thing to hear the asked reading against.";
  "★ THE WORDING ASKS FOR EVERY SYLLABLE TO BE HEARD WHILE STAYING ONE WORD, because sending the transliteration with its syllable dots gave an even, syllable-by-syllable reading that was no longer a word - the fault this is trying not to buy.";
  "★ EACH REQUEST IS ASKED AGAIN ON A FAILURE, waiting twice as long each time, because two runs in a row died on a timed-out token fetch after most of an hour of recording, and a run that gives up on one network hiccup has to be started again by hand.";
  "★ A WORD ALREADY RECORDED IS SKIPPED AND EACH REQUEST WAITS SEVEN SECONDS, because Gemini voices are limited per minute per project; skipping lets a stopped run carry on where it stopped.";
  arguments_assert(arguments, 1);
  let voice_names = text_split_comma(voice_names_comma);
  let words = await bible_interlinear_chapter_word_forms_first("GEN01", 25);
  let written = [];
  for (let [index, w] of words.entries()) {
    for (let voice_name of voice_names) {
      let voice = google_text_to_speech_voice_gemini("he-IL", voice_name);
      let tried = [
        [
          "plain",
          {
            text: w.text,
          },
        ],
        [
          "careful",
          {
            prompt:
              "Say this Biblical Hebrew word once, unhurried, so that every syllable in it is heard, and keep it one natural word rather than separated sounds.",
            text: w.text,
          },
        ],
      ];
      for (let [reading, input] of tried) {
        let file_path =
          "gitignore/bible_word_voice_trial/gem_careful/" +
          index +
          "_" +
          voice_name +
          "_" +
          reading +
          ".mp3";
        if (await file_exists(file_path)) {
          continue;
        }
        async function asked() {
          let r = await google_text_to_speech_voice_audio(voice, input);
          return r;
        }
        let audio = await retry_standard(asked);
        await file_overwrite_buffer(file_path, audio);
        await sleep(7000);
        written.push({
          index,
          voice_name,
          reading,
          bytes: audio.length,
        });
      }
    }
  }
  return written;
}

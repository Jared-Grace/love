import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_interlinear_chapter_word_forms_first } from "./bible_interlinear_chapter_word_forms_first.mjs";
import { file_exists } from "./file_exists.mjs";
import { eleven_labs_voice_audio } from "./eleven_labs_voice_audio.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function bible_word_voice_eleven_write(
  chapter_code,
  count,
  model_id,
  voice_ids_comma,
) {
  "$plain chapter_code";
  "$plain model_id";
  "Records the first so many different spoken forms of one chapter in each ElevenLabs voice named, each given only the Hebrew letters, and files it under the form's own spelling.";
  "★ THE SAME WORDS AND THE SAME PLAIN LETTERS AS THE GOOGLE RECORDINGS, because the whole point of this run is a comparison, and a comparison where either side was given different text answers a different question.";
  "★ A WORD ALREADY RECORDED IS SKIPPED, so a run that dies part way is continued by asking again rather than paid for twice. There is no wait between requests, because this engine is not limited the same way and the free allowance is counted in letters rather than in calls.";
  arguments_assert(arguments, 4);
  let voice_ids = text_split_comma(voice_ids_comma);
  let forms = await bible_interlinear_chapter_word_forms_first(
    chapter_code,
    count,
  );
  let written = [];
  for (let form of forms) {
    for (let voice_id of voice_ids) {
      let file_path =
        "gitignore/bible_word_voice_eleven/" +
        chapter_code +
        "/" +
        voice_id +
        "/" +
        form.text +
        ".mp3";
      if (await file_exists(file_path)) {
        continue;
      }
      async function asked() {
        let r = await eleven_labs_voice_audio(voice_id, model_id, form.text);
        return r;
      }
      let audio = await retry_standard(asked);
      await file_overwrite_buffer(file_path, audio);
      written.push({
        text: form.text,
        voice_id,
        bytes: audio.length,
      });
    }
  }
  return written;
}

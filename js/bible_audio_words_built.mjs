import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_words_guessed } from "./bible_audio_words_guessed.mjs";
import { property_get } from "./property_get.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_audio_words_built(bible_folder) {
  "$plain bible_folder";
  "Each word a recorded bible was read with by guessing, set beside the sound built from a known word inside it - a known word plus an ending, or two known words run together - naming the guesses that differ from what was built and the words nothing known is inside.";
  "★ A GUESS THAT DIFFERS FROM THE BUILT SOUND IS THE ONE TO DOUBT. The known word was looked up and the ending follows a fixed rule. Measured 2026-11-27 over the BSB: 332 guessed words agreed with what was built, 35 differed - among them prophesied read as prophe-seed and Jehoshaphat's read without the sh its name has - and 52 had nothing known inside.";
  "It reads only.";
  arguments_assert(arguments, 1);
  let reported = await bible_audio_words_guessed(bible_folder);
  let guessed = property_get(reported, "guessed");
  let args = {
    guessed,
  };
  let built = await py_script_speech_json_report(
    fn_name("bible_audio_words_built"),
    args,
  );
  return built;
}

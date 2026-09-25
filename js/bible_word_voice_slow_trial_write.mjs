import { bible_word_voice_slow_trial_words } from "./bible_word_voice_slow_trial_words.mjs";
import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { sound_slow } from "./sound_slow.mjs";
import { gloss_word_sound_compression_level } from "./gloss_word_sound_compression_level.mjs";
export async function bible_word_voice_slow_trial_write() {
  "Slows the trial's Greek words the same way the Urdu reader's English words are slowed, and files both the ordinary and the slow clip where the voice trial screen plays them from.";
  "★ THE ORDINARY CLIPS ARE COPIED OUT FIRST, BECAUSE THE SLOWER SLOWS EVERY CLIP IN THE FOLDER IT IS GIVEN. Handed the real folder it would slow the whole New Testament; handed a folder holding only the trial's words it slows exactly those.";
  "It writes under gitignore because these are for one listener to judge on this machine, not for the app. A clip already slowed is left alone, so running it again costs nothing.";
  let voice_name = "el-GR-Wavenet-B";
  let folder_from = "gitignore/bible_word_voice_trial/grc_slow_from";
  let folder_to = "gitignore/bible_word_voice_trial/grc_slow";
  for (let [word] of bible_word_voice_slow_trial_words()) {
    let path = bible_word_voice_path(voice_name, word);
    let source = web_assets_folder_join(path);
    let file_name = path.split("/").pop();
    await file_copy_overwrite(
      source,
      folder_from + "/" + voice_name + "/" + file_name,
    );
  }
  let slowed = await sound_slow({
    folder_from,
    folder_to,
    voices: [voice_name],
    compression_level: gloss_word_sound_compression_level(),
  });
  return slowed;
}

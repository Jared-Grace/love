import { bible_word_voice_slow_trial_folder } from "./bible_word_voice_slow_trial_folder.mjs";
import { bible_word_voice_slow_trial_words } from "./bible_word_voice_slow_trial_words.mjs";
import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { bible_word_voice_slow_trial_speeds } from "./bible_word_voice_slow_trial_speeds.mjs";
import { sound_slow } from "./sound_slow.mjs";
import { gloss_word_sound_compression_level } from "./gloss_word_sound_compression_level.mjs";
export async function bible_word_voice_slow_trial_write() {
  "Slows the trial's Greek words the same way the Urdu reader's English words are slowed, once at every speed on trial, and files the ordinary and the slow clips where the voice trial screen plays them from.";
  "★ THE ORDINARY CLIPS ARE COPIED OUT FIRST, BECAUSE THE SLOWER SLOWS EVERY CLIP IN THE FOLDER IT IS GIVEN. Handed the real folder it would slow the whole New Testament; handed a folder holding only the trial's words it slows exactly those.";
  "Each speed gets a folder of its own, because the slower skips a clip that is already there and cannot tell a clip slowed at one speed from one slowed at another.";
  "It writes under gitignore because these are for one listener to judge on this machine, not for the app. A clip already slowed is left alone, so running it again costs nothing.";
  let voice_name = "el-GR-Wavenet-B";
  let folder_from = bible_word_voice_slow_trial_folder("from");
  for (let [word] of bible_word_voice_slow_trial_words()) {
    let path = bible_word_voice_path(voice_name, word);
    let source = web_assets_folder_join(path);
    let file_name = path.split("/").pop();
    await file_copy_overwrite(
      source,
      folder_from + "/" + voice_name + "/" + file_name,
    );
  }
  let results = [];
  for (let slow of bible_word_voice_slow_trial_speeds()) {
    let part = String(slow);
    let slowed = await sound_slow({
      folder_from,
      folder_to: bible_word_voice_slow_trial_folder(part),
      voices: [voice_name],
      compression_level: gloss_word_sound_compression_level(),
      slow,
    });
    results.push(slowed);
  }
  return results;
}

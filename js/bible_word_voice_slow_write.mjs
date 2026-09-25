import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { bible_word_voice_folder_name } from "./bible_word_voice_folder_name.mjs";
import { bible_word_voice_slow_folder_name } from "./bible_word_voice_slow_folder_name.mjs";
import { folder_read } from "./folder_read.mjs";
import { sound_slow } from "./sound_slow.mjs";
import { gloss_word_sound_compression_level } from "./gloss_word_sound_compression_level.mjs";
import { bible_word_voice_slow_speed } from "./bible_word_voice_slow_speed.mjs";
export async function bible_word_voice_slow_write() {
  "Makes the slow saying of every Bible word already recorded, in every voice, for the turtle beside each word.";
  "★ IT IS MADE FROM THE RECORDINGS, BY THE SAME SLOWER THE URDU READER'S ENGLISH USES, SO IT COSTS NO SPEECH AND IS THE SAME PERFORMANCE STRETCHED. Why that matters is written on the slower's generic caller.";
  "The voices are read off the folders on disk rather than listed, because a voice folder is exactly a voice that has recordings, and a voice with none has nothing to slow.";
  "A clip already slowed is left alone, so it is the step to run after every batch of new recordings, before the stamp and the upload.";
  let path = bible_word_voice_folder_name();
  let folder_from = web_assets_folder_join(path);
  let path2 = bible_word_voice_slow_folder_name();
  let folder_to = web_assets_folder_join(path2);
  let voices = await folder_read(folder_from);
  let slowed = await sound_slow({
    folder_from,
    folder_to,
    voices,
    compression_level: gloss_word_sound_compression_level(),
    slow: bible_word_voice_slow_speed(),
  });
  return slowed;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { gloss_word_sound_voices } from "./gloss_word_sound_voices.mjs";
import { gloss_word_sound_compression_level } from "./gloss_word_sound_compression_level.mjs";
import { sound_slow } from "./sound_slow.mjs";
export async function gloss_words_sound_slow_write_generic(sound_fn, slow_fn) {
  "Makes a slower reading of every word already recorded, for a learner who did not catch it the first time.";
  "★ IT IS MADE OUT OF THE RECORDINGS RATHER THAN OUT OF THE ENGINE, WHICH IS THE WHOLE REASON IT IS AFFORDABLE. Speaking every word again in every voice is about eight hours of this machine; slowing the files that already exist is about a quarter of an hour, because slowing is a filter over samples and the speech model is never loaded. That was measured rather than assumed, and the two routes were compared band by band before this was built: they sit a fifth as far apart as the slowing itself moves the sound, at worst.";
  "★ IT ALSO MEANS THE SLOW READING IS THE SAME READING, WHICH IS WORTH MORE THAN THE TIME IT SAVES. Asked to speak a word twice, the engine says it twice - a little differently each time, in a way nobody controls. A learner who taps the word and then taps the slow button would be given two different performances and asked to hear one of them as the other, more slowly. Made from the file, it is the performance they just heard, stretched.";
  "It asks for both folders by handing over the functions that name them rather than by spelling either, so a folder that moves moves once.";
  "It does not decide what is missing - the slower does, by looking in the folder it is writing into. That is the one record of what has been done that cannot disagree with the disk, and it is what lets a run of thousands of files be stopped and started again.";
  arguments_assert(arguments, 2);
  let folder_from = local_function_folder(sound_fn);
  let folder_to = local_function_folder(slow_fn);
  let voices = gloss_word_sound_voices();
  let compression_level = gloss_word_sound_compression_level();
  let slowed = await sound_slow({
    folder_from,
    folder_to,
    voices,
    compression_level,
  });
  return slowed;
}

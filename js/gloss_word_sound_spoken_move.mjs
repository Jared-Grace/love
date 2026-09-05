import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { text_trim } from "./text_trim.mjs";
import { gloss_word_sound_key } from "./gloss_word_sound_key.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_move } from "./file_move.mjs";
import { list_add } from "./list_add.mjs";
export async function gloss_word_sound_spoken_move(
  name,
  pending,
  folder,
  filed,
) {
  "$plain name";
  "$plain pending";
  "$plain folder";
  "Files one piece the speaking engine produced under the word the engine itself says it spoke, and adds that word to the list of what has been filed.";
  "★ THE ENGINE'S OWN NOTE IS WHAT NAMES THE PIECE, NOT THE ORDER THE WORDS WENT IN. Beside each sound it writes down the words it said, and that note is read off the disk here. Counted out from the order instead, one piece more or fewer than expected does not fail - it shifts every word after it onto somebody else's sound, in an app whose one job is telling a person how a word sounds.";
  "A note with no sound beside it is passed over rather than treated as a fault, because that is what the end of a run the machine cut short looks like from here, and the words it did reach are all still good.";
  "A word already recorded is passed over too, so the piece the engine has just made is thrown away rather than put over the top of one that is already published. Nothing is written twice, which is what lets the whole run be started again after it stops.";
  "The list it adds to is handed in rather than answered back, because the caller is doing this for every note at once and wants one list at the end rather than a pile of answers to join up.";
  arguments_assert(arguments, 4);
  let note_path = path_join([pending, name]);
  let said = await file_read(note_path);
  let word = text_trim(said);
  let key = gloss_word_sound_key(word);
  let number = text_replace_once(name, ".txt", "");
  let sound_name = text_combine_multiple([number, ".mp3"]);
  let sound_from = path_join([pending, sound_name]);
  let there = await file_exists(sound_from);
  let gone = not(there);
  if (gone) {
    return;
  }
  let key_name = text_combine_multiple([key, ".mp3"]);
  let sound_to = path_join([folder, key_name]);
  let already = await file_exists(sound_to);
  if (already) {
    return;
  }
  await file_move(sound_from, sound_to);
  list_add(filed, key);
}

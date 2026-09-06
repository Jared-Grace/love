import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_word_sound_voice_folder(folder, voice) {
  "$plain folder";
  "$plain voice";
  "The folder holding everything one person has said, inside the folder holding the recordings.";
  "It is two words joined and it is still worth a name, because three steps join them - the one that files a new recording, the one that asks what is still missing, and the one that sends them up - and those three are only ever right together. Joined separately in three places they would agree until somebody changed one of them.";
  arguments_assert(arguments, 2);
  let path = path_join([folder, voice]);
  return path;
}

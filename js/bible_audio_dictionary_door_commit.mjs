import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_door_commit } from "./bible_audio_door_commit.mjs";
export async function bible_audio_dictionary_door_commit() {
  "The commit at which the reading gained a written dictionary of Bible names, and so began saying them the way somebody wrote them down rather than the way it guessed.";
  "★ IT IS A SECOND DOOR AND NOT A CORRECTION OF THE FIRST, BECAUSE THE TWO FAULTS ARE DIFFERENT FAULTS. The older door is where the reading stopped leaving an unknown name silent. This one is where it stopped saying a known name wrongly. A recording made between them holds no silence at all and can still say Pontius Pilate with neither name right, which is exactly what Luke 3 does: its sound was written two days over the older door and two days under this one.";
  "★ IT IS THE LATER OF THE TWO, SO ANYTHING UNDER IT IS UNDER BOTH. That is what lets a check that cares about either fault ask this one alone and be sure it has missed nothing.";
  "The word looked for is the dictionary being read into the reading at all. Where it is looked for, and why it is looked for by what it did rather than by a commit name, is the shared door.";
  arguments_assert(arguments, 0);
  let said = "bible_pronunciations";
  let commit = await bible_audio_door_commit(said);
  return commit;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_door_commit } from "./bible_audio_door_commit.mjs";
export async function bible_audio_apostrophe_door_commit() {
  "The commit at which the reading began straightening the curly apostrophe before speaking, and so stopped dropping the end of every word that holds one.";
  "★ IT IS THE THIRD DOOR AND THE WORST FAULT OF THE THREE, BECAUSE THE OTHER TWO GET A NAME WRONG AND THIS ONE GETS A SENTENCE BACKWARDS. The Bible text spells the mark as the curly one, which is right on the page and unrecognised by the phonemiser: the word is cut at the mark and what is left is spoken as a word of its own. On a possessive that is an ending spelled out as a letter, so a man's house is read man ESS house. On a negative the whole negative goes, so isn't is spoken is, wasn't was, didn't did. A recording under this door can therefore say the opposite of what its own caption shows.";
  "★ IT IS THE LATEST OF THE THREE, SO ANYTHING UNDER IT IS UNDER ALL OF THEM. That is what lets a check that cares about any of the three faults ask this one alone for the set worth reading at all, and then use the earlier doors only to tell which reading spoke each chapter.";
  "The word looked for is the step that straightens the mark being named at all. Where it is looked for, and why it is looked for by what it did rather than by a commit name, is the shared door.";
  arguments_assert(arguments, 0);
  let said = "straightened";
  let commit = await bible_audio_door_commit(said);
  return commit;
}

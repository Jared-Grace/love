import { arguments_assert } from "./arguments_assert.mjs";
import { list_unique } from "./list_unique.mjs";
export function lyric_video_picture_scene_words_said(scene, words) {
  "$plain scene";
  "$plain words";
  "Which of a given list of words an authored scene actually says, each named as the scene spells it rather than as the list does.";
  "★ IT COMPARES WITH THE PLURAL ENDING TAKEN OFF BOTH SIDES, because a look that refuses roads and a scene that asks for a road are talking about the same thing, and the two words differ by one letter and by nothing else. That was the whole of the first fault ever found here: a scene written the same afternoon as the check, holding a word the look had refused since the day it was written.";
  "IT IS THE PLURAL AND NOT A DICTIONARY OF ENDINGS. A fuller folding exists elsewhere and takes the past and the participle off as well, which is right for asking whether two sayings mean the same and wrong here - it would fold lettering down to letter and quietly widen every list that passes through this into words nobody wrote.";
  "★ IT ANSWERS WITH THE SCENE'S OWN SPELLING AND NOT THE LIST'S. Somebody told their scene was stopped and handed back the word from the list has to find it in their own sentence themselves, and the word they are looking for is spelt differently by exactly the letter that was taken off.";
  "TWO CHECKS ASK THIS AND THEIR LISTS MEAN OPPOSITE THINGS - one a list of things refused outright, the other a list of things merely owing a second wording. That is why the list is a parameter and the judgment is not here: the matching is the same operation and what it means is not.";
  arguments_assert(arguments, 2);
  let ending = new RegExp("s$");
  let letters = new RegExp("[a-z]+", "g");
  let stems = [];
  for (let word of words) {
    let v = word.replace(ending, "");
    stems.push(v);
  }
  let spoken = scene.toLowerCase().match(letters);
  let said = [];
  if (spoken) {
    for (let word of spoken) {
      let stem = word.replace(ending, "");
      let has = stems.includes(stem);
      if (has) {
        said.push(word);
      }
    }
  }
  let once = list_unique(said);
  return once;
}

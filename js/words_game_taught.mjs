import { data_given_accepted_folder } from "./data_given_accepted_folder.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function words_game_taught() {
  "The words the game means a player to come away holding - the ones it is about, and the ones the world it is set in cannot be described without - kept as accepted data rather than written into any code.";
  "IT IS THE OTHER HALF OF A CHILD'S VOCABULARY, and neither half means anything without it. The accepted list of what a child already knows carries no word from the faith, on the honest grounds that nothing here can rule on what a six-year-old has been taught. That refusal is right and it leaves a hole: a check reading only that list faults GOD, SIN and CROSS, and faulted thirty-seven of fifty-three lines the first time one ran. Those are not words a writer reached for carelessly. They are the reason the game exists.";
  "SO A HARD WORD IS TWO DIFFERENT THINGS and this is what tells them apart. A word outside a child's vocabulary is either one the game INTENDS them to learn, which wants a gloss and a tap, or one a writer reached for when a plainer word was standing right there, which wants the line written again. Nothing about a word's shape or how rare it is separates those - only intent does, and intent is a thing somebody decides once and writes down.";
  "IT IS NOT A LIST OF FAITH WORDS, though most of it is. A dyer's world needs DYE and WEAVE, and a player meeting a dyer will meet them; the answer to a word like that is a gloss and not a rewrite, exactly as it is for CROSS. Splitting the list by which of the two a word came from would make two lists that are read together every single time.";
  "IT IS DRAWN FROM WHAT THE CORPUS SAYS and grows the same way, rather than being guessed at ahead of the writing. Every word in it was said by somebody in a written arc; nothing was added because it seemed likely to come up. A word guessed at is a word nobody can check, and a list nobody can check is a list that quietly excuses whatever lands in it.";
  "BASE FORMS ONLY, and the same reader that takes endings off for the other list takes them off for this one. Listing sinned beside sin, and prays beside pray, would double the file to say nothing new.";
  let folder = data_given_accepted_folder();
  let f_name = fn_name("words_game_taught");
  let combined = text_combine_multiple([f_name, ".json"]);
  let path = path_join([folder, combined]);
  let words = await file_read_json(path);
  return words;
}

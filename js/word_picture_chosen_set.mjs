import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { word_picture_chosen } from "./word_picture_chosen.mjs";
import { word_pictures_drawn_known } from "./word_pictures_drawn_known.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_set } from "./property_set.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_constant_json_write } from "./function_constant_json_write.mjs";
export async function word_picture_chosen_set(word, attempt) {
  "$plain word";
  "$plain attempt";
  "Keep one attempt as the picture for one taught word, and write the table of kept attempts out again.";
  "IT REFUSES A NUMBER THAT IS NOT ON DISK. The number arrives from a button on a review screen, and a screen can be looking at a table written before a folder was tidied; a kept number naming a file nobody has means a word that shows nothing in the game, discovered by a child rather than here.";
  "IT OVERWRITES RATHER THAN REFUSING A SECOND ANSWER, because changing your mind after another attempt is drawn is the ordinary way this is used. There is exactly one kept attempt per word and the newest press is it.";
  "KEEPING IS NOT PUBLISHING. This records a judgment and moves nothing: the pictures still sit in the ignored folder the local server reads, and putting one where the site serves it is a separate step that can read this table to know which one.";
  "THE NUMBER IS MADE A NUMBER HERE, because this is called from two seams that hand it over differently: a button passes the number the table gave it, and a command line passes every argument as a word. Left alone, the word two is not the number two and the check below would refuse a picture that is sitting on disk - which reads as the folder being wrong rather than the seam.";
  let kept = Number(attempt);
  let known = word_pictures_drawn_known();
  let drawn = property_get_or(known, word, []);
  let numbers = [];
  for (let one of drawn) {
    let number = property_get(one, "attempt");
    list_add(numbers, number);
  }
  let f_name3 = fn_name("word_pictures_drawn_known");
  let f_name4 = fn_name("word_pictures_drawn_known_write");
  let hint = text_combine_multiple([
    "that attempt number is not on disk for that word; ",
    f_name3,
    " says which numbers exist, and ",
    f_name4,
    " counts the folders again",
  ]);
  list_includes_assert_json(numbers, kept, {
    hint,
    word,
  });
  let chosen = word_picture_chosen();
  property_set(chosen, word, kept);
  let f_name = fn_name("word_picture_chosen");
  let f_name2 = fn_name("word_picture_chosen_set");
  let first = text_combine_multiple([
    "Which attempt has been kept for each taught word, as a plain table written out by ",
    f_name2,
    " and never edited by hand.",
  ]);
  let prose = [
    first,
    "A WORD WITH NO ENTRY HAS NOT BEEN JUDGED YET, which is not the same as having no picture worth keeping. Every drawn word starts absent from here and stays absent until somebody looks at its attempts side by side and presses Keep under one of them, so the length of this table is the length of the review that has actually happened.",
    "IT HOLDS THE ATTEMPT'S OWN NUMBER and nothing else, because that number is already the name of the file on disk. Copying the picture somewhere, or its wording, would make a second thing to keep in step with the folder; a number cannot drift from the file it names.",
  ];
  await function_constant_json_write(f_name, prose, chosen);
  return chosen;
}

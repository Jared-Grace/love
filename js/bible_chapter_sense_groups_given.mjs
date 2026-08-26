import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_sense_groups_given_path } from "./bible_chapter_sense_groups_given_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function bible_chapter_sense_groups_given() {
  "Every chapter whose sense divisions have been written down, each one a list of parts in reading order saying which verses the part holds and what it is about.";
  "A CHAPTER IS DIVIDED BY WHAT IT MEANS, AND THAT IS A JUDGMENT NOTHING MECHANICAL MAKES. The making of the world closes each day with the same words, so a machine can find those - but the two verses in front of the first day belong to neither day and to nothing else, the third day does two separate things, and the blessing of the people made on the sixth day is the part a person would never want cut in half. A rule that catches the repeated closings gets the easy chapter roughly right and every other chapter wrong, and it is wrong silently, because a cut that falls in a bad place still looks like a cut.";
  "So the divisions are read here rather than found. They are written down one chapter at a time by somebody who read the chapter, and a chapter nobody has read is absent rather than guessed at - which is what lets a caller say so plainly instead of handing back something that only looks divided.";
  "Naming each part is not decoration. It is how the person who wrote the divisions down can be checked by the next person to read them, without that person having to hold the whole chapter in mind at once.";
  arguments_assert(arguments, 0);
  let path = bible_chapter_sense_groups_given_path();
  let parsed = await file_read_json(path);
  return parsed;
}

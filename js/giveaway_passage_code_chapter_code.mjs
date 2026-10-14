import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { ebible_chapter_code_padded_assert } from "./ebible_chapter_code_padded_assert.mjs";
export function giveaway_passage_code_chapter_code(passage_code) {
  arguments_assert(arguments, 1);
  ("$plain passage_code");
  ("The chapter a given-away passage belongs to, read back out of the one word that names the passage.");
  ("★ IT IS THE INVERSE OF ONE JOIN AND NOT A SECOND READING OF THE PUBLISHED NAME, WHICH IS THE DIFFERENCE BETWEEN THIS BEING SAFE AND IT BEING THE THING THE RECORD ALREADY REFUSED. A passage code is spelled in exactly two shapes by one function: the padded chapter code alone when a whole psalm was sung, and the padded chapter code with the verse range joined on by an underscore when a part was. So the chapter code is the text before the first underscore, and there is nothing else it could be - a chapter code is letters and digits run together and never carries one. The published file name is a different matter: it joins five pieces, and pulling a chapter out of that would be a second statement of the whole naming rule, which is why the record keeps the pieces beside it instead.");
  ("★ IT EXISTS BECAUSE THE BOX A FILE GOES IN WAS BEING WORKED OUT BY HANDING THE FILE'S OWN DISK NAME BACK TO A READER OF SUNG-PSALM NAMES, AND THE RECORD IS NO LONGER ONLY SONGS. That reader wants to see the word Psalm and a number; the paintings drawn over these psalms sit on this disk under painters' names and say no chapter at all, so the first painting to enter the record would have been refused as a name nothing can read. Every row already carries the passage it is for, whatever kind of thing it is, so asking the passage is the one route that does not have to know.");
  ("The answer is insisted on being a chapter code spelled the way this bible spells one, rather than returned as whatever stood before the underscore. A passage code that does not begin with one is a record that has gone wrong upstream, and the box it would make is a box nobody can find.");
  let words = text_split(passage_code, "_");
  let chapter_code = list_first(words);
  ebible_chapter_code_padded_assert(chapter_code);
  return chapter_code;
}

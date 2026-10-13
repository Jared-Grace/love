import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function giveaway_bible_verses_words_text(verses) {
  arguments_assert(arguments, 1);
  ("$plain verses");
  ("One psalm as nothing but its words, a verse to a line - the file somebody sings along from, reads aloud from, or pastes into a lyric field.");
  ("★ THE NUMBERS ARE LEFT OUT HERE ON PURPOSE, AND THAT IS THE WHOLE REASON THIS FILE EXISTS BESIDE THE NUMBERED ONE. A verse number is a finding aid, and a person who already has the psalm open in front of them to sing is not finding anything - the numbers are then noise read past on every line, and worse, they are text that gets pasted along with the words into whatever is being written. Stripping them back out afterwards is the work this file saves, and it costs a few kilobytes against tens of megabytes of singing in the same box.");
  ("★ A VERSE STILL GETS ITS OWN LINE, THOUGH NOTHING ON THE LINE SAYS WHICH VERSE IT IS. Run together as one paragraph the words would be the same words, but the line breaks are where a psalm is parted, and a psalm is written in lines before it is numbered - so keeping them is keeping the shape rather than keeping the numbering. It also means the two text files in a box are the same lines in the same order, one with the numbers and one without, which is what lets somebody who has both put them side by side.");
  ("The words are taken straight across with nothing done to them. Every other thing in a box of a psalm is a rendering of a recording or a picture, and this one is the translation's own text - so the one promise it makes is that it is the translation, unaltered.");
  let lines = list_map_property(verses, "text");
  let words = list_join_newline(lines);
  return words;
}

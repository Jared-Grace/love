import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add } from "./add.mjs";
export function bible_usfm_verse_end_read(verse_end) {
  arguments_assert(arguments, 1);
  ("$plain verse_end");
  ("One end of a passage, written the way a person writes one, read as the verse it names and which lettered piece of that verse it means - or nothing at all, when it is not written as an end of a passage.");
  ("A PIECE IS A NUMBER HERE AND A LETTER ONLY ON THE PAGE, because everything below counts pieces and nothing below should have to know that a is the first of them. Naught means the whole verse, which is what a bare number asks for, and it is a separate answer from the first piece rather than the same one: asking for verse thirteen and asking for the first half of verse thirteen are different requests and the second one is the one that can be refused.");
  ("Anything else is answered with nothing rather than refused, because what is handed in here comes off the name of a downloaded file and the ordinary case is a name that was never about a passage at all.");
  ("Only the letters that could be pieces of one verse are known, and a passage divided past the eighth piece is answered with nothing. That is a limit rather than a law about hebrew poetry: no printing on this disk divides a verse that far, and a letter this does not know is far more likely to be a misreading than a ninth piece.");
  let shape = new RegExp("^(\\d+)([a-z]?)$");
  let found = verse_end.match(shape);
  if (not(found)) {
    return null;
  }
  let number = Number(found[1]);
  let letter = found[2];
  let whole = equal(letter, "");
  if (whole) {
    let all = {
      number: number,
      piece: 0,
    };
    return all;
  }
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let known = list_includes(letters, letter);
  if (not(known)) {
    return null;
  }
  let index = list_index_of(letters, letter);
  let piece = add(index, 1);
  let part = {
    number: number,
    piece: piece,
  };
  return part;
}

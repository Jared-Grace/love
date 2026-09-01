import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_count_stated } from "./bible_glyph_chapters_count_stated.mjs";
import { fn_name } from "./fn_name.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function bible_glyph_chapters_count_stated_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: the sentence telling a reader how many chapters the picture Bible holds says the number the list actually holds.");
  ("A NUMBER WRITTEN IN WORDS IS THE ONE PART OF THIS LIST THAT CANNOT GO WRONG LOUDLY. Adding a chapter is an import, a name, a line in the list and a paragraph saying why it is there, and every one of those is wrong in a way somebody notices. The count is a sentence, and a sentence that has fallen behind reads exactly like a sentence that has not.");
  ("IT IS HERE BECAUSE IT WAS ALREADY MISSED. The count was carried by hand from thirty one to thirty two and from thirty to thirty one, and a hand carries a thing until the once it does not. What this removes is not the mistake but the remembering.");
  ("SAYING NOTHING AT ALL AND SAYING THE WRONG THING ARE REPORTED APART, because they are different repairs. One is a number to correct in a sentence that exists; the other is a sentence somebody deleted or reworded past recognising, and no number can be put back until it is written again.");
  ("THE HINT CARRIES THE WORDS TO WRITE, because there is nothing to decide - the list knows its own length and English has one way of saying it. A gate that made somebody count would be asking for the mistake it is here to catch.");
  let stated = await bible_glyph_chapters_count_stated();
  let f_name = fn_name("bible_glyph_chapters");
  let b = equal_not(stated.said, null);
  assert_json(b, {
    spelled: stated.spelled,
    hint: text_combine_multiple([
      "no sentence in ",
      f_name,
      " tells a reader how many chapters this Bible holds - the sentence beginning with the count and going on to say chapters today has been deleted or reworded. Write it again, beginning with the words under spelled",
    ]),
  });
  assert_json(stated.agree_is, {
    said: stated.said,
    spelled: stated.spelled,
    count: stated.count,
    hint: text_combine_multiple([
      "the sentence in ",
      f_name,
      " says one number of chapters and the list holds another - a chapter was added or removed and the sentence stayed where it was. Put the words under spelled where the words under said are now, and nothing else needs deciding",
    ]),
  });
  let r = {
    said: stated.said,
    chapters: stated.count,
  };
  return r;
}

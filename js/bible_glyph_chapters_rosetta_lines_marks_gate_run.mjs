import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_rosetta_lines_marks_only } from "./bible_glyph_chapters_rosetta_lines_marks_only.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { not_equal } from "./not_equal.mjs";
export function bible_glyph_chapters_rosetta_lines_marks_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no word of any written Rosetta band is nothing but marks. Throws naming the chapter, the verse and the mark that reached the English.");
  ("IT CATCHES THE MARK NOBODY HAS HEARD OF, which is the one thing the notation gate beside it cannot do. That gate holds the band to a reading of four known marks, so a fifth is not recognised, is not dropped, and walks through it wearing the face of a word. This asks instead whether a word can be spoken at all, which is a property of the word rather than a list somebody keeps up to date - so the mark that has not been met yet fails here on the day it arrives.");
  ("IT IS NOT MADE EMPTY BY THE BUILDER ALREADY DOING THIS. The builder drops a marks-only word, so a band built today cannot carry one and this looks vacuous. The bands are written files and not a thing rebuilt on demand: the dash sat in two hundred and twenty-six committed verses for weeks because the builder had been improved and the files had not. That is exactly the state this fails on, and it is the state that actually happens.");
  ("IT ASKS THE SURVEY RATHER THAN WALKING THE BANDS ITSELF. The survey next door already walks them and already names what it finds, and a second walk written here would be a second reading of what counts as a mark - which is the arrangement where one half is taught a new mark and the other is not. This adds the throw and nothing else.");
  ("IT REFUSES TO PASS ON NO BANDS AT ALL, because a gate that walks whatever it is given goes green the day it is given nothing and says the same word it said when everything was checked.");
  ("WHAT IT CANNOT SEE IS A MARK WITH A LETTER STUCK TO IT. The vvv the tables use for a word carried into a neighbouring row reads as a word by every test here, and it is the notation gate that catches it. The two gates are wanted for opposite reasons and neither one covers the other.");
  let surveyed = bible_glyph_chapters_rosetta_lines_marks_only();
  let chapters = property_get(surveyed, "chapters");
  let words = property_get(surveyed, "words");
  let found = property_get(surveyed, "found");
  let marks = property_get(surveyed, "marks");
  let examples = property_get(surveyed, "examples");
  let counted = not_equal(words, 0);
  assert_json(counted, {
    chapters,
    hint: "no Rosetta band held a single word, so this gate checked nothing and would have passed for that reason - the bands are named one by one next door and either the list or every band in it has come up empty",
  });
  list_empty_is_assert_json(found, {
    hint: "these words of the written bands are nothing but marks, so a reader meets a character that cannot be said out loud and cannot be told from scripture - decide for each mark whether it should be dropped by the builder or spelled out, and rebuild the chapters named here",
    marks,
    examples,
    found,
  });
  let r = {
    chapters,
    words,
  };
  return r;
}

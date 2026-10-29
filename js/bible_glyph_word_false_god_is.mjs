import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
export function bible_glyph_word_false_god_is(
  chapter_code,
  verse_number,
  word,
) {
  arguments_assert(arguments, 3);
  ("$plain chapter_code");
  ("the chapter the word stands in, three letters of the book and two digits of the chapter.");
  ("$plain verse_number");
  ("the verse the word stands in.");
  ("$plain word");
  ("one original word as the interlinear gives it, with its English and the picture the root table seats it as.");
  ("Whether this word is a god of the nations rather than the God of Israel, and so is drawn as the idol rather than as God's fire.");
  ("THE HUMAN CHOSE ON 2026-10-29 THAT GODS WEAR THE IDOL. Hebrew has one word, elohim, for the God of Israel and for the gods of the nations, and the root table can seat one number as one picture, so it seated God's fire. The pages had already drawn the idol for the false gods in a hundred and twenty two verses - You shall have no other gods before Me, the God of gods - and drawing God's fire there instead would make the God of gods read God of God. Turned down: redrawing those idols as fire, which loses the other in other gods; and a list of verses, which every chapter written later would have to be added to by hand.");
  ("THE TRANSLATOR'S CAPITAL LETTER DECIDES, because it is a judgment already made about each verse and written down. The interlinear writes God for the God of Israel and god or gods for any other, over the same Hebrew. Measured on 2026-10-29 over every written chapter: a hundred and twenty three verses seat God's fire under a word the interlinear spells god or gods, and a hundred and twenty two of them draw the idol.");
  ("THE ONE THAT DOES NOT IS KEPT AS FIRE ON PURPOSE. In 1 Kings 20:28 the Syrians call the LORD a god of the hills; the small letter is theirs, the God is Israel's, and the verse is the LORD answering them. A verse like that is listed here by its number and its word, because no letter can say it.");
  let exceptions = [["1KI20", 28, "430"]];
  if (not_equal(word.glyph, "heart_on_fire")) {
    return false;
  }
  function exception_is(exception) {
    let [code, number, strong] = exception;
    let b =
      equal(code, chapter_code) &&
      equal(number, verse_number) &&
      equal(strong, word.strong);
    return b;
  }
  if (exceptions.some(exception_is)) {
    return false;
  }
  let parts = word.gloss.split(/[^A-Za-z]+/);
  function small_god_is(part) {
    let b = equal(part, "god") || equal(part, "gods");
    return b;
  }
  let b = parts.some(small_god_is);
  return b;
}

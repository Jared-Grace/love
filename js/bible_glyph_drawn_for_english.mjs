import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function bible_glyph_drawn_for_english(drawn, english) {
  arguments_assert(arguments, 2);
  ("$plain drawn");
  ("the table maps a key to the name of its picture. It is data to read and nothing that runs.");
  ("$plain english");
  ("the English is the wording one word was translated by. It is text to read and nothing that runs.");
  ("The picture table one word is drawn from: the table as it stands, except that where the English writes god or gods in small letters, the picture of God becomes the carved stone figure.");
  ("THE HUMAN CHOSE THIS ON 2026-10-03. Hebrew elohim and Greek theos are one word for God and for the gods of the nations, and God is drawn as the burning heart - God is love, God is a consuming fire. Said of an idol, that picture would call the idol love. So the word keeps its number and its one root, and only the picture changes where the translators wrote a small letter.");
  ("THE CAPITAL IS THE TRANSLATORS' JUDGMENT AND IT IS READ, NOT MADE HERE. Whether a line means the LORD or a god of Egypt is a reading of the sentence, and the English already carries that reading in one letter. Nothing in this function decides it.");
  ("THE PICTURE OF GOD IS FOUND BY ITS NAME, NOT BY A LIST OF NUMBERS, so every number the table seats as God follows - elohim, el, eloah, the Aramaic elah, theos - and a number seated later follows without this changing.");
  let small = /\bgod(s|dess|desses)?\b/.test(english);
  if (not(small)) {
    return drawn;
  }
  let god = "heart_on_fire";
  let idol = "moai";
  let result = {};
  for (let key in drawn) {
    let glyph = drawn[key];
    result[key] = equal(glyph, god) ? idol : glyph;
  }
  return result;
}

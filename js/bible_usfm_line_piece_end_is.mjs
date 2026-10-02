import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_line_sentence_end_is } from "./bible_usfm_line_sentence_end_is.mjs";
import { bible_usfm_line_semicolon_end_is } from "./bible_usfm_line_semicolon_end_is.mjs";
import { or } from "./or.mjs";
export function bible_usfm_line_piece_end_is(usfm_line) {
  arguments_assert(arguments, 1);
  ("$plain usfm_line");
  ("Whether one line of a chapter of usfm finishes a piece of its verse - the thing a letter on a singing's file name counts.");
  ("★ A SEMICOLON ENDS A PIECE AND DOES NOT END A SENTENCE, AND THAT GAP IS WHY THIS IS NOT THE SENTENCE QUESTION. Measured 2026-10-02 against the singings themselves: Psalm 104 verse 24 is printed as three lines, the second ending on a semicolon, and the singer cut it into three - the recording named 24c begins on the third line, four seconds in. Counting sentences gives that verse two pieces and answers nothing at all to a caller asking for 24c, so seven singings of it could not be given a document.");
  ("The semicolon was added rather than every line's end, because the two readings disagree and the recordings settled it. Psalm 95 verse 7 is printed as four lines holding two sentences and no semicolon; counting lines would make its 7b the second line, and the recording named 7b-11 begins Today, if you hear His voice, which is the second sentence. Psalm 145 verse 13 has no semicolon in it either and stays as it was. Those three verses are every verse any singing addresses by letter, so the semicolon is the one change that agrees with all three.");
  ("Both questions are asked of the line with the translators' notes taken off, which is why neither asks it of the line as handed in.");
  let sentence = bible_usfm_line_sentence_end_is(usfm_line);
  let semicolon = bible_usfm_line_semicolon_end_is(usfm_line);
  let ended = or(sentence, semicolon);
  return ended;
}

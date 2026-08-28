import { arguments_assert } from "./arguments_assert.mjs";
export function usfm_markers_removed_cases() {
  arguments_assert(arguments, 0);
  ("A piece of marked-up usfm and the plain words it comes out as, written down rather than worked out.");
  ("What is guarded here is the spacing, and spacing is the one fault in this whole reader that nobody downstream can see. A dropped word is missing and a kept heading is an extra sentence; both are visible. A space in the wrong place inside a contraction reads as a typing slip in the bible rather than as a fault in this repo, and whoever pasted it will fix it by hand and never say so.");
  ("The rule that decides it cannot be argued from the finished string, because a space the translators typed and a space left behind by a mark look identical once the marks are gone. So every case here starts from the marking, and each one names the printing it was copied from - which is also what makes the answers checkable: they are not invented shapes, they are lines that are in the files on this disk.");
  ("The two printings split a word two different ways and both splits are here. One marks the apostrophe apart from the letters on either side of it; the other leaves the apostrophe on the word and marks only what follows. Neither is wrong and neither can be guessed from the other.");
  ("The case that keeps a space is as important as the ones that close a space up. A closing quotation mark is the character english also uses inside a word, so a rule broad enough to fix every contraction eats the space after every closing quote, and the passage then reads as one run-on sentence. That case is written down so that the fixing never widens.");
  let cases = [
    {
      usfm: '\\w David|x-occurrence="1" x-occurrences="2"\\w*’\\w s|x-occurrence="1" x-occurrences="1"\\w* \\w reign|x-occurrence="1"\\w*.',
      text: "David’s reign.",
      why: "the possessive as a bible aligned to the hebrew writes it - the name marked, the apostrophe standing between two marks, and the s marked again. The gap on both sides of the apostrophe is what says it is inside a word rather than at the end of a speech, and closing only one of them left two thousand seven hundred and seventy-eight verses reading David apostrophe space s",
    },
    {
      usfm: '\\w the|strong="G1722"\\w* \\w darkness|strong="G4653"\\w* hasn’\\w t|strong="G3588"\\w* overcome \\w it|strong="G2532"\\w*.',
      text: "the darkness hasn’t overcome it.",
      why: "the same split written the other way, by a bible aligned to the greek: the apostrophe stays on the word and only what follows it is marked. There is no gap in front of the apostrophe to find, so the rule above does not fire and the ending has to be recognised for what it is. Six hundred and forty-one contractions read hasn apostrophe space t until this was asked",
    },
    {
      usfm: '\\wj \\w Come|strong="G1"\\w* \\w to|strong="G2"\\w* me.’\\wj* \\w and|strong="G2532"\\w* he went.',
      text: "Come to me.’ and he went.",
      why: "THE SPACE AFTER A CLOSING QUOTATION MARK STAYS, and this is the case the two above must never grow into. The mark english closes a speech with is the same character it puts inside a word, so a rule that closes every gap after an apostrophe joins the quotation to whatever was said next. Nobody is called t or ve, and that is the whole of why the endings are listed rather than guessed at",
    },
    {
      usfm: '\\w the|strong="G1"\\w* \\w darkness|strong="G4653"\\w*, \\w and|strong="G2532"\\w* \\w the|strong="G1"\\w* \\w light|strong="G5457"\\w*',
      text: "the darkness, and the light",
      why: "a mark falls between a word and its own comma as readily as between two words. The first gap closes up leftwards because a comma belongs to the word in front of it; the rest become one space each because joining two words would make a word nobody wrote",
    },
    {
      usfm: 'He went in (\\w and|strong="G2532"\\w* \\w out|strong="G1"\\w*) \\w Likewise|strong="G2"\\w* , \\w you|strong="G3"\\w* also.',
      text: "He went in (and out) Likewise, you also.",
      why: "an opening bracket closes up rightwards, which is the other direction and needs its own list because punctuation is not symmetrical. The space in front of the comma here is one the publisher typed rather than one a mark left behind, and it goes too - a comma has no side anybody argues about, which is what makes it safe to tidy where a quotation mark is not",
    },
    {
      usfm: '\\w The|strong="G1"\\w*\\w light|strong="G5457"\\w* \\nd LORD\\nd* is here.',
      text: "The light LORD is here.",
      why: "two marks meeting with nothing between them still leave one space, because the marking is what was separating the words. The mark that says a word is the name of God goes the same way as the rest and its word stays: a mark says what the words beside it are, and none of that is anything a reader hears",
    },
  ];
  return cases;
}

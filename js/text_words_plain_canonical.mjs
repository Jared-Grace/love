import { arguments_assert } from "./arguments_assert.mjs";
export function text_words_plain_canonical() {
  arguments_assert(arguments, 0);
  ("Words that are one word written two ways, each bare spelling given against the one spelling everything here compares by.");
  ("★ EVERY ENTRY HAS TO HAVE BEEN SEEN, BECAUSE A GUESSED ONE CAN ONLY EVER WELD TWO WORDS THAT WERE TELLING THEM APART. Folding is not a lenient comparison that errs towards agreement: it deletes a distinction outright, everywhere, forever, and the deletion is silent. So this holds what a reading actually produced against what a text actually says, and nothing that merely looks like it might happen.");
  ("★ THE ONE ENTRY IS A TRANSLITERATION AND NOT A MISHEARING, WHICH IS WHY STRIPPING MARKS AND CASE DOES NOT REACH IT. Alleluia and Hallelujah are two ways of putting the same Hebrew into English letters; no amount of taking off punctuation makes one into the other, so the pair has to be written down or the word is invisible to every comparison. It cost two lines of Psalm 150, and they were not small errors quietly made worse - they were the two largest errors in the song, reported as nothing at all.");
  ("A word a singer leaves out altogether does not belong here and cannot be helped by anything here. Three lines reading only Selah went unplaced in the same survey, and Selah is a direction to the musicians rather than a word to sing; the reading is right that it was never said, and folding a spelling cannot conjure a sound.");
  let canonical = {
    alleluia: "hallelujah",
  };
  return canonical;
}

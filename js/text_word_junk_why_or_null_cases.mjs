import { arguments_assert } from "./arguments_assert.mjs";
export function text_word_junk_why_or_null_cases() {
  arguments_assert(arguments, 0);
  ("Words written the way a marked-up bible leaves them behind, each with the answer about whether English makes words that shape - the broken ones taken letter for letter from the places on this disk where they actually stood, and the sound ones chosen to stand as close to them as scripture gets.");
  ("★ THE BROKEN ONES ARE HERE BECAUSE THE SWEEP FINDS NOTHING ANY MORE, AND A CHECK THAT CANNOT DISAGREE IS NOT A CHECK. Every word the sweep once found has been mended on the way in, so the sweep now reads the whole bible and comes back empty - which is what a clean bible looks like and also what a broken checker looks like. These pin the difference: each of the three shapes it knows is written out here as it really stood, so if the test ever stops firing this goes red rather than the bible quietly stopping being read.");
  ("★ THE SOUND ONES ARE THE HALF THAT COSTS SOMETHING, because a test that says everything is junk passes the broken half perfectly. The hardest are the ones that come close: a verse reference inside a note has a colon with a digit after it and not a letter; a name in small capitals is not a small letter meeting a capital; a hyphenated name is two words and neither holds a doubled letter. Every one of these is real writing off this shelf.");
  let cases = [
    {
      word: "vvv",
      why: "the letter v stands three times running in vvv, and no English word does that",
      described:
        "the three stray letters that stood in Genesis 35, Luke 9 and Acts 4",
    },
    {
      word: "sons:This",
      why: "a : has a letter hard against it in sons:This, so a space was lost and two words arrive as one",
      described: "the colon with nothing after it in Numbers 6:23",
    },
    {
      word: "LORD,which",
      why: "a , has a letter hard against it in LORD,which, so a space was lost and two words arrive as one",
      described: "the comma with nothing after it in Jeremiah 29:19",
    },
    {
      word: "webThen",
      why: "a capital T stands hard against a small letter in webThen, so a space was lost and two words arrive as one",
      described:
        "a note closed hard against the word after it, which is the shape Judges 16:14 left once the note was taken off",
    },
    {
      word: "everlasting",
      why: null,
      described: "an ordinary word goes through",
    },
    {
      word: "16:1",
      why: null,
      described:
        "a verse reference inside a note has a colon, and a digit after it rather than a letter",
    },
    {
      word: "LORD,",
      why: null,
      described:
        "a comma at the end of a word, which is where a comma belongs, is not a weld",
    },
    {
      word: "Ben-oni",
      why: null,
      described:
        "a hyphenated name keeps its small letter after the dash and is still not a weld",
    },
    {
      word: "aaa",
      why: "the letter a stands three times running in aaa, and no English word does that",
      described: "the same shape in another letter, so nothing is spelled in",
    },
    {
      word: "Shigionoth:",
      why: null,
      described:
        "a colon at the end of a word, opening what follows, is where a colon belongs",
    },
  ];
  return cases;
}

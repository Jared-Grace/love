import { arguments_assert } from "./arguments_assert.mjs";
export function bytes_text_try_cases() {
  "Runs of bytes with the text they spell written down - or nothing written down, where they spell none.";
  "The bytes are written as the plain numbers they are rather than as a text, because a text written here would already have been read by somebody, and what is being checked is the reading.";
  "The case that matters is the stand-in character spelled properly. That character is what the reader leaves behind wherever a byte would not read, so looking for it afterwards was the obvious way to notice a picture - and it is wrong, because it is also an ordinary character that a text file may hold on purpose. A file that has to name it in order to look for it then calls itself a picture and drops out of every search without a word. That happened here, to the file that did the looking.";
  "There is no case for the byte that stands for nothing at all, though it does read as text and that is worth knowing. Writing one would mean putting that byte in this file, and it is the one byte git looks for to decide a file is a picture, so the corpus would have made every diff of itself unreadable in order to record a harmless limit.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      numbers: [104, 105],
      text: "hi",
      why: "the ordinary case: bytes that spell letters give back the letters they spell",
    },
    {
      numbers: [215, 144, 215, 145],
      text: "אב",
      why: "a letter may take more than one byte to spell, and most of the world's letters do. This repo holds whole books written that way, so a reading that took only the one-byte letters would drop the Bible out of every search",
    },
    {
      numbers: [239, 191, 189],
      text: "�",
      why: "the stand-in character, spelled properly and on purpose, is text and must come back as text. Looking for it afterwards is what the first version did, and it is why the file that named it could not be found by the search it was part of",
    },
    {
      numbers: [255],
      text: null,
      why: "a byte that spells no letter at all, and cannot begin one either, means this was never text",
    },
    {
      numbers: [226, 130],
      text: null,
      why: "a letter begun and never finished is not text either. This is what a picture looks like from close up: bytes that start something the next byte does not continue",
    },
    {
      numbers: [],
      text: "",
      why: "an empty file is text that says nothing, not a file that was never text. The two must not read alike, because one holds no lines and the other is skipped without a word",
    },
  ];
  return cases;
}

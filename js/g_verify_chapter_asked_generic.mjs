import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_known_is } from "./ebible_chapter_code_known_is.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { null_is } from "./null_is.mjs";
export function g_verify_chapter_asked_generic(asked) {
  "What a word out of a link amounts to, said as {asked, usable} - the word itself when the link actually carried one, and whether it names a chapter this bible could have.";
  "It receives the word rather than fetching it, and that is the whole of what it is for. Reading an address needs a browser, and a browser is the one thing a gate cannot stand up, so the reading and the judging asked in one place could only ever be argued about. Split, the judging is a question anybody can ask from a corpus, and the reading above it is three lines with nothing left in them to be wrong.";
  "Nothing and an empty word are answered the same way, because a link that says nothing and a link that says nothing in particular have asked for exactly as much. Both come back as nothing rather than as themselves, so the one caller that quotes the word back is spared having to tell an empty quotation from a missing one.";
  "The word is handed back whole rather than judged away. A reader who typed the link is looking for their own typing, and being told the address named something unusable without being shown what teaches them nothing.";
  arguments_assert(arguments, 1);
  let missing = null_is(asked);
  if (missing) {
    let r = {
      asked: null,
      usable: false,
    };
    return r;
  }
  let blank = text_empty_is(asked);
  if (blank) {
    let r2 = {
      asked: null,
      usable: false,
    };
    return r2;
  }
  let usable = ebible_chapter_code_known_is(asked);
  let r3 = {
    asked,
    usable,
  };
  return r3;
}

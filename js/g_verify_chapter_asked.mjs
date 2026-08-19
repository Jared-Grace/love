import { arguments_assert } from "./arguments_assert.mjs";
import { g_verify_chapter_query_key } from "./g_verify_chapter_query_key.mjs";
import { html_query_property_get } from "./html_query_property_get.mjs";
import { ebible_chapter_code_known_is } from "./ebible_chapter_code_known_is.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { null_is } from "./null_is.mjs";
export function g_verify_chapter_asked() {
  "The chapter this tab's link asks for, said as {asked, usable} - the word the address actually carries, and whether it names a chapter this bible could have.";
  "One reading and two answers, because the two things anybody wants to know about a word out of a link are opposites and each has a different caller. What the page should OPEN needs the word only when it is usable. What the reader should be TOLD needs the word only when it is not. Read twice, the two would drift apart, and a page that opened one chapter while explaining a different one is worse than either mistake alone.";
  "The word is handed back whole rather than judged away, because the complaint has to be able to quote it. A reader who typed the link is looking for their own typing, and being told the address named something unusable without being shown what teaches them nothing.";
  "Usable is settled without fetching, which is the only kind of answer that helps here. The check this leans on asks whether the three letters are a book and whether the number is written the way this bible writes one, and it deliberately does not ask how far a book's chapters go - that would need the bible in hand, which is the very thing the link has not earned yet.";
  "An address carrying nothing is not a mistake. No word at all, and an empty word, both mean the link simply did not ask, so the page falls back the way it always did and there is nothing to tell anybody about.";
  arguments_assert(arguments, 0);
  let key = g_verify_chapter_query_key();
  let asked = html_query_property_get(key);
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

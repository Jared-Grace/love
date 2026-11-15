import { reply_message_characters } from "./reply_message_characters.mjs";
import { not_equal } from "./not_equal.mjs";
import { reply_character_kept } from "./reply_character_kept.mjs";
import { equal } from "./equal.mjs";
export function reply_message_words_placed(message) {
  "The words of a message as the reply rules read it, each with where it starts and ends among the characters the rules read, and whether anything but spaces stood between it and the word before.";
  "★ THE PLACES ARE COUNTED IN THE RULES' OWN CHARACTERS, NOT THE MESSAGE'S. The rules drop spaces, punctuation and emoji before reading, so a place in the message is not a place a rule can stand at. Walking the same characters with the same test the rules use is what makes the two line up exactly.";
  "A cut is any dropped character that is not a space or a tab - a comma, a full stop, an emoji, a new line. Two words with a cut between them were never written as a pair.";
  "A word is in a link when the run of characters it sits in, from one space to the next, starts with http:// or https://. A link is an address, not words of any language.";
  let characters = reply_message_characters(message);
  let words = [];
  let index = 0;
  let current = null;
  let gap = "";
  let chunk = "";
  let chunk_words = [];
  function chunk_close() {
    let link = /^https?:\/\//.test(chunk);
    for (let placed of chunk_words) {
      placed.link = link;
    }
    chunk = "";
    chunk_words = [];
  }
  for (let character of characters) {
    if (/\s/.test(character)) {
      if (not_equal(current, null)) {
        words.push(current);
        current = null;
      }
      chunk_close();
    } else {
      chunk += character;
    }
    let kept = reply_character_kept(character);
    if (kept) {
      if (equal(current, null)) {
        let cut_before = /[^ \t]/.test(gap);
        current = {
          word: "",
          start: index,
          end: index,
          cut_before,
          link: false,
        };
        chunk_words.push(current);
        gap = "";
      }
      current.word += character;
      index += 1;
      current.end = index;
    } else {
      if (not_equal(current, null)) {
        words.push(current);
        current = null;
      }
      gap += character;
    }
  }
  if (not_equal(current, null)) {
    words.push(current);
  }
  chunk_close();
  return words;
}

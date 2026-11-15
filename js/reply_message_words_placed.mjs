import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { reply_message_characters } from "./reply_message_characters.mjs";
import { reply_character_kept } from "./reply_character_kept.mjs";
export function reply_message_words_placed(message) {
  "The words of a message as the reply rules read it, each with where it starts and ends among the characters the rules read, and whether anything but spaces stood between it and the word before.";
  "★ THE PLACES ARE COUNTED IN THE RULES' OWN CHARACTERS, NOT THE MESSAGE'S. The rules drop spaces, punctuation and emoji before reading, so a place in the message is not a place a rule can stand at. Walking the same characters with the same test the rules use is what makes the two line up exactly.";
  "A cut is any dropped character that is not a space or a tab - a comma, a full stop, an emoji, a new line. Two words with a cut between them were never written as a pair.";
  let characters = reply_message_characters(message);
  let words = [];
  let index = 0;
  let current = null;
  let gap = "";
  for (let character of characters) {
    let kept = reply_character_kept(character);
    if (kept) {
      if (equal(current, null)) {
        let cut_before = /[^ \t]/.test(gap);
        current = {
          word: "",
          start: index,
          end: index,
          cut_before,
        };
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
  return words;
}

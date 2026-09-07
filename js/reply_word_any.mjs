import { list_alphabet_lower } from "./list_alphabet_lower.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
export function reply_word_any() {
  "A run of letters of any length and any spelling, standing in for a word the rules were never told.";
  "★ THIS IS WHAT A LIST OF SOMEBODY'S NAME OR SOMEBODY'S TOWN IS REPLACED BY. A rule that only recognises a place once that place has been typed into this repo can only ever answer the people already written down here, and every name added to make it answer one more person is that person's name published in a public repository. A run of letters answers everyone and names nobody.";
  "It does no gatekeeping and is not meant to. What decides whether a message is really somebody saying where they are from is the country beside it, which is a closed list; this only says that SOMETHING stood where a town would stand. Used without a closed list beside it, it matches every message ever sent.";
  let letters = list_alphabet_lower();
  let one_letter = reply_choice(letters);
  let word = reply_once_or_more(one_letter);
  return word;
}

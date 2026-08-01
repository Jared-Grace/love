import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_scripture_reference_god_says(reference) {
  "the citation shown above a passage the player may CHOOSE to say — 'God says in John 3:16' rather than a bare 'John 3:16'. the player is picking words to speak to somebody, so the line names WHO is speaking them; a bare book-chapter-verse reads as a filing address, and a player who has never opened a Bible has no reason to know that the address is the point. it also says the one thing the passage buttons are for: the words are God's, not the player's own — which is why the verse is gold and this line is not.";
  let text = text_combine_multiple(["God says in ", reference]);
  return text;
}

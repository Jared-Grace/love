import { equal } from "./equal.mjs";
export function bible_glyph_compare_tokens(text) {
  "$plain text";
  "One drawn line broken into the smallest pieces two writings of it can be set beside each other by, with a picture's name kept whole.";
  "A PICTURE'S NAME IS ONE PIECE AND STRIPPING IT TO LETTERS WOULD HIDE IT AMONG THE WORDS. What the repo already has for this takes a word down to its bare letters, which turns $son into son and makes a mark indistinguishable from the ordinary word beside it. The dollar and the underscore are the whole of what says this is a picture rather than a word, so they are the two characters kept.";
  "THE PLUS IN A COMPOUND MARK IS READ AS A SPACE, so a word wearing two pictures is met as the two pictures it wears. Nothing else would let the pieces line up against a reading that seats one picture per word.";
  "PUNCTUATION AND CAPITALS COME OFF BECAUSE THEY ARE NOT A DISAGREEMENT ABOUT THE WORDS. A comma the author added and a full stop ending a sentence differ between any two writings of one passage without the passage differing, and a curly apostrophe and a straight one are the same apostrophe.";
  let lowered = text.toLowerCase();
  let straight = lowered.replace(/[‘’]/g, "'");
  let spaced = straight.replace(/[^a-z0-9$_' ]/g, " ");
  let pieces = spaced.split(/\s+/);
  let tokens = [];
  for (let piece of pieces) {
    let empty = equal(piece, "") || equal(piece, "'");
    if (empty) {
      continue;
    }
    tokens.push(piece);
  }
  return tokens;
}

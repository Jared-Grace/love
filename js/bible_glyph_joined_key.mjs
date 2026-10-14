import { arguments_assert } from "./arguments_assert.mjs";
export function bible_glyph_joined_key(name) {
  arguments_assert(arguments, 1);
  ("$plain name");
  ("the name is one glyph's name. It is text to key a table by and nothing that runs.");
  ("The key a meanings table keeps a picture's JOINED meaning under - what it says when it is joined to another word inside one group rather than standing as a word of its own.");
  ("A SPACE CANNOT OCCUR IN A GLYPH NAME OR IN A SEQUENCE, so a key holding one can never be mistaken for a sequence somebody seated.");
  let r = "joined " + name;
  return r;
}

import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
export function text_binary_is(text) {
  "Whether this text came from a file that was never text at all - a picture, a sound, a compiled thing";
  "Reading a file as text asks for every byte in it to spell a letter, and a file that was never text has bytes that spell none. Rather than fail, the reader hands back one stand-in character for each byte it could not read, so a single one of those anywhere in the text is the file saying it is not text. That is a question asked of what was actually read, not a guess from the name on the end of the file - a list of endings that count as text goes stale the moment somebody uses a new one, and it is wrong in both directions at once, because a file can be named .txt and hold anything.";
  "Searching cares because a picture read as text is a few enormous lines of nonsense, and nonsense holds every short word by accident. One match inside it would bury the real answers.";
  arguments_assert(arguments, 1);
  let stand_in = "�";
  let unreadable = text_includes(text, stand_in);
  return unreadable;
}

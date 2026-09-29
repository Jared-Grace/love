import { arguments_assert } from "./arguments_assert.mjs";
import { text_words_start_removed } from "./text_words_start_removed.mjs";
export function text_words_start_removed_unless_binary(content, words) {
  "$plain content";
  arguments_assert(arguments, 2);
  ("Takes the named words out of a file's contents unless the file reads as binary, in which case it is handed back untouched - the same exception the rewriting tool makes, so a check built on this agrees with what the rewrite would have done.");
  ("The rewriting tool calls a file binary when a zero byte appears in its first 8192 bytes, and leaves it alone. Measured: three pictures at the present hold the letters of a purged word by chance, and the rewrite never touched them - so a check without the same exception would refuse every commit that adds a picture.");
  let head = content.slice(0, 8192);
  let binary = head.includes("\0");
  if (binary) {
    return content;
  }
  let result = text_words_start_removed(content, words);
  return result;
}

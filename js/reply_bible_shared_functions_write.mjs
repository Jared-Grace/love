import { equal } from "./equal.mjs";
import { reply_bible_elements_code } from "./reply_bible_elements_code.mjs";
import { reply_bible_generated_write } from "./reply_bible_generated_write.mjs";
import { reply_bible_tokens_codes } from "./reply_bible_tokens_codes.mjs";
export async function reply_bible_shared_functions_write(shared, sequences) {
  "Writes every choice and every phrase the verses share. The smaller ones go first, because a function has to exist before the pass that adds imports can find it for the one that calls it. Returns the names.";
  let written = [];
  for (let key of [...shared.keys].reverse()) {
    let elements = key.split(" ");
    let code = reply_bible_elements_code(elements, shared);
    let f_name = await reply_bible_generated_write(shared.names[key], code);
    written.push(f_name);
  }
  for (let sequence of [...sequences].reverse()) {
    let codes = reply_bible_tokens_codes(sequence.tokens, shared);
    let joined = codes.join(", ");
    let code = equal(codes.length, 1)
      ? codes[0]
      : `reply_sequence([${joined}])`;
    let f_name2 = await reply_bible_generated_write(sequence.name, code);
    written.push(f_name2);
  }
  return written;
}

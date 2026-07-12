import { ebible_verse_new_text } from "./ebible_verse_new_text.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function ebible_verse_new(tokens, verse_number) {
  let joined = list_join_space(tokens);
  let v = ebible_verse_new_text(joined, verse_number);
  return v;
}

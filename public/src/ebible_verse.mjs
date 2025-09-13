import { list_join_space } from "./list_join_space.mjs";
export function ebible_verse(tokens, verse_number) {
  let joined = list_join_space(tokens);
  const v = {
    verse_number,
    text: joined,
  };
  return v;
}

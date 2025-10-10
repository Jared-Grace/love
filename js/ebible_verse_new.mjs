import { marker } from "../../../love/public/src/marker.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
export function ebible_verse_new(tokens, verse_number) {
  marker("1");
  let joined = list_join_space(tokens);
  const v = {
    verse_number,
    text: joined,
  };
  return v;
}

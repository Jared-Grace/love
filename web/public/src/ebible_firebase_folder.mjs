import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function ebible_firebase_folder(bible_folder) {
  let joined2 = list_join_slash_forward(["bible", bible_folder]);
  return joined2;
}

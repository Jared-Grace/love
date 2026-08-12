import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function ebible_firebase_folder_path(bible_folder) {
  "Where one bible's files live in storage.";
  "Named on its own because a file under it is not the only thing anybody wants to say about it - asking storage what is there at all starts from the folder and never names a file.";
  let joined = list_join_slash_forward(["bible", bible_folder]);
  return joined;
}

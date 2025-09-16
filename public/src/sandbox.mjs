import { ebible_references_parse } from "./ebible_references_parse.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { marker } from "./marker.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function sandbox() {
  marker("1");
  let v2 = ebible_folder_urdu();
  let v = ebible_folder_english();
  let file_path = "C:\\Users\\chris\\Documents\\god_created_man_why.txt";
  let bible_folders = [v2, v];
  let list = await ebible_references_parse(bible_folders, file_path);
  return list;
}

import { ebible_index } from "./ebible_index.mjs";
export async function ebible_index_upload(bible_folder) {
  let index = await ebible_index(bible_folder);
  return index;
}

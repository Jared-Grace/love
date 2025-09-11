import { ebible_version_verses } from "./ebible_version_verses.mjs";
export async function sandbox() {
  await ebible_version_verses(bible_folder);
}

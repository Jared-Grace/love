import { ebible_languages_chapters } from "../../../love/public/src/ebible_languages_chapters.mjs";
export async function sandbox() {
  let all = await ebible_languages_chapters();
  return all;
}

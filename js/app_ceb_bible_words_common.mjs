import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_common } from "./bible_words_common.mjs";
export async function app_ceb_bible_words_common() {
  arguments_assert(arguments, 0);
  ("Every different word the Cebuano translation this app reads writes somewhere in small letters - its vocabulary with the names taken out.");
  ("Which bible that is has only ever had one answer here, because there is one Cebuano translation on this disk, and three readings each answered it for themselves on the line before they asked for the words. Saying it once leaves each of them about the words rather than about where the language lives.");
  let bible_folder = ebible_folder_cebuano();
  let common = await bible_words_common(bible_folder);
  return common;
}

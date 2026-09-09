import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { ebible_verses_all } from "./ebible_verses_all.mjs";
export async function app_ceb_bible_verses_all() {
  arguments_assert(arguments, 0);
  ("Every verse the Cebuano translation this app reads is written with, in the order it stands.");
  ("Four readings measure something about how this translation spells its words - what a hyphen does inside one, what an apostrophe does, and what each of those costs a search that cuts at the mark - and every one of them opened by naming the Cebuano folder and then asking that folder for all its verses. Three of them want the verses and nothing else, and those call this. The fourth keeps the folder name as well, because it asks the folder which word reader belongs to it, and a call hands back one thing.");
  let bible_folder = ebible_folder_cebuano();
  let verses = await ebible_verses_all(bible_folder);
  return verses;
}

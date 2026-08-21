import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_references_all } from "./app_music_references_all.mjs";
import { ebible_folder_references_texts } from "./ebible_folder_references_texts.mjs";
export async function app_music_verses_build(bible_folder) {
  "$plain bible_folder";
  "Works out the words behind every passage any song on this page names, as each reference against its words.";
  "IT IS THE SLOW WAY, AND IT IS WHY THERE IS A FILE. About a hundred references across some sixty chapters, each chapter a file of its own: done here it is one long wait, done once and put in storage it is one small download for every reader afterwards.";
  "It hands back the words already found rather than the references and a way to find them, because the page it feeds does no looking - it writes each passage into a place already drawn on the screen.";
  arguments_assert(arguments, 1);
  let references = app_music_references_all();
  let texts = await ebible_folder_references_texts(bible_folder, references);
  return texts;
}

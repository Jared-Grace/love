import { property_list_map_property } from "./property_list_map_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_references_all } from "./app_music_references_all.mjs";
import { app_music_reference_version } from "./app_music_reference_version.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { ebible_folder_references_texts } from "./ebible_folder_references_texts.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export async function app_music_verses_build() {
  "Works out the words behind every passage any song on this page names, as each reference against its words.";
  "IT IS THE SLOW WAY, AND IT IS WHY THERE IS A FILE. About a hundred references across some sixty chapters, each chapter a file of its own: done here it is one long wait, done once and put in storage it is one small download for every reader afterwards.";
  "It hands back the words already found rather than the references and a way to find them, because the page it feeds does no looking - it writes each passage into a place already drawn on the screen.";
  "EACH PASSAGE IS FETCHED OUT OF THE TRANSLATION IT IS QUOTED FROM, which is why the passages are sorted into their bibles before any of them is asked for. Almost all of them are quoted from the same one, and asking a bible for its passages together rather than one at a time is the whole reason this is one wait instead of a hundred - so the grouping is not tidiness, it is what keeps the saving when a second translation joins.";
  "It names no bible of its own any more. It used to be handed one and quote everything out of it, and a passage that wanted another translation had nowhere to say so. Which bible a passage comes from is now the passage's own answer, asked next door.";
  arguments_assert(arguments, 0);
  let references = app_music_references_all();
  function quoted_from(reference) {
    let version = app_music_reference_version(reference);
    let bible_folder = property_get(version, "bible_folder");
    let pair = {
      reference: reference,
      bible_folder: bible_folder,
    };
    return pair;
  }
  let pairs = list_map(references, quoted_from);
  let groups = list_group_by_property(pairs, "bible_folder");
  async function group_texts(group) {
    let bible_folder = property_get(group, "key");
    let named = property_list_map_property(group, "items", "reference");
    let found = await ebible_folder_references_texts(bible_folder, named);
    return found;
  }
  let per_bible = await list_map_limited_async(groups, group_texts, 4);
  let texts = {};
  for (let found of per_bible) {
    object_merge_set(texts, found);
  }
  return texts;
}

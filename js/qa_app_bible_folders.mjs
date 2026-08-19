import { text_combine } from "./text_combine.mjs";
import { list_includes } from "./list_includes.mjs";
import { function_run } from "./function_run.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_language_bible_folders } from "./ebible_language_bible_folders.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function qa_app_bible_folders(reach, f_name) {
  "$plain reach";
  "$plain f_name";
  "Which translations of the Bible one app can put in front of a reader, worked out from what its bundle ships rather than from a list somebody keeps.";
  "A gate complains about a translation by naming its folder, and a folder no app ships is a complaint that app cannot be held to. Three gates named two hundred and thirty-eight folders between them at one commit and held every app in the repo out of a deployment - including one that reads exactly two.";
  "An app that says which languages it offers is taken at its word, because saying so IS the app deciding what it will show. One that says nothing offers whatever there is, which is what every bible reader here has always done, so it is answered with every folder in the whole list.";
  "Whatever else it names a folder for is added on top of that. A reader learning english reads english as well as the language it is explained in, and only one of those two is a language the app OFFERS - so the offering on its own would leave out the very translation the app exists to show.";
  "Wrong in the direction of too many rather than too few, deliberately. A folder counted in that the app never shows costs a deploy that could have gone ahead; a folder left out lets a broken translation ship.";
  "An app that ships no bible at all names none of this and is answered with nothing, so a translation gate is never about it.";
  let suffix = "_languages_offered";
  let offered_name = text_combine(f_name, suffix);
  let declared = list_includes(reach, offered_name);
  let languages = null;
  if (declared) {
    async function offered_run() {
      let answer = await function_run(offered_name, []);
      return answer;
    }
    languages = await catch_null_async(offered_run);
  }
  let unnamed = null_is(languages);
  if (unnamed) {
    let all_named = list_includes(reach, ebible_languages.name);
    if (all_named) {
      languages = ebible_languages();
    }
  }
  let still_unnamed = null_is(languages);
  if (still_unnamed) {
    languages = [];
  }
  let folders = [];
  for (let language of languages) {
    let each = ebible_language_bible_folders(language);
    list_add_multiple(folders, each);
  }
  let prefix = "ebible_folder_";
  for (let name of reach) {
    let names_folder = text_starts_with(name, prefix);
    if (not(names_folder)) {
      continue;
    }
    async function folder_run() {
      let answer = await function_run(name, []);
      return answer;
    }
    let folder = await catch_null_async(folder_run);
    if (null_is(folder)) {
      continue;
    }
    list_add(folders, folder);
  }
  let unique = list_unique(folders);
  return unique;
}

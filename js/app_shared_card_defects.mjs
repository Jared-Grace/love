import { app_shared_card_image } from "./app_shared_card_image.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { apps_names } from "./apps_names.mjs";
import { each_async } from "./each_async.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export async function app_shared_card_defects() {
  "Every app whose link card is set up in a way that cannot work, said one app at a time.";
  "A card is built from a sentence and, if there is one, a picture. Neither is required. What is checked is that what an app HAS asked for can actually be delivered, because a card that half arrives looks broken where a plain address looks ordinary.";
  "A picture named with no file behind it is the worse of the two, since the program building the card asks for the file, is refused, and shows a torn frame to everybody the link was ever sent to.";
  "A picture named with no sentence beside it is dead rather than broken: no card tags are written at all without a sentence, so the picture is never asked for and the work of making it bought nothing.";
  "Answers a list rather than throwing, so that the same reading can be taken by anything wanting to know without also stopping.";
  let names = await apps_names();
  let unique = list_unique(names);
  let defects = [];
  async function each_name(app_name) {
    let f_name = app_shared_card_image(app_name);
    if (text_empty_is(f_name)) {
      return;
    }
    let description = app_shared_description(app_name);
    if (text_empty_is(description)) {
      list_add(defects, {
        app_name,
        f_name,
        hint: "this app names a card picture and has no sentence, so no card tags are written at all and the picture is never asked for - write the sentence, or take the picture name away",
      });
    }
    let f_path = folder_public_join(f_name);
    let absent = await file_exists_not(f_path);
    if (absent) {
      list_add(defects, {
        app_name,
        f_path,
        hint: "this app names a card picture and the file is not there, so every place the link is pasted shows a torn frame - make the picture, or take the name away",
      });
    }
  }
  await each_async(unique, each_name);
  return defects;
}

import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { ebible_version_books } from "../../../love/public/src/ebible_version_books.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { bible_verses_uplifting } from "../../../love/public/src/bible_verses_uplifting.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { app_reply_choices } from "../../../love/public/src/app_reply_choices.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
export async function app_reply_initialize(context) {
  let root = object_property_get(context, "root");
  html_mobile_default(context);
  firebase_name_jg();
  let choices = app_reply_choices();
  let languages = ebible_languages();
  let encouragement = bible_verses_uplifting();
  let en = ebible_folder_english();
  let original = bible_interlinear_verses_upload_folder();
  let books = await ebible_version_books(en);
  let r = {
    encouragement,
    en,
    original,
    root,
    languages,
    choices,
    books,
  };
  return r;
}

import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { bible_interlinear_verses_upload_folder } from "./bible_interlinear_verses_upload_folder.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { bible_verses_uplifting } from "./bible_verses_uplifting.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { app_reply_choices } from "./app_reply_choices.mjs";
export async function app_reply_initialize(context) {
  let root = html_mobile_default(context);
  let choices = app_reply_choices();
  let languages = ebible_languages();
  let encouragement = bible_verses_uplifting();
  let en = ebible_folder_english();
  let original = bible_interlinear_verses_upload_folder();
  let books = await ebible_version_books_browser(en);
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

import { app_reply_button } from "../../../love/public/src/app_reply_button.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { html_pointerdown } from "../../../love/public/src/html_pointerdown.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { app_reply_languages_default } from "../../../love/public/src/app_reply_languages_default.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_reply_initialize } from "../../../love/public/src/app_reply_initialize.mjs";
export async function reply_2(context) {
  let r = await app_reply_initialize(context);
  let books = object_property_get(r, "books");
  let choices = object_property_get(r, "choices");
  let languages = object_property_get(r, "languages");
  let root = object_property_get(r, "root");
  let original = object_property_get(r, "original");
  let en = object_property_get(r, "en");
  let encouragement = object_property_get(r, "encouragement");
  let languages_chosen = [];
  let p = html_p_text(
    root,
    "1. Choose the language or languages you want the Bible verses to be translated into",
  );
  let ds = app_reply_languages_default();
  function lambda(language) {
    let component = app_reply_button(languages_chosen, language, root, name);
    let name = object_property_get(language, "name");
    let language_code = object_property_get(language, "language_code");
    let includes = list_includes(ds, language_code);
    if (includes) {
      html_pointerdown(component);
    }
  }
  each(languages, lambda);
  html_p_text(root, "2. How many Bible passages do you want?");
  let choices_verse_count = [1];
  function lambda4(item) {
    let c = item * 2;
    list_add(choices_verse_count, c);
  }
  each_range_from(1, 6, lambda4);
  list_add(choices_verse_count, 20);
  let verse_count_chosen = [];
  function lambda2(c) {
    let component = app_reply_button(verse_count_chosen, c, root, c);
  }
  each(choices_verse_count, lambda2);
}

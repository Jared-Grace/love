import { each_range_from } from "../../../love/public/src/each_range_from.mjs";
import { html_style_background_color_set_or_remove } from "../../../love/public/src/html_style_background_color_set_or_remove.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
import { html_pointerdown } from "../../../love/public/src/html_pointerdown.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { app_reply_languages_default } from "../../../love/public/src/app_reply_languages_default.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
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
    let component = null;
    let name = object_property_get(language, "name");
    function lambda3() {
      list_toggle(languages_chosen, language);
      let chosen = list_includes(languages_chosen, language);
      html_style_background_color_set_or_remove(
        chosen,
        component,
        "lightgreen",
      );
    }
    component = html_button(root, name, lambda3);
    let language_code = object_property_get(language, "language_code");
    let includes = list_includes(ds, language_code);
    if (includes) {
      html_pointerdown(component);
    }
  }
  each(languages, lambda);
  html_p_text(root, "2. How many Bible passages do you want?");
  function lambda4(item) {
    let v = item * 2;
  }
  each_range_from(1, 6, lambda4);
}

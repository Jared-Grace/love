import { log } from "../../../love/public/src/log.mjs";
import { html_click } from "../../../love/public/src/html_click.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { app_reply_languages_default } from "../../../love/public/src/app_reply_languages_default.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
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
    let name = object_property_get(language, "name");
    function lambda3() {
      list_add(languages_chosen, language);
      log({
        name,
      });
    }
    let component = html_button(root, name, lambda3);
    let language_code = object_property_get(language, "language_code");
    let includes = list_includes(ds, language_code);
    log({});
    if (includes) {
      html_click(component);
    }
  }
  each(languages, lambda);
  function lambda2(d) {}
  each(ds, lambda2);
}

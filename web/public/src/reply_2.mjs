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
  let p = html_p_text(root2, text);
  function lambda(language) {
    let name = object_property_get(language, "name");
    function lambda3() {}
    let component = html_button(root, name, lambda3);
  }
  each(languages, lambda);
}

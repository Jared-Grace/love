import { app_shared_card_image } from "./app_shared_card_image.mjs";
import { firebase_project_url_jg } from "./firebase_project_url_jg.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function app_shared_card_image_url(app_name) {
  "$plain app_name";
  "The full address of the picture on an app's link card.";
  "It has to be the whole address rather than the short one the page itself would use, because the program reading it is somewhere else entirely and has only the tag to go on.";
  let f_name = app_shared_card_image(app_name);
  if (text_empty_is(f_name)) {
    let none = text_empty();
    return none;
  }
  let prefix = firebase_project_url_jg();
  let r = text_combine_multiple([prefix, "/", f_name]);
  return r;
}

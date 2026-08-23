import { app_shared_card_image } from "./app_shared_card_image.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { web_assets_app_img_url } from "./web_assets_app_img_url.mjs";
export function app_shared_card_image_url(app_name) {
  "$plain app_name";
  "The full address of the picture on an app's link card.";
  "It has to be the whole address rather than the short one the page itself would use, because the program reading it is somewhere else entirely and has only the tag to go on.";
  let f_name = app_shared_card_image(app_name);
  if (text_empty_is(f_name)) {
    let none = text_empty();
    return none;
  }
  let r = web_assets_app_img_url(app_name, f_name);
  return r;
}

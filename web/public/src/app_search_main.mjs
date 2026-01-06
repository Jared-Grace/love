import { app_search_home } from "../../../love/public/src/app_search_home.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
export async function app_search_main(context) {
  let root = html_mobile_default(context);
  html_clear(root);
  firebase_name_jg();
  let languages_chosen = [];
  object_property_set_exists_not(context, "languages_chosen", languages_chosen);
  app_search_home(languages_chosen, root, context);
}

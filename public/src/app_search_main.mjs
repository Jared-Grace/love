import { marker } from "../../../love/public/src/marker.mjs";
import { app_search_home } from "../../../love/public/src/app_search_home.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
export async function app_search_main(context) {
  marker("1");
  html_mobile_default(context);
  firebase_name_jg();
  let languages_chosen = [];
  object_property_set_exists_not(context, "languages_chosen", languages_chosen);
  app_search_home(context);
}

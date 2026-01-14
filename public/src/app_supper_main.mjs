import { each } from "../../../love/public/src/each.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_supper_main(context) {
  marker("1");
  firebase_name_jg();
  let root = html_clear_context(context);
  let list = await app_supper_verses_get();
  function lambda2(item) {
    html_p_text(root, item);
  }
  each(list, lambda2);
}

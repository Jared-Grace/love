import { app_code_screens } from "../../../love/public/src/app_code_screens.mjs";
import { app_shared_initialize_refresh } from "../../../love/public/src/app_shared_initialize_refresh.mjs";
import { app_code } from "../../../love/public/src/app_code.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
export async function app_code_main(context) {
  let app_fn = app_code;
  let screens = app_code_screens();
  await app_shared_initialize_refresh(context, app_fn, screens);
}

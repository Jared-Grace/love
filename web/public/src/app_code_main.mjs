import { app_shared_initialize_refresh } from "../../../love/public/src/app_shared_initialize_refresh.mjs";
import { app_code } from "../../../love/public/src/app_code.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
export async function app_code_main(context) {
  let app_fn = app_code;
  await app_shared_initialize_refresh(context, app_fn, screens);
  let root = property_get(context, "root");
  let split = digits();
  function lambda2() {}
  let b = app_replace_button(root, "Show me another example", lambda2);
  return;
  html_p_text_multiple(root, [
    "In computer programming",
    "There are symbols",
    "All 10 of these numbers are different symbols: ",
  ]);
  html_p_text_multiple(root, [
    "In English:",
    "There are letters",
    "Letters are inside words",
    "Words are inside sentences",
    "Compture programs have a similar structure",
    "In a computer program, there are symbols",
    "Symbols are inside ",
  ]);
}

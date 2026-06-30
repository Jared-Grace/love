import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
export function app_code_main(context) {
  let root = property_get(context, "root");
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

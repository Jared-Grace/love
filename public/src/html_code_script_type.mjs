import { text_between_equal } from "../../../love/public/src/text_between_equal.mjs";
import { html_code_script_attributes } from "../../../love/public/src/html_code_script_attributes.mjs";
export function html_code_script_type(script_type, middle) {
  const attributes = {
    type: script_type,
  };
  let combined2 = text_between_equal(key, value);
  let c = html_code_script_attributes(attributes, middle);
  return c;
}

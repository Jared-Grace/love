import { html_code_script_attributes } from "../../../love/public/src/html_code_script_attributes.mjs";
export function html_code_script_type(script_type, middle) {
  const attributes = ` type="${script_type}"`;
  let c = html_code_script_attributes(attributes, middle);
  return c;
}

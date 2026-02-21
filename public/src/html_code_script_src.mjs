import { html_code_script_attributes } from "../../../love/public/src/html_code_script_attributes.mjs";
export function html_code_script_src(src) {
  let c = html_code_script_attributes(
    {
      src,
    },
    "",
  );
  return c;
}

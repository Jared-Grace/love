import { function_dependencies_externals_to_urls } from "../../../love/public/src/function_dependencies_externals_to_urls.mjs";
import { html_code_script_type } from "../../../love/public/src/html_code_script_type.mjs";
import { json_format_to } from "./json_format_to.mjs";
export function html_code_script_importmap(externals) {
  let imports = function_dependencies_externals_to_urls(externals);
  let j = json_format_to({
    imports,
  });
  const script_type = "importmap";
  let importmap = html_code_script_type(script_type, j);
  return importmap;
}

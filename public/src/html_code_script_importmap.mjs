import { function_dependencies_externals_to_urls } from "../../../love/public/src/function_dependencies_externals_to_urls.mjs";
import { html_code_script_module_generic } from "../../../love/public/src/html_code_script_module_generic.mjs";
import { json_format_to_truncated } from "../../../love/public/src/json_format_to_truncated.mjs";
export function html_code_script_importmap(externals) {
  let imports = function_dependencies_externals_to_urls(externals);
  let j = json_format_to_truncated({
    imports,
  });
  const script_type = "importmap";
  let importmap = html_code_script_module_generic(script_type, j);
  return importmap;
}

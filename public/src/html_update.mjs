import { function_name_extension } from "./function_name_extension.mjs";
import { file_open } from "./file_open.mjs";
import { html_overwrite } from "./html_overwrite.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
export async function html_update(name) {
  let file_path = html_name_to_path(name);
  const name_prefixed = `app_${name}`;
  let ext = function_name_extension();
  let body = `<script type="module"> 
    import { ${name_prefixed} } from './${name_prefixed}${ext}.js';
    ${name_prefixed}();
  </script>`;
  await html_overwrite(name, body);
  await file_open(file_path);
}

import { js_imports } from "./js_imports.mjs";
import { function_parse } from "./function_parse.mjs";
import { marker } from "./marker.mjs";
export async function function_dependencies(f_name) {
  let imports = await function_imports(f_name);
  return imports;
}
async function function_imports(f_name) {
    let parsed = await function_parse(f_name);
    let { ast } = parsed;
    let imports = js_imports(ast);
    return imports;
}


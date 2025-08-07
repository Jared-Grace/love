import { each } from "./each.mjs";
import { function_imports_missing } from "./function_imports_missing.mjs";
import { js_parse } from "./js_parse.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { list_first } from "./list_first.mjs";

export async function function_imports_missing_add(f_name) {
  let { imports_missing, parsed } = await function_imports_missing(f_name);
  let { body } = parsed;
  each(imports_missing, (import_missing) => {
    let code =
      "import { " +
      import_missing +
      " } from './" +
      function_name_to_base(import_missing) +
      "'";
    let import_parsed = js_parse(code);
  let { body } = import_parsed;
  let statement = list_first(body)
    console.log(statement);
  });
}

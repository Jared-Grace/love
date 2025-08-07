import { function_parse } from "./function_parse.mjs";
import { js_imports } from "./js_imports.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_single } from "./list_single.mjs";
import { js_visit_type } from "./js_visit_type.mjs";

export async function function_imports_missing_add(f_name) {
  let parsed = await function_parse(f_name);
  let imports = js_imports(parsed);

let declarations=list_adder(la=>{

  js_visit_type(parsed, "ExportNamedDeclaration", (v) => {
      let { node } = v;
      
      la(node);
    });
})
let declaration=list_single(declarations)

  console.log(declaration)
}
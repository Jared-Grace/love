import { function_parse } from "./function_parse.mjs";
import { js_imports } from "./js_imports.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
import { list_single } from "./list_single.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";

export async function function_imports_missing_add(f_name) {
  let parsed = await function_parse(f_name);
  let imports = js_imports(parsed);

    let declaration = js_declaration_single(parsed);
   let identifiers= list_adder_unique(la=>{

    js_visit_type(declaration,'Identifier',v=>{
        let {node}=v
        la(object_property_get(node,'name'))
    })
    })

  console.log(identifiers)
}


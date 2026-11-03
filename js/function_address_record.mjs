import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { js_address_start_locals } from "./js_address_start_locals.mjs";
import { fn_name } from "./fn_name.mjs";
export function function_address_record(f_name, ast) {
  "what the address walk needs from one function, read once so that going round again does not read the code again; null when the file holds no function of that name";
  let declarations = js_list_type(ast, "FunctionDeclaration");
  function lambda(v) {
    let eq = equal(v.node.id?.name, f_name);
    return eq;
  }
  let found = declarations.find(lambda);
  if (not(found)) {
    return null;
  }
  let declaration = found.node;
  function lambda2(p) {
    let r = equal(p.type, "Identifier") ? p.name : null;
    return r;
  }
  let params = declaration.params.map(lambda2);
  let body = declaration.body;
  let locals = js_address_start_locals(body);
  function lambda3(v) {
    let r2 = v.node;
    return r2;
  }
  let calls = js_list_type(body, "CallExpression").map(lambda3);
  function lambda4(v) {
    let r3 = v.node.argument;
    return r3;
  }
  let returned = js_list_type(body, "ReturnStatement").map(lambda4);
  function lambda5(c) {
    let eq2 = equal(c.callee.name, fn_name("url_opened_unasked_assert"));
    return eq2;
  }
  let checks = calls.filter(lambda5);
  function lambda6(c) {
    let r4 = params.indexOf(c.arguments[0]?.name);
    return r4;
  }
  let checked = checks.map(lambda6);
  let record = {
    f_name,
    params,
    locals,
    calls,
    returned,
    checked,
  };
  return record;
}

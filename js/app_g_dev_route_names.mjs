import { fn_name } from "./fn_name.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_visit_function_nodes_names } from "./js_visit_function_nodes_names.mjs";
import { list_without } from "./list_without.mjs";
export async function app_g_dev_route_names() {
  ("the word after the # for every dev screen the game has, read out of ",
    fn_name("app_g_dev_routes"),
    " itself rather than listed here: each route is a function written inside it, so asking the code which functions those are cannot fall behind the moment somebody adds a screen");
  "for something that walks all the screens - a sweep at phone size, say - so it walks the ones that exist today rather than the ones that existed when it was written";
  let name = fn_name("app_g_dev_routes");
  let ast = await function_ast(name);
  let names = js_visit_function_nodes_names(ast);
  let routes = list_without(names, name);
  return routes;
}

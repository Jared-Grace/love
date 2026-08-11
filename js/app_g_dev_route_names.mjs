import { fn_name } from "./fn_name.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_function_node_find_named } from "./js_function_node_find_named.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
export async function app_g_dev_route_names() {
  ("the word after the # for every dev screen the game has, read out of ",
    fn_name("app_g_dev_routes"),
    " itself rather than listed here: each route is a function written directly inside it, so asking the code which functions those are cannot fall behind the moment somebody adds a screen");
  "only the functions standing DIRECTLY in that body count. a route may write a little helper inside itself - one of them writes an empty one called done - and a reading that took every function anywhere inside would offer that helper as a screen and then find nothing there";
  "for something that walks all the screens - a sweep at phone size, say - so it walks the ones that exist today rather than the ones that existed when it was written";
  let name = fn_name("app_g_dev_routes");
  let ast = await function_ast(name);
  let found = js_function_node_find_named(ast, name);
  let node = property_get(found, "node");
  let statements = property_path_get_2(node, "body", "body");
  function route_is(statement) {
    let v = js_node_type_is(statement, "FunctionDeclaration");
    return v;
  }
  let routes = list_filter(statements, route_is);
  function route_name(statement) {
    let v = property_path_get_2(statement, "id", "name");
    return v;
  }
  let names = list_map(routes, route_name);
  return names;
}

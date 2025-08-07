import { js_node_is } from "./js_node_is.mjs";
import { list_is } from "./list_is.mjs";export function js_visit_filter(n){return  js_node_is(n) || list_is(n)}
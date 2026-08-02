import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_map_squash } from "./list_map_squash.mjs";
import { js_function_declaration_params_names_node } from "./js_function_declaration_params_names_node.mjs";
export function js_function_declaration_params_names_plain(declaration) {
  "the parameters of this function that are a plain name - one name standing for one whole argument at every call site";
  "an unpacked parameter is left out altogether. its pieces are not what a call site hands over - the caller passes one object and never names the pieces - so a piece the body never reads is not making any call site say something untrue. the reading beside this one counts an unpacked parameter as each of the names it unpacks to, which is the right answer to a different question";
  let params = js_function_declaration_params_get(declaration);
  let plain = list_filter(params, js_identifier_is);
  let params_names = list_map_squash(
    plain,
    js_function_declaration_params_names_node,
  );
  return params_names;
}

import { js_strings_dot_name_skip_nodes } from "./js_strings_dot_name_skip_nodes.mjs";
import { js_statement_expression_nodes } from "./js_statement_expression_nodes.mjs";
import { text_identifier_segments } from "./text_identifier_segments.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_code_fn_names_pieces } from "./js_code_fn_names_pieces.mjs";
import { js_fn_names_pieces_replace_code } from "./js_fn_names_pieces_replace_code.mjs";
import { js_parse_expression_replace } from "./js_parse_expression_replace.mjs";
import { js_strings_replace_generic } from "./js_strings_replace_generic.mjs";
export async function js_strings_add_reference_to_fn_names_generic(ast, fn_names) {
  let skip = js_strings_dot_name_skip_nodes(ast);
  let statement_nodes = js_statement_expression_nodes(ast);
  function replace_try(value, node) {
    let segments = text_identifier_segments(value);
    function match_lambda(segment) {
      let identifier = property_get(segment, "identifier");
      let text = property_get(segment, "text");
      let match = identifier && list_includes(fn_names, text);
      return match;
    }
    let matching = list_filter(segments, match_lambda);
    let e = list_empty_is(matching);
    if (e) {
      return false;
    }
    let pieces = js_code_fn_names_pieces(segments, fn_names);
    let statement = list_includes(statement_nodes, node);
    let code = js_fn_names_pieces_replace_code(pieces, statement);
    js_parse_expression_replace(code, node);
    return true;
  }
  await js_strings_replace_generic(ast, skip, replace_try);
}

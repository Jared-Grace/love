import { functions_names } from "./functions_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_named_argument_nodes } from "./js_call_named_argument_nodes.mjs";
import { js_import_source_nodes } from "./js_import_source_nodes.mjs";
import { list_concat } from "./list_concat.mjs";
import { text_identifier_segments } from "./text_identifier_segments.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_code_fn_names_pieces } from "./js_code_fn_names_pieces.mjs";
import { js_code_join_comma_space } from "./js_code_join_comma_space.mjs";
import { js_code_wrap_brackets } from "./js_code_wrap_brackets.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse_expression_replace } from "./js_parse_expression_replace.mjs";
import { js_strings_replace_generic } from "./js_strings_replace_generic.mjs";
export async function js_strings_fn_names_dot_name(ast) {
  let fn_names = await functions_names();
  let skip_args = js_call_named_argument_nodes(ast, fn_name.name);
  let skip_sources = js_import_source_nodes(ast);
  let skip = list_concat(skip_args, skip_sources);
  function replace_try(value, node) {
    let segments = text_identifier_segments(value);
    function lambda2(segment) {
      let identifier = property_get(segment, "identifier");
      let text = property_get(segment, "text");
      let match = identifier && list_includes(fn_names, text);
      return match;
    }
    let matches = list_filter(segments, lambda2);
    let e = list_empty_is(matches);
    if (e) {
      return false;
    }
    let pieces = js_code_fn_names_pieces(segments, fn_names);
    let joined = js_code_join_comma_space(pieces);
    let array_code = js_code_wrap_brackets(joined);
    let args = [array_code];
    let call_code = js_code_call_args(text_combine_multiple.name, args);
    js_parse_expression_replace(call_code, node);
    return true;
  }
  await js_strings_replace_generic(ast, skip, replace_try);
}

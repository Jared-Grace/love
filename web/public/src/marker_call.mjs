import {js_parse_statement} from './js_parse_statement.mjs';
import {marker} from './marker.mjs';
import {js_code_call_args} from './js_code_call_args.mjs';
import {function_parse_declaration} from './function_parse_declaration.mjs';
import {js_unparse} from './js_unparse.mjs';
import {marker_next_get} from './marker_next_get.mjs';
import {function_transform_marker} from './function_transform_marker.mjs';
import {list_adder_async} from './list_adder_async.mjs';
import {data_function_current_get} from './data_function_current_get.mjs';
import {marker_next_index} from './marker_next_index.mjs';
export async function marker_call(f_name_call) {
  let parsed = await function_parse_declaration(f_name_call);
  let f_name_current = await data_function_current_get();
  return list_adder_async(async la => {
    await function_transform_marker(f_name_current, lambda);
    function lambda(a) {
      let {index, stack2} = marker_next_index(a);
      la(parsed);
      return;{
      let code = js_code_call_args(marker.name);
      let parsed = js_parse_statement(code);
      la(js_unparse(next));}
    }
  });
}

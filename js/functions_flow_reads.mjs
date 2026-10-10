import { fn_name } from "./fn_name.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_ast } from "./function_ast.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { equal } from "./equal.mjs";
import { js_function_flow_read } from "./js_function_flow_read.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { not_equal } from "./not_equal.mjs";
export async function functions_flow_reads() {
  ("What the flow check needs from every function, as a map from name to what ",
    fn_name("js_function_flow_read"),
    " gave back.");
  ("A function whose file does not parse, or does not hold an exported function of its own name, is left out. Being left out is never read as being safe: whoever asks about one function insists it is here.");
  let f_names = await functions_names();
  let known = new Set(f_names);
  async function read_one(f_name) {
    async function lambda() {
      let r = await function_ast(f_name);
      return r;
    }
    let ast = await catch_null_async(lambda);
    if (equal(ast, null)) {
      return null;
    }
    let read = js_function_flow_read(f_name, ast, known);
    return read;
  }
  let all = await list_map_unordered_async(f_names, read_one);
  let reads = new Map();
  for (let read of all) {
    if (not_equal(read, null)) {
      reads.set(read.f_name, read);
    }
  }
  return reads;
}

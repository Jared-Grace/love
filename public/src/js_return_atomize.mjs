import { js_return_on_async } from "../../../love/public/src/js_return_on_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_type } from "../../../love/public/src/js_type.mjs";
import { js_node_atomize } from "../../../love/public/src/js_node_atomize.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
export async function js_return_atomize(ast) {
  let existing = js_identifiers_names(ast);
  let rs = js_type(ast, "ReturnStatement");
  async function lambda(v) {
    let { node } = v;
    await js_return_on_async(node, noop, identifier_not);
    async function identifier_not(argument) {
      if (argument === null) {
        return;
      }
      let v = js_visit_match(ast, argument);
      await js_node_atomize(existing, v);
    }
  }
  await each_async(rs, lambda);
}

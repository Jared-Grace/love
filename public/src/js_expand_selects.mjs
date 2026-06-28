import { js_expand } from "../../../love/public/src/js_expand.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export async function js_expand_selects(ast, selects) {
  let first = list_single(selects);
  let index = await js_expand(stack2, stack1, first, ast);
}

import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_includes_not } from "../../../love/public/src/list_includes_not.mjs";
export async function js_curry_replace_generate(
  name_get,
  f_name,
  f_names,
  curry_generate,
) {
  let name_curried = name_get(f_name);
  let n = list_includes_not(f_names, name_curried);
  if (n) {
    await curry_generate(f_name);
    list_add(f_names, name_curried);
  }
  return name_curried;
}

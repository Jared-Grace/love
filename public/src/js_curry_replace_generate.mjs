import { list_add_if_not_includes } from "../../../love/public/src/list_add_if_not_includes.mjs";
export async function js_curry_replace_generate(
  name_get,
  f_name,
  f_names,
  curry_generate,
) {
  let name_curried = name_get(f_name);
  let n = list_add_if_not_includes(f_names, name_curried);
  if (n) {
    await curry_generate(f_name);
  }
  return name_curried;
}

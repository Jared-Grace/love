import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_transform_curried_right(lambda$ast) {
  let r2 = async function function_transform_curried_right_result(f_name) {
    let r = await function_transform(f_name, lambda$ast);
    return r;
  };
  return r2;
}

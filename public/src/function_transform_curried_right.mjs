import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_transform_curried_right(lambda$ast) {
  return async function function_transform_curried_right_result(f_name) {
    return await function_transform(f_name, lambda$ast);
  };
}

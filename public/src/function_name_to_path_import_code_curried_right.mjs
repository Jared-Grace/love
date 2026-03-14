import { function_name_to_path_import_code } from "../../../love/public/src/function_name_to_path_import_code.mjs";
export function function_name_to_path_import_code_curried_right(dictionary) {
  let r = function function_name_to_path_import_code_curried_right_result(
    import_,
  ) {
    let code = function_name_to_path_import_code(import_, dictionary);
    return code;
  };
  return r;
}

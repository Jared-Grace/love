import { function_dependencies_code } from "./function_dependencies_code.mjs";
import { firebase_upload_string } from "./firebase_upload_string.mjs";
import { list_join } from "./list_join.mjs";
export async function firebase_deploy_function(f_name) {
  let code = await function_dependencies_code(f_name);
  const myString = "Hello, Firebase Storage!";
  let destination = list_join(["function", f_name]);
  firebase_upload_string(code, destination);
}

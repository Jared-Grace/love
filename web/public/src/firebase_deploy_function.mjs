import { function_dependencies_code } from "./function_dependencies_code.mjs";
import { firebase_upload_string } from "./firebase_upload_string.mjs";
export async function firebase_deploy_function(f_name) {
  let code = await function_dependencies_code(f_name);
  const myString = "Hello, Firebase Storage!";
  firebase_upload_string(code, "function/" + f_name);
}

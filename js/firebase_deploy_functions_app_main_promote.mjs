import { firebase_deploy_function_app_main_promote } from "./firebase_deploy_function_app_main_promote.mjs";
import { text_split_comma_each_async } from "./text_split_comma_each_async.mjs";
export async function firebase_deploy_functions_app_main_promote(
  searches_comma,
) {
  await text_split_comma_each_async(
    searches_comma,
    firebase_deploy_function_app_main_promote,
  );
}

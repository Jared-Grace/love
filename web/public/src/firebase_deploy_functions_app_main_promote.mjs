import { each_async } from "../../../love/public/src/each_async.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
export async function firebase_deploy_functions_app_main_promote(a) {
  let searches = text_split_comma(searches_comma);
  await each_async(searches, firebase_deploy_function_app_main_promote);
}

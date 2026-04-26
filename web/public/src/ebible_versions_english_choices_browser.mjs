import { firebase_storage_download_json_jg } from "../../../love/public/src/firebase_storage_download_json_jg.mjs";
import { ebible_versions_english_choices_upload_path } from "../../../love/public/src/ebible_versions_english_choices_upload_path.mjs";
import { global_function_initialize_lambda_async } from "../../../love/public/src/global_function_initialize_lambda_async.mjs";
export async function ebible_versions_english_choices_browser() {
  async function lambda() {
    let destination = ebible_versions_english_choices_upload_path();
    let choices = await firebase_storage_download_json_jg(destination);
    return choices;
  }
  let english_choices = await global_function_initialize_lambda_async(
    ebible_versions_english_choices_browser,
    lambda,
  );
  return english_choices;
}

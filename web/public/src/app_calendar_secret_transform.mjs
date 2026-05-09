import { file_json_transform_initialize_default } from "../../../love/public/src/file_json_transform_initialize_default.mjs";
import { app_calendar_secret_path } from "../../../love/public/src/app_calendar_secret_path.mjs";
export async function app_calendar_secret_transform(lambda2) {
  let file_path_calendar = app_calendar_secret_path();
  await file_json_transform_initialize_default(file_path_calendar, lambda2);
}

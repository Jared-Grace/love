import { fn_name } from "./fn_name.mjs";
import { app_shared_main_latest } from "./app_shared_main_latest.mjs";
import { firebase_project_name_jg } from "./firebase_project_name_jg.mjs";
export async function app_en_learn_bible_latest() {
  let firebase_name_value = firebase_project_name_jg();
  await app_shared_main_latest(
    fn_name("app_en_learn_bible"),
    firebase_name_value,
  );
}

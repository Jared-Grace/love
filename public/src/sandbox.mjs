import { http_local_text } from "../../../love/public/src/http_local_text.mjs";
import { firebase_storage_url_project_jg } from "../../../love/public/src/firebase_storage_url_project_jg.mjs";
export async function sandbox() {
  let project_url = firebase_storage_url_project_jg();
  let text = await http_local_text(url, project_url2);
}

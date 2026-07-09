import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function firebase_storage_url_project(project_name) {
  let url = text_combine(project_name, ".firebasestorage.app");
  return url;
}

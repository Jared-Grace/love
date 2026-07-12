import { json_to } from "./json_to.mjs";
export function firebase_upload_object_arg(object) {
  let content = json_to(object);
  let content_type = "application/json";
  let r = {
    content,
    content_type,
  };
  return r;
}

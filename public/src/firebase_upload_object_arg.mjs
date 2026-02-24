import { json_to } from "../../../love/public/src/json_to.mjs";
export function firebase_upload_object_arg(object) {
  let content = json_to(object);
  const content_type = "application/json";
  let r = {
    content,
    content_type,
  };
  return r;
}

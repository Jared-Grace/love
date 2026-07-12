import { text_base64_to } from "./text_base64_to.mjs";
export function http_firebase_file_name(url) {
  let safe = text_base64_to(url);
  return safe;
}

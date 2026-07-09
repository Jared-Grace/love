import { json_to } from "../../../love/public/src/json_to.mjs";
export function json_empty() {
  let json = json_to({});
  return json;
}

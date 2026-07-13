import { error_json } from "./error_json.mjs";
export function not_assert_json(b, json) {
  if (b) {
    error_json(json);
  }
}

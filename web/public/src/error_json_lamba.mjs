import { error_json } from "../../../love/public/src/error_json.mjs";
export function error_json_lamba(lambda) {
  const message = lambda();
  error_json(message);
}

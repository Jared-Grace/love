import { http_json } from "../../../love/public/src/http_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_main() {
  marker("1");
  let v = await http_json("/api/time");
  alert(v);
}

import { http } from "../../../love/public/src/http.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_main() {
  marker("1");
  let v = await http("/api/time");
  alert("here");
}

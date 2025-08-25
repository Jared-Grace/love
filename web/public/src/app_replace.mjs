import { http_json } from "./http_json.mjs";
import { app_replace_main } from "./app_replace_main.mjs";
import { marker } from "./marker.mjs";
export async function app_replace() {
  marker("1");
  app_replace_main();
  let json = await http_json(url);
}

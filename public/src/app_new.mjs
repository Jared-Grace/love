import { html_new } from "./html_new.mjs";
import { marker } from "./marker.mjs";
export async function app_new(name) {
  marker("1");
  await html_new(name);
}

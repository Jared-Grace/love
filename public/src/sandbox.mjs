import { app_component } from "../../../love/public/src/app_component.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  function lambda() {}
  await app_component("sandbox", lambda);
}

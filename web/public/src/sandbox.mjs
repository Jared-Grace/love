import { marker } from "../../../love/public/src/marker.mjs";
import { app_component } from "../../../love/public/src/app_component.mjs";
export async function sandbox() {
  marker("1");
  await app_component("sandbox");
}

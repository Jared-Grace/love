import { apps_get } from "../../../love/public/src/apps_get.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_apps(context) {
  let fr = await apps_get();
  marker("1");
  let root = html_clear_context(context);
}

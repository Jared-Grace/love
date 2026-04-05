import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { app_karate_container } from "../../../karate_code/public/src/app_karate_container.mjs";
export function app_shared_container_centered(parent) {
  let div = app_karate_container(parent);
  html_centered(div);
  return div;
}

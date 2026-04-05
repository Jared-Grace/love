import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { app_shared_container } from "../../../love/public/src/app_shared_container.mjs";
export function app_shared_container_centered(parent) {
  let div = app_shared_container(parent);
  html_centered(div);
  return div;
}

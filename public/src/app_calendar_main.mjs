import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
export function app_calendar_main(context) {
  log(app_calendar_main.name, {
    context,
  });
  let root = property_get(context, "root");
  let component = html_input(root);
  html_width_full(component);
}

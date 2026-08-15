import { app_a_identifier_generic_choices_get } from "./app_a_identifier_generic_choices_get.mjs";
import { app_a_overlay_choices } from "./app_a_overlay_choices.mjs";
export function app_a_identifier_generic(
  a,
  span,
  name,
  c,
  lines_multiple,
  replace,
) {
  async function choices_get(o, choices) {
    let r = await app_a_identifier_generic_choices_get(
      o,
      choices,
      a,
      name,
      lines_multiple,
      c,
      replace,
    );
    return r;
  }
  app_a_overlay_choices(a, span, choices_get);
}

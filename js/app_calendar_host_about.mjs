import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_shared_toast_saving } from "./app_shared_toast_saving.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export function app_calendar_host_about(area, key, settings) {
  arguments_assert(arguments, 3);
  ("The host's first screen: their name, the WhatsApp number guests send codes to, and their booking link name, saved by one button. The time zone is this device's, shown and saved with them.");
  ('THE LINK NAME IS HERE, NOT ON THE SHARE SCREEN (human, 2026-11-22: "a link would be last? Because you\'d create your hours first before a link?"). The server files hours and rules under the link name, so it has to exist before either can be saved; sharing the link is what comes last. Rejected: letting the server save hours before a link name exists - more change for the same screens.');
  let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let name_field = app_shared_field(area);
  html_div_text(name_field, "Your name");
  let name = html_input_text(name_field, "Your name");
  app_shared_input_style(name);
  let whatsapp_field = app_shared_field(area);
  html_div_text(
    whatsapp_field,
    "Your WhatsApp number - guests send their code here",
  );
  let whatsapp = html_input_text(whatsapp_field, "+1 555 123 4567");
  app_shared_input_style(whatsapp);
  let slug_field = app_shared_field(area);
  html_div_text(
    slug_field,
    "Your booking link name (lowercase letters, digits, _)",
  );
  let slug = html_input_text(slug_field, "your_name");
  app_shared_input_style(slug);
  let person = settings.person;
  if (person) {
    html_value_set(name, person.name);
    html_value_set(whatsapp, person.whatsapp);
  }
  let host = settings.host;
  if (host) {
    html_value_set(slug, host.slug);
  }
  let zone_line = html_div_text_content(area, "Time zone: " + zone);
  app_shared_text_deemphasized(zone_line);
  async function about_save() {
    let person_saved = await calendar_api_call(
      "POST",
      "person_save",
      {
        name: html_value_get(name).trim(),
        whatsapp: html_value_get(whatsapp),
        timezone: zone,
      },
      key,
    );
    if (not(person_saved.body.ok)) {
      let person_told = equal(person_saved.body.reason, "whatsapp")
        ? "That WhatsApp number does not look right."
        : "Could not save. Try again.";
      return person_told;
    }
    let host_saved = await calendar_api_call(
      "POST",
      "host_save",
      {
        slug: html_value_get(slug).trim(),
        block_minutes: 60,
        meeting_minutes: 25,
      },
      key,
    );
    if (host_saved.body.ok) {
      let done = "Saved.";
      return done;
    }
    let words = {
      slug: "Use 2 to 40 lowercase letters, digits or _ for the link name.",
      slug_taken: "Another host has that link name. Pick another.",
    };
    let told = property_get_or(
      words,
      host_saved.body.reason,
      "Could not save. Try again.",
    );
    return told;
  }
  async function save_press() {
    await app_shared_toast_saving(about_save);
  }
  app_shared_button_green(area, "Save", save_press);
}

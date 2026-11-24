import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_shared_toast_saving } from "./app_shared_toast_saving.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export function app_calendar_host_about(area, key, settings) {
  arguments_assert(arguments, 3);
  ("The host's first screen: their name, the WhatsApp number guests send codes to, the Facebook link that lets guests choose Messenger, and their booking link name, saved by one button. The time zone is this device's, shown and saved with them.");
  ('THE LINK NAME IS HERE, NOT ON THE SHARE SCREEN (human, 2026-11-22: "a link would be last? Because you\'d create your hours first before a link?"). The server files hours and rules under the link name, so it has to exist before either can be saved; sharing the link is what comes last. Rejected: letting the server save hours before a link name exists - more change for the same screens.');
  let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let name_field = app_shared_field(area);
  html_div_text(name_field, "Your name");
  let name = html_input_text(name_field, "Your name");
  app_shared_input_style(name);
  let whatsapp_field = app_shared_field(area);
  html_div_text(
    whatsapp_field,
    "Your WhatsApp number - guests can send their code here",
  );
  let whatsapp = html_input_text(whatsapp_field, "+1 555 123 4567");
  app_shared_input_style(whatsapp);
  ('THE FACEBOOK LINK SITS BESIDE THE WHATSAPP NUMBER (human, 2026-11-22: "should whats app number and facebook url be configured in the same place?"): both are how guests reach the host. It used to be on Rules.');
  ('The two labels say the same thing, since a guest may send their code to either (human, 2026-11-22: "should the descriptions of wa# and fb profile be similar?"). Rejected: "leave blank for Messenger only" - the WhatsApp number is required, and every place without a Messenger name falls back to WhatsApp, never the other way.');
  ('2026-11-15: asks for the link, since that is what a host has to hand and the reader takes a whole link (human: "It says messenger name - but the field shows URL - does it want just the /... part or the whole url?").');
  let messenger_field = app_shared_field(area);
  html_div_text(
    messenger_field,
    "Your Facebook profile link - guests can send their code here too; leave blank for WhatsApp only",
  );
  let messenger = html_input_text(messenger_field, "facebook.com/your.name");
  let messenger_hint = html_div_text(
    messenger_field,
    "On Facebook, open your profile, then copy the link from the address bar or from Share.",
  );
  app_shared_text_deemphasized(messenger_hint);
  app_shared_input_style(messenger);
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
    html_value_set(messenger, host.messenger);
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
      ("The Facebook link is saved on its own, so the rules - and whether the host ever saved them - stay as they were.");
      let rules_saved = await calendar_api_call(
        "POST",
        "host_messenger_save",
        {
          messenger: html_value_get(messenger),
        },
        key,
      );
      let rules_told = rules_saved.body.ok
        ? "Saved."
        : equal(rules_saved.body.reason, "messenger")
          ? "That Facebook link does not look right. Paste the link to your own Facebook profile."
          : "Could not save. Try again.";
      return rules_told;
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

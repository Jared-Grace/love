import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_person_label(name, whatsapp, profile) {
  arguments_assert(arguments, 3);
  ('How a host\'s lists name a guest: the name if one was stored, else the WhatsApp number, else the Facebook profile link. Guests are no longer asked for a name, so most have none (human, 2026-11-24: "goal is collect less info to have less PII").');
  for (let v of [name, whatsapp, profile]) {
    let t = String(v ?? "").trim();
    if (not_equal(t, "")) {
      return t;
    }
  }
  let r = "a guest";
  return r;
}

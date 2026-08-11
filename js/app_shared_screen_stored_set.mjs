import { storage_session_set } from "./storage_session_set.mjs";
export function app_shared_screen_stored_set(app_fn, screen_name) {
  "remember the screen you are on, for this tab only; the getter beside this one reads it back";
  "the app is named rather than taken from a context so a caller outside the screen framework can still say where that app should land - the whole-chapter reader holds no screens of its own, yet switching out of it into the verse reader has to choose the screen it arrives on";
  storage_session_set(app_fn, "screen", screen_name);
}

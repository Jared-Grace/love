import { app_shared_emoji_mirror_if_rtl } from "./app_shared_emoji_mirror_if_rtl.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
export function app_shared_button_back_arrow() {
  "The one arrow every way out of a screen wears, already facing the way back for the reader in front of it.";
  "Written once because the two ways out - the plain one and the one that names where it leads - would otherwise each decide which arrow and each decide whether to turn it round, with nothing anywhere to say they had stopped agreeing.";
  "It is asked which way to face rather than drawn pointing left. Back is the way the reader came from, and for somebody reading from the right that is the other side of the screen, so an arrow left pointing left on their page points away from where the button goes.";
  let arrow = emoji_arrow_left();
  let facing = app_shared_emoji_mirror_if_rtl(arrow);
  return facing;
}

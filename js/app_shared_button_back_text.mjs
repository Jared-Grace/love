import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_button_back_text() {
  "What the plain way out of a screen says, in the language the reader of this app reads, with the arrow that means back facing the way back for them.";
  "The arrow is asked which way to face rather than drawn pointing left. Back is the way the reader came from, and for somebody reading from the right that is the other side of the screen - so an arrow left pointing left on their page points away from where the button goes, which is worse than having no arrow at all.";
  let texts = {
    en: " Back",
    ur: " واپس",
  };
  let label = app_shared_text_reader_language(texts);
  let arrow = emoji_arrow_left();
  let facing = app_shared_emoji_mirror_if_rtl(arrow);
  let bt = text_combine(facing, label);
  return bt;
}

import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_emoji_bible } from "./app_emoji_bible.mjs";
import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_font_size_buttons } from "./app_shared_font_size_buttons.mjs";
import { app_bible_emoji_settings_choices } from "./app_bible_emoji_settings_choices.mjs";
import { app_bible_emoji_tradition_picker } from "./app_bible_emoji_tradition_picker.mjs";
import { app_bible_emoji_offline_row } from "./app_bible_emoji_offline_row.mjs";
export function app_bible_emoji_settings(context) {
  "the gear on the picture Bible's bar opens this: the way back to what was being read, the one pair of buttons that grows and shrinks the text, which cross is drawn, and keeping the whole picture Bible on this device.";
  "IT IS THE SAME SCREEN AND THE SAME PAIR OF BUTTONS THE BIBLE READER OFFERS, asked for by name rather than drawn again here, so a reader who has changed the size in one app already knows where it is in the other and the step they move by is the same step.";
  "WHICH CROSS IS DRAWN IS HERE, moved off the chapter's bar by the human, because it is chosen once and kept rather than flipped while reading, and the bar is for what a reader changes mid-chapter. The choices about what stands under every verse and whose order the pictures follow came here too, also moved by the human, each as a pair of buttons. Rejected: keeping them on the bar where a reader sees them take effect, which the human overruled.";
  "THIS SCREEN DRAWS ITSELF AGAIN WHEN A CROSS IS PICKED, so the chosen button colours at once; ";
  fn_name("app_bible_emoji_tradition_picker");
  (" is handed this function rather than reaching for it, since it sits on this screen.");
  ("The way out is the page drawn again from the top rather than a screen put away, because that is how this app moves between anything and anything else: it reads the address and draws what the address names.");
  arguments_assert(arguments, 1);
  async function back() {
    await app_emoji_bible(context);
  }
  let content = app_shared_bible_screen_open(context, back);
  ("EVERY SETTING SITS IN ITS OWN BLUE CARD, asked for by the human, so where one setting ends and the next begins is drawn rather than guessed.");
  let card_size = app_shared_container_blue(content);
  app_shared_font_size_buttons(card_size, context);
  async function redraw() {
    await app_bible_emoji_settings(context);
  }
  ("THE CROSS COMES AFTER THE THREE CHOICES ABOUT A CHAPTER, in the order the human laid out.");
  app_bible_emoji_settings_choices(content, redraw);
  let card_cross = app_shared_container_blue(content);
  app_bible_emoji_tradition_picker(card_cross, redraw);
  ("KEEPING THE PICTURE BIBLE ON THIS DEVICE IS HERE, asked for by the human, in the same blue card and the same row the bible reader keeps a language with, so a reader who saved one already knows the other.");
  let card = app_shared_container_blue(content);
  app_bible_emoji_offline_row(card, redraw);
}

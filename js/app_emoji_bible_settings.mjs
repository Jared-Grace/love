import { arguments_assert } from "./arguments_assert.mjs";
import { app_emoji_bible } from "./app_emoji_bible.mjs";
import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { app_shared_font_size_buttons } from "./app_shared_font_size_buttons.mjs";
export function app_emoji_bible_settings(context) {
  "the gear on the picture Bible's bar opens this: the way back to what was being read, and the one pair of buttons that grows and shrinks the text.";
  "IT IS THE SAME SCREEN AND THE SAME PAIR OF BUTTONS THE BIBLE READER OFFERS, asked for by name rather than drawn again here, so a reader who has changed the size in one app already knows where it is in the other and the step they move by is the same step.";
  "The two choices about the pictures themselves - which cross is drawn, and whether the key stands under every verse - are not here. They stay in the bar of the chapter they change, because a reader can see them take effect there and would see nothing happen here.";
  "The way out is the page drawn again from the top rather than a screen put away, because that is how this app moves between anything and anything else: it reads the address and draws what the address names.";
  arguments_assert(arguments, 1);
  async function back() {
    await app_emoji_bible(context);
  }
  let content = app_shared_bible_screen_open(context, back);
  app_shared_font_size_buttons(content, context);
}

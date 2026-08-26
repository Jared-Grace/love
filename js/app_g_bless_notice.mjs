import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { bless_notice_ms } from "./bless_notice_ms.mjs";
import { app_shared_game_toast } from "./app_shared_game_toast.mjs";
export function app_g_bless_notice(line) {
  arguments_assert(arguments, 1);
  ("Puts one short line up over the street for as long as it takes to read, and takes it");
  ("away again - or does nothing at all, where the prayer just said had nothing to report.");
  ("It never blocks and never has to be dismissed, which is what makes it usable at the");
  ("rate this game is played at. The one thing standing between the player and the next");
  ("face is the prayer itself, and anything else that had to be pressed would be a second");
  ("toll on top of it.");
  ("Nothing to say is handled HERE rather than at the call, because every caller would");
  ("otherwise be guarding the same case and one of them would eventually forget - and the");
  ("forgotten one shows an empty pill over the street rather than throwing.");
  let nothing = null_is(line);
  if (nothing) {
    return;
  }
  let ms = bless_notice_ms(line);
  app_shared_game_toast(line, ms);
}

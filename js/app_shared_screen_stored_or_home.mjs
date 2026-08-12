import { app_shared_screen_stored_initialize } from "./app_shared_screen_stored_initialize.mjs";
import { app_shared_screen_stored_set_context } from "./app_shared_screen_stored_set_context.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_shared_screen_stored_or_home(
  context,
  screens,
  screen_name_home,
) {
  "the screen this tab remembers, or home when no screen answers to the remembered name - and home is remembered in its place, so the tab is left on a name that will still work next time";
  "A remembered name that names no screen used to be handed straight to the finder, which asks for exactly one match and throws on none. The throw happens before anything is painted, so the whole app dies on a blank page - and it dies again on every reload, because the name that killed it is in this tab's storage. The tab is bricked until somebody clears storage or opens a new one, which is a repair no reader of a blank page can be expected to find.";
  "Anyone can write that name: the address bar carries a screen= word straight into storage, so a typo, a stale bookmark, or a link shared after a screen was renamed all land here. Checking at this one point covers every writer at once, because this is where a remembered name is turned into a screen.";
  "Home rather than an error, and the remembered name is overwritten rather than left alone. The reader wanted this app, not this screen, and home is the one screen every app has - so the recovery is silent and complete, and the next reload starts clean.";
  let screen_name = app_shared_screen_stored_initialize(
    context,
    screen_name_home,
  );
  let screen = list_find_property_or_null(screens, "name", screen_name);
  let found_is = null_not_is(screen);
  if (found_is) {
    return screen;
  }
  app_shared_screen_stored_set_context(context, screen_name_home);
  let home = list_find_property(screens, "name", screen_name_home);
  return home;
}

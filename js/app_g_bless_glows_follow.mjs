import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_g_bless_glows } from "./app_g_bless_glows.mjs";
export function app_g_bless_glows_follow(glows) {
  arguments_assert(arguments, 1);
  ("Lay the light again on the people it was prayed over, wherever they have got to since.");
  ("The crowd walks while a blessing is still glowing, and the light is drawn on the ground");
  ("where each person was standing when it was said. Left alone it stays behind on an empty");
  ("square while the person it was for walks off in the dark - which reads as the prayer");
  ("having missed them.");
  ("Nothing to do is the ordinary answer, not a fault: most of the time no prayer is");
  ("glowing at all, and this is asked after every step the street takes.");
  ("Drawing again is the whole of it, because the light is placed from where those people");
  ("are AT THAT MOMENT - the same people, asked again. So this cannot come to disagree with");
  ("who was blessed; it has no second opinion about who they are.");
  let glowing = property_get_or_null(glows, "glowing");
  if (not(glowing)) {
    return;
  }
  app_g_bless_glows(glows, glowing);
}

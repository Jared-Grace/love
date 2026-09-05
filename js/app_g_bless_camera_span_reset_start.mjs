import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_camera_span_reset } from "./app_g_bless_camera_span_reset.mjs";
export async function app_g_bless_camera_span_reset_start(
  container_map,
  div_map,
  player_img_c,
) {
  "Sets the camera on its way back to the ordinary playing distance and hands back a way of waiting for it, without waiting here.";
  arguments_assert(arguments, 3);
  ("The journey itself is somebody else's; all this adds is the not waiting. It is a whole");
  ("function for that because the canonical pass writes an await in front of every call to");
  ("something that gives back a promise, which is right nearly everywhere and wrong here -");
  ("waited for on the spot, the panel that is meant to go up OVER the travelling street");
  ("only appears once the street has stopped. Written as an ordinary function that is not");
  ("itself async, the pass cannot put an await inside it, because there it would not parse.");
  ("So the shape survives being canonicalized rather than being quietly undone.");
  ("What comes back is the journey, not a copy of it. Anything that needs the camera to");
  ("have arrived - putting the player back in the middle of the screen, say - waits on this");
  ("and lands after the last frame instead of racing it.");
  let returning = await app_g_bless_camera_span_reset(
    container_map,
    div_map,
    player_img_c,
  );
  return returning;
}

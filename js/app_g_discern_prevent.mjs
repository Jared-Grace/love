import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
export function app_g_discern_prevent(discern) {
  "if the player prayed for discernment and warnings remain, the Holy Spirit prevents this disregard: show the dove overlay, spend one warning, and return true so the caller cancels the disregarded action";
  let prevent = discern.prayed && discern.warnings > 0;
  if (prevent) {
    discern.warnings = discern.warnings - 1;
    app_g_discern_prevented_overlay();
  }
  return prevent;
}

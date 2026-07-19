import { app_g_discern_prevented_overlay } from "./app_g_discern_prevented_overlay.mjs";
export function app_g_discern_prevent(discern) {
  "if the player prayed for discernment, the Holy Spirit prevents this disregard entirely (force righteousness — you cannot stray from the guidance God gave): show the dove overlay and return true so the caller cancels the disregarded action";
  let prevent = discern.prayed;
  if (prevent) {
    app_g_discern_prevented_overlay(5000);
  }
  return prevent;
}

import { marker } from "../../../love/public/src/marker.mjs";
import { app_message_provide_generic } from "../../../love/public/src/app_message_provide_generic.mjs";
export function app_message_provide_housing(context) {
  marker("1");
  let emoji = "⛺";
  let category = "housing";
  let verse =
    "...whoever sows generously will also reap generously (Corinthians 9:6)";
  app_message_provide_generic(category, emoji, context, verse);
}

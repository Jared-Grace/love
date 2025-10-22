import { app_message_provide_generic } from "../../../love/public/src/app_message_provide_generic.mjs";
export function app_message_provide_travel(context) {
  let emoji = "🛬";
  let category = "travel";
  let verse =
    "...whoever sows generously will also reap generously (Corinthians 9:6)";
  app_message_provide_generic(category, emoji, context);
}

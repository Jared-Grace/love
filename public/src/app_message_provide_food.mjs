import { marker } from "../../../love/public/src/marker.mjs";
import { app_message_provide_generic } from "../../../love/public/src/app_message_provide_generic.mjs";
export function app_message_provide_food(context) {
  marker("1");
  let emoji = "🛬";
  let category = "travel";
  app_message_provide_generic(category, emoji, context);
}

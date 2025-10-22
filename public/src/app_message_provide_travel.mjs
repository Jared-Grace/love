import { app_message_provide_generic } from "../../../love/public/src/app_message_provide_generic.mjs";
export function app_message_provide_travel(context) {
  let emoji = "🛬";
  let category = "travel";
  let verse =
    "knowing that whatever good anyone does, he will receive the same from the Lord, whether he is slave or free (Ephesians 6:8)!";
  app_message_provide_generic(category, emoji, context);
}

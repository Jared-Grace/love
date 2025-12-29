import { app_reply_main_old } from "../../../love/public/src/app_reply_main_old.mjs";
import { reply_2 } from "../../../love/public/src/reply_2.mjs";
export async function app_reply_main(context) {
  await reply_2(context);
  return;
  await app_reply_main_old(context);
}

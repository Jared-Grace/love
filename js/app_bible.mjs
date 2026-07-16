import { app_shared_bible_read } from "../../love/js/app_shared_bible_read.mjs";
export async function app_bible(context) {
  await app_shared_bible_read(context);
}

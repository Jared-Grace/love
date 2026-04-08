import { app_bible_verses } from "../../../love/public/src/app_bible_verses.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
export async function sandbox() {
  await function_open(app_bible_verses.name);
}

import { app_shared_main_production } from "./app_shared_main_production.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_chapter_group() {
  "The chapter grouping page itself: it sets which Firebase project the groupings are kept in, then fetches the newest build of the screen and runs it.";
  await app_shared_main_production(
    fn_name("app_chapter_group_main"),
    "jared-grace",
  );
}

import { arguments_assert } from "./arguments_assert.mjs";
import { list_remove } from "./list_remove.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_player_save } from "./app_g_player_save.mjs";
export async function app_g_study_lambda_finished(review, r, player, close) {
  "What happens once a passage has been got through cleanly: it comes off the list still to review, the player counts as having studied, that is written down, and the screen goes.";
  "THE WRITING DOWN HAPPENS BEFORE THE SCREEN GOES, not after, because the moment the screen goes is the moment a person is free to shut the app - and a save started then is a save that may never land.";
  arguments_assert(arguments, 4);
  list_remove(review, r);
  property_set(player, "studied", true);
  await app_g_player_save(player);
  close();
}

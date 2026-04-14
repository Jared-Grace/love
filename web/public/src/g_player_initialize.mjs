import { log } from "../../../love/public/src/log.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { bible_names_men } from "../../../love/public/src/bible_names_men.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { error } from "../../../love/public/src/error.mjs";
export function g_player_initialize(player_img, coordinates_land) {
  let player = {};
  object_merge(player, {
    img: player_img,
  });
  let player_list = list_remove_last(coordinates_land);
  let player_coordinates = list_single(player_list);
  object_merge(player, player_coordinates);
  let names_men = bible_names_men();
  log(g_player_initialize.name, {
    player,
  });
  error();
  object_merge(player, {
    img: player_img,
    prayer: {
      conversation: false,
      study: false,
    },
    name: list_random_item(names_men),
    conversed: false,
    studied: false,
    review: [],
  });
  return player;
}

import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { bible_names_men } from "../../../love/public/src/bible_names_men.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
export function g_player_initialize(player_img, coordinates_land) {
  let player = {};
  let player_coordinates = list_remove_last(coordinates_land);
  object_merge_set(player, player_coordinates);
  let names_men = bible_names_men();
  object_merge_set(player, {
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

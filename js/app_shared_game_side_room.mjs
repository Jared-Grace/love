import { app_shared_spaced_large_gap } from "./app_shared_spaced_large_gap.mjs";
export function app_shared_game_side_room() {
  "How far a game panel is held off the left and right edges of the screen.";
  "Named rather than spelled twice, because the panels it applies to are placed by two";
  "different pieces of code - the overlay every menu and prayer is drawn on, and the strip";
  "pinned along the bottom of the map - and a player sees them as ONE margin down the side";
  "of the screen. Two spellings of one margin drift, and the drift is visible: one panel";
  "would sit further in than the other with nothing to say why.";
  "It is separate from the room INSIDE a panel, which is what keeps its own words off its";
  "own edge. This is the gap between the panel and the phone, and the two are free to";
  "differ; a thumb reaching past the side of the screen is the reason for this one.";
  let room = app_shared_spaced_large_gap();
  return room;
}

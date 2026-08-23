import { app_shared_margin_y } from "./app_shared_margin_y.mjs";
export function app_shared_game_side_room() {
  "How far a game panel is held off the left and right edges of the screen.";
  "Named rather than spelled twice, because the panels it applies to are placed by two";
  "different pieces of code - the overlay every menu and prayer is drawn on, and the strip";
  "pinned along the bottom of the map - and a player sees them as ONE margin down the side";
  "of the screen. Two spellings of one margin drift, and the drift is visible: one panel";
  "would sit further in than the other with nothing to say why.";
  "It is separate from the room INSIDE a panel, which is what keeps its own words off its";
  "own edge. This is the gap between the panel and the phone, and the two are free to";
  "differ.";
  "It is the SAME gap that already sits between one button and the next, taken from the one";
  "place that decides it. So a stack of buttons is surrounded by an even margin - the space";
  "above a button, below it, and to either side of it are one measurement - and there is";
  "nothing to tune separately later.";
  "It was briefly a large text-sized gap, and that was too much. Width on this screen is";
  "not free: a conversation is the thing the player is reading, it is the longest text in";
  "the game, and every pixel taken off the sides is a pixel of it pushed further down a";
  "phone. So the side room is set to the smallest amount that still reads as a margin";
  "rather than as an edge, and the smallest such amount is one already in use.";
  let room = app_shared_margin_y();
  return room;
}

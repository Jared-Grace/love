export function g_img_square_size_variable() {
  "The style variable that says how large one tile is drawn - set it on anything and every";
  "tile, person and icon inside redraws to that size together.";
  "It is the camera's zoom, named. Everything on a map is sized and placed from this one";
  "value, so a screen that sets it moves all of them at once and nothing can be left behind";
  "at the old size.";
  "That matters most to the praying game, where distance IS zoom: seeing a stadium's worth";
  "of people at once is the top of its ladder, and the way a flat map shows a crowd that far";
  "off is by drawing the tiles smaller until the bowl reads as a field of marks - which is";
  "what a first-person player sees from across the same stadium, so it is the same view and";
  "not a poorer one.";
  let name = "--g-tile";
  return name;
}

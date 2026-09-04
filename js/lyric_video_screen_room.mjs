import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { divide_round } from "./divide_round.mjs";
import { multiply } from "./multiply.mjs";
import { divide_floor } from "./divide_floor.mjs";
export function lyric_video_screen_room(sizes) {
  "$plain sizes";
  "The room a card of words has on the frame: how wide a line may run, how many lines will stand, where the two grey lines at the foot sit and where the card is centred.";
  "★ ONE PLACE WORKS ALL OF THIS OUT SO THAT THE CUTTING AND THE WRITING CANNOT DISAGREE. Where a chapter is cut into screens is decided from how much room a screen has; where those screens are then drawn is decided from the same room. Held in two places those two answers drifted apart and the drift was invisible until a card was clipped at the top and standing over the passage line at the foot.";
  "★ HOW MANY LINES STAND IS THE ROOM ABOVE THE PASSAGE LINE DIVIDED BY THE LETTERING SIZE, and that division is exact rather than approximate because a line of this lettering advances by exactly its own size - measured off rendered frames, two lines against three, and the difference was the size itself to the pixel. The card is centred in that room, so it grows equally upwards and downwards and the two limits are one limit.";
  "★ THE SIDE MARGINS AND THE FOOT MARGIN ARE STATED HERE RATHER THAN IN THE STYLES THAT USE THEM, for the same reason as the paragraph above: the width a line may run to is those side margins subtracted from the frame, and a style holding its own copy of the number is a second place for that answer to come from.";
  arguments_assert(arguments, 1);
  let width = property_get(sizes, "width");
  let height = property_get(sizes, "height");
  let font_size = property_get(sizes, "font_size");
  let passage_size = property_get(sizes, "passage_font_size");
  let credit_size = property_get(sizes, "credit_font_size");
  let side_margin = 80;
  let credit_margin = 70;
  let raised = multiply_round(credit_size, 1.5);
  let passage_margin = add(credit_margin, raised);
  let left = subtract(height, passage_margin);
  let passage_top = subtract(left, passage_size);
  let middle_x = divide_round(width, 2);
  let middle_y = divide_round(passage_top, 2);
  let sides = multiply(side_margin, 2);
  let pixels_across = subtract(width, sides);
  let lines_max = divide_floor(passage_top, font_size);
  let room = {
    side_margin: side_margin,
    credit_margin: credit_margin,
    passage_margin: passage_margin,
    passage_top: passage_top,
    middle_x: middle_x,
    middle_y: middle_y,
    pixels_across: pixels_across,
    lines_max: lines_max,
    font_size: font_size,
  };
  return room;
}

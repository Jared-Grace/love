import { bible_dream_hand_side_point } from "./bible_dream_hand_side_point.mjs";
import { bible_dream_hand_curve_controls } from "./bible_dream_hand_curve_controls.mjs";
export function bible_dream_hand_ribbon_text(
  before,
  start,
  end,
  after,
  half_start,
  half_end,
) {
  "Write the whole closed path of one piece of the hand's line: the curve from one point to the next drawn as a filled shape, as wide as it is asked to be at each of its two ends and changing between them.";
  "★ IT IS A SHAPE AND NOT A LINE, AND THAT IS THE ONLY WAY A WIDTH CAN CHANGE SMOOTHLY. A stroked path takes one width for the whole of what it draws, so a line that thickens has to be cut into pieces, and every cut is a place where the width jumps from one value to the next - a stair, however small each step is. Drawn as its own two edges the width is never stated at all: it is simply the distance between the two sides, and that distance is free to be different at every place along the piece because each side is a curve in its own right.";
  "★ THE TWO EDGES ARE THE CENTRE CURVE MOVED SIDEWAYS, HANDLES AND ALL. Shifting only the ends would give a shape with straight sides bulging away from a curved middle; shifting the handles by the same amount as the end they belong to keeps each edge bending the way the centre bends. The shift is not exact where a piece bends hard - a true parallel of a cubic is not a cubic - but a piece spans a couple of units and bends by a fraction of one, so the two differ by far less than the width being drawn.";
  "★ NEIGHBOURING PIECES SHARE THEIR EDGE EXACTLY, WHICH IS WHY NOTHING SHOWS AT A JOINT. The far end of one piece and the near end of the next are the same hand point, so they are asked for the same width; and the direction used at that end is read off the handle, which the slope rule makes the same coming in as going out. Same place, same width, same direction, so the two ends' corners land on each other to the last decimal. The pieces meet edge to edge and cover the line between them exactly once - no gap to show as a nick and no overlap to show as a darker bead.";
  "The ends are cut straight across rather than rounded, for the same reason. A rounded end would reach past the piece and paint its neighbour's beginning over again, and two half-clear paints make a darker one.";
  let controls = bible_dream_hand_curve_controls(before, start, end, after);
  let leaving = { x: controls.out.x - start.x, y: controls.out.y - start.y };
  let arriving = { x: end.x - controls.in.x, y: end.y - controls.in.y };
  let near_left = bible_dream_hand_side_point(start, leaving, half_start);
  let out_left = bible_dream_hand_side_point(controls.out, leaving, half_start);
  let in_left = bible_dream_hand_side_point(controls.in, arriving, half_end);
  let far_left = bible_dream_hand_side_point(end, arriving, half_end);
  let far_right = bible_dream_hand_side_point(end, arriving, -half_end);
  let in_right = bible_dream_hand_side_point(controls.in, arriving, -half_end);
  let out_right = bible_dream_hand_side_point(
    controls.out,
    leaving,
    -half_start,
  );
  let near_right = bible_dream_hand_side_point(start, leaving, -half_start);
  let text =
    "M" +
    near_left.x +
    "," +
    near_left.y +
    " C" +
    out_left.x +
    "," +
    out_left.y +
    " " +
    in_left.x +
    "," +
    in_left.y +
    " " +
    far_left.x +
    "," +
    far_left.y +
    " L" +
    far_right.x +
    "," +
    far_right.y +
    " C" +
    in_right.x +
    "," +
    in_right.y +
    " " +
    out_right.x +
    "," +
    out_right.y +
    " " +
    near_right.x +
    "," +
    near_right.y +
    " Z";
  return text;
}

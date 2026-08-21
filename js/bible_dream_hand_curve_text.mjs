import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
export function bible_dream_hand_curve_text(before, start, end, after) {
  "Write the piece of path text that curves from one hand point to the next, bending at each end by the slope the neighbouring point gives it.";
  "★ THE SLOPE AT A POINT IS THE SLOPE BETWEEN THE ONE BEFORE IT AND THE ONE AFTER IT, AND THAT IS THE ONLY IDEA HERE. A hand is reported as a run of separate places, and joining them with straight lines draws the run and not the hand - every report becomes a corner, and a shape with no corners in it comes out as a chain of little angles. Asking each point which way the hand was going THROUGH it, rather than where it stopped, is what turns the same run of places back into a curve; the point still lies on the line, but the line arrives and leaves pointing the way the hand was actually travelling.";
  "The two ends are handled the same way and by two different neighbours, which is why four points are needed to draw between the middle two. A curve drawn from a slope at only one of its ends would leave the far end free to arrive at any angle, and the next curve would then leave at a different one - which is the corner again, moved.";
  "The sixth is the third of the half. The slope through a point is the whole step from its neighbour to its neighbour halved, and a cubic's handle reaches a third of the way along the slope it is given, so the two together are a sixth of the span between the neighbours. It is written as a sixth rather than as a half and then a third because the two are one decision - how far the bend carries - and splitting it into two numbers invites one of them to be tuned without the other.";
  "It gives back a piece to be added onto path text that already ends at the starting point, and never a whole path, because a hand's line is drawn as one growing stroke and not as a heap of pieces.";
  let out_x = start.x + divide(subtract(end.x, before.x), 6);
  let out_y = start.y + divide(subtract(end.y, before.y), 6);
  let in_x = subtract(end.x, divide(subtract(after.x, start.x), 6));
  let in_y = subtract(end.y, divide(subtract(after.y, start.y), 6));
  let text =
    " C" +
    out_x +
    "," +
    out_y +
    " " +
    in_x +
    "," +
    in_y +
    " " +
    end.x +
    "," +
    end.y;
  return text;
}

export function bible_dream_hand_curve_controls(before, start, end, after) {
  "Give the two handles of the cubic that curves from one hand point to the next, each pulled along the slope its own end's neighbours give it.";
  "★ THE SLOPE AT A POINT IS THE SLOPE BETWEEN THE ONE BEFORE IT AND THE ONE AFTER IT, AND THAT IS THE ONLY IDEA HERE. A hand is reported as a run of separate places, and joining them with straight lines draws the run and not the hand - every report becomes a corner, and a shape with no corners in it comes out as a chain of little angles. Asking each point which way the hand was going THROUGH it, rather than where it stopped, is what turns the same run of places back into a curve.";
  "The sixth is the third of the half. The slope through a point is the whole step from its neighbour to its neighbour halved, and a cubic's handle reaches a third of the way along the slope it is given, so the two together are a sixth of the span between the neighbours. It is written as a sixth rather than as a half and then a third because the two are one decision - how far the bend carries - and splitting it into two numbers invites one of them to be tuned without the other.";
  "★ THE HANDLES COME BACK AS PLACES RATHER THAN AS PATH TEXT, WHICH IS WHY THIS IS ITS OWN NAME. Text is enough for a line that only has to be drawn; a line whose width changes along it has to be drawn as its own two edges, and an edge is the curve shifted sideways by however wide it is there. Shifting a curve needs the handles as numbers, and the direction the curve leaves and arrives at is read off them too - so the same two places answer both the shape and the sideways.";
  let top = end.x - before.x;
  let out_x = start.x + top / 6;
  let top2 = end.y - before.y;
  let out_y = start.y + top2 / 6;
  let top3 = after.x - start.x;
  let in_x = end.x - top3 / 6;
  let top4 = after.y - start.y;
  let in_y = end.y - top4 / 6;
  let controls = {
    out: { x: out_x, y: out_y },
    in: { x: in_x, y: in_y },
  };
  return controls;
}

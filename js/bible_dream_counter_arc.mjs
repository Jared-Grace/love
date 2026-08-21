export function bible_dream_counter_arc(from, to, facing, bulge) {
  "Draw one small curve from one point to another, bowed against a given direction by a given amount.";
  "It bows AGAINST the direction it is handed rather than along it, which is the whole of what makes it a counter. Handed the way a bump faces, it comes back as a bump facing the other way, so a swell answered on both sides by two smaller hollows falls out of calling this twice with the swell's own facing.";
  "One control point and not two, because a counter is meant to read as a single simple answer to something more complicated. A curve with two controls can be made to do far more than that, and everything more it does is a line the passage never gave.";
  let middle_sideways = (from.x + to.x) / 2 - facing.x * bulge;
  let middle_up = (from.y + to.y) / 2 - facing.y * bulge;
  return "M" + from.x + "," + from.y + " Q" + middle_sideways + "," + middle_up + " " + to.x + "," + to.y;
}

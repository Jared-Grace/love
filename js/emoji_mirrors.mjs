import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { property_set } from "./property_set.mjs";
export function emoji_mirrors() {
  "Each little picture that has a twin facing the other way, and the twin it has.";
  "Only the ones that mean their own direction. An arrow pointing left means go back, and back is the other way round for somebody reading from the right - so on their screen the picture for it is the arrow pointing right. Nothing here is turned round because it happens to face sideways; it is turned round because what it means is turned round with it.";
  "Which is why up and down are absent, and why they are absent on purpose rather than not got to yet. The button to the top of the page goes to the top of the page for everybody. So is anything that faces a way without meaning it: a person walking, a hand waving. Adding one of those here would quietly break the picture rather than fix it, so a picture earns its place here only when somebody can say what it means and say that the meaning reverses.";
  "Listed both ways round. A screen is turned from one direction to the other and back again, and a list that only knew how to go one way would need asking twice as carefully at every place it is used.";
  let left = emoji_arrow_left();
  let right = emoji_arrow_right();
  let v = {};
  property_set(v, left, right);
  property_set(v, right, left);
  return v;
}

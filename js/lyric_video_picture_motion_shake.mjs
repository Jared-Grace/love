import { multiply_divide } from "./multiply_divide.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { number_round_places } from "./number_round_places.mjs";
export function lyric_video_picture_motion_shake(shake, t, width, height) {
  "$plain shake";
  "$plain t";
  "$plain width";
  "$plain height";
  "What a picture's named shake adds to where its moving box stands across and down, as two pieces of a frame expression: nothing at all for a picture that names no shake.";
  '★ A NAMED MOTION MAY ALSO SHAKE, FOR A MOMENT THAT IS AN EARTHQUAKE. The human asked for the stone rolled away on "raised to life" to look like the ground shaking. The shake is named by how far it throws the box at its strongest, as a share of the picture across, and by where in the shown span it starts and stops, as shares of that span, so it needs no clock of its own. It grows as the square of how far through that window it is, so it starts as a tremor and is mostly felt at the end; a straight rise was watched and read as too even, and grouped bursts spread unevenly were tried and liked less than one continuous shake. It stops at once at the end of the window, because it is meant to end on a flash that covers the stop. Up and down it throws the same distance on the screen as side to side, which is why the height share is worked out from the frame shape rather than asked for. A picture naming no shake moves exactly as before.';
  if (equal(shake, undefined)) {
    let r = {
      x: "",
      y: "",
    };
    return r;
  }
  let value = subtract(shake.to, shake.from);
  let grow =
    "pow(clip((" +
    t +
    "-" +
    shake.from +
    ")/" +
    number_round_places(value, 4) +
    ",0,1),2)*between(" +
    t +
    "," +
    shake.from +
    "," +
    shake.to +
    ")";
  let x = "+" + shake.amount + "*" + grow + "*sin(in*2.3)*cos(in*0.61)";
  let value2 = multiply_divide(shake.amount, width, height);
  let y = "+" + number_round_places(value2, 5) + "*" + grow + "*sin(in*1.9+1)";
  let r2 = {
    x,
    y,
  };
  return r2;
}

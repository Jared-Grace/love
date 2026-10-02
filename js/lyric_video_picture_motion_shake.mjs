import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { number_round_places } from "./number_round_places.mjs";
export function lyric_video_picture_motion_shake(shake, t, width, height) {
  "$plain shake";
  "$plain t";
  "$plain width";
  "$plain height";
  "What a picture's named shake adds to where its moving box stands across and down, as two pieces of a frame expression: nothing at all for a picture that names no shake.";
  '★ A NAMED MOTION MAY ALSO SHAKE, FOR A MOMENT THAT IS AN EARTHQUAKE. The human asked for the stone rolled away on "raised to life" to look like the ground shaking. The shake is named by how far it throws the box at its strongest, as a share of the picture across, and by its bursts, each a start and a stop given as shares of the shown span, so it needs no clock of its own. The human asked for it to come in grouped bursts spread unevenly, rising in a crescendo, so the gaps are authored rather than drawn at random, each burst swells and fades on its own, and the whole grows from a fifth of its throw at the first burst to all of it at the last. Up and down it throws the same distance on the screen as side to side, which is why the height share is worked out from the frame shape rather than asked for. A picture naming no shake moves exactly as before.';
  if (equal(shake, undefined)) {
    let r = {
      x: "",
      y: "",
    };
    return r;
  }
  let bursts = shake.bursts;
  let first = bursts[0][0];
  let last = bursts[subtract(bursts.length, 1)][1];
  let value = subtract(last, first);
  let level =
    "(0.2+0.8*clip((" +
    t +
    "-" +
    first +
    ")/" +
    number_round_places(value, 4) +
    ",0,1))";
  function lambda(burst) {
    let value3 = subtract(burst[1], burst[0]);
    let r3 =
      "between(" +
      t +
      "," +
      burst[0] +
      "," +
      burst[1] +
      ")*sin(PI*(" +
      t +
      "-" +
      burst[0] +
      ")/" +
      number_round_places(value3, 4) +
      ")";
    return r3;
  }
  let swells = bursts.map(lambda);
  let grow = level + "*(" + swells.join("+") + ")";
  let x = "+" + shake.amount + "*" + grow + "*sin(in*2.3)*cos(in*0.61)";
  let top = multiply(shake.amount, width);
  let value2 = divide(top, height);
  let y = "+" + number_round_places(value2, 5) + "*" + grow + "*sin(in*1.9+1)";
  let r2 = {
    x,
    y,
  };
  return r2;
}

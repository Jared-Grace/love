import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function bless_vehicle_gap_ms(fraction) {
  arguments_assert(arguments, 1);
  ("How long the road stays empty behind a car that has just left it, given a number between");
  ("nought and one.");
  ("A car drives off the end of the street and comes back on at the other end, because the");
  ("street is a closed strip with nothing beyond either kerb. Sent straight back it would");
  ("appear the instant it vanished, and a player looking at the far end would watch the same");
  ("car pop back into being - which is the one thing that says out loud that the road only");
  ("goes as far as the houses do.");
  ("A wait is what turns that into traffic. Cars on a real road arrive in clumps with gaps");
  ("between them, so a gap of a second or two is not a concession to the trick, it is the");
  ("thing being drawn. The player watching the street sees a car go past, then nothing, then");
  ("another car - and never sees a beginning.");
  ("Between one and four seconds. Under a second and the road is a conveyor; much over four");
  ("and a street with two cars a lane has long stretches with nothing on it at all, which");
  ("reads as broken rather than as quiet.");
  ("Drawn fresh every time round rather than fixed per car, so the same two cars do not fall");
  ("into a rhythm with each other and start crossing at the same place every lap.");
  let span = multiply(fraction, 3000);
  let ms = add(1000, span);
  return ms;
}

import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_bless_repaint_ms() {
  arguments_assert(arguments, 0);
  ("How often the screen is drawn again while the crowd is walking, in thousandths of a");
  ("second.");
  ("Drawing is asked for on its own steady beat rather than after each person's step. Once");
  ("everybody walks to their own clock the steps no longer arrive together, and a repaint");
  ("hung off each of them would ask for the whole screen dozens of times a second while");
  ("drawing the same picture over and over - most of that work thrown away before anybody");
  ("could see it.");
  ("A fifth of a second is faster than a person notices a delay and far slower than the");
  ("steps arrive, so what is on the screen is never more than a moment behind where");
  ("everybody actually is, and the cost does not grow when the crowd does.");
  let ms = 200;
  return ms;
}

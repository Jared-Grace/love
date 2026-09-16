import { arguments_assert } from "./arguments_assert.mjs";
export function bless_camera_close_factor() {
  arguments_assert(arguments, 0);
  ("How much larger a square is drawn when the camera comes in close to watch something -");
  ("the close view is this many times the distance the game is ordinarily played at.");
  ("It is a MULTIPLE of the size the map is already at rather than a number of squares to");
  ("fit across the screen, and that is the whole of why it behaves the same on a phone and");
  ("on a laptop. A close-up written as squares-across is a different amount of zoom on");
  ("every screen: the same rule that barely leans in on a narrow phone throws a wide laptop");
  ("five times closer, because the ordinary view already fits far more on a wide screen.");
  ("Written as a multiple, what moves is the same everywhere - whatever you could see, you");
  ("now see this much less of, this much larger.");
  ("Nearly twice is about as far as it can usefully go. Less and it reads as the page having");
  ("jolted rather than as the camera having moved; more and the street either side is gone");
  ("before the thing being looked at has finished happening, and a walker watching for cars");
  ("can no longer see the road they are waiting on.");
  let factor = 1.8;
  return factor;
}

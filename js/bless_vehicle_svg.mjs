import { arguments_assert } from "./arguments_assert.mjs";
export function bless_vehicle_svg(colour) {
  arguments_assert(arguments, 1);
  ("The drawing of one car, in the colour asked for, seen from the SIDE.");
  ("From the side because that is how everything else in this game is seen. A house shows");
  ("its front and a strip of roof, a person shows their face; the view is from in front and a");
  ("little above, never from straight overhead. A car drawn from overhead is the one thing on");
  ("the street being looked at from somewhere else.");
  ("It was drawn from overhead first, and the fault that came back is worth keeping because");
  ("nothing about it was a mistake in the arithmetic. A car seen from above is a body with");
  ("wheels sticking out at the top and the bottom of it, so the wheels sat on the two edges of");
  ("the square and the coloured body sat in the middle between them. On the near lane the");
  ("lower wheels land exactly on the kerb - and what that reads as, to somebody looking at it,");
  ("is a car with its tyres on the road and the rest of it out on the grass. The car was on");
  ("the road the whole time, measured square by square. It just was not drawn as though it");
  ("were standing on anything.");
  ("From the side there is nothing to read wrongly, because the wheels are at the BOTTOM. A");
  ("thing whose wheels are at the bottom is standing on whatever is under it, the same way a");
  ("person with feet at the bottom is standing on the pavement. That is the whole repair.");
  ("It sits in the lower part of its square rather than filling it, which is what leaves the");
  ("wheels a floor to stand on. Filled to the edges, the wheels would be on the line between");
  ("two squares again and the question of which one the car is on would be open again.");
  ("Two squares long and about three quarters of one tall, which is roughly the proportion of");
  ("a real car and is the same scale a person is drawn at - a car is longer than a person is");
  ("tall and not much higher than one. Drawn much taller it stops being traffic and starts");
  ("being a bus; drawn much shorter it reads as a stone on the road.");
  ("Pointing EAST, front to the right, and the westbound cars are the same drawing mirrored.");
  ("One drawing for both ways is why the front is somewhere definite: the headlight at the");
  ("front and the red lamp at the back are what say which way a car is going, and mirrored");
  ("they swap over by themselves.");
  ("MARKUP rather than a picture file, because there is no picture of a car anywhere in this");
  ("repo and the game is not asking for one. Every car is the same shape in a different");
  ("colour, which is a handful of shapes with one word changed in them, and it costs no");
  ("request, no cache and no waiting - the street is drawn with it the moment the world is.");
  ("Kept plain on purpose. It is looked at from a height where a square is a fifth of a phone");
  ("screen, so a window, a wheel and a light are all that survive the size; anything finer is");
  ("work that reaches nobody.");
  let svg = `<svg viewBox="0 0 40 20" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="20" cy="19.1" rx="17.5" ry="1.1" fill="rgba(0,0,0,0.28)" />
  <path d="M 12 10.2 L 15.6 4.3 L 26.4 4.3 L 30.2 10.2 Z" fill="${colour}" />
  <path d="M 12 10.2 L 15.6 4.3 L 26.4 4.3 L 30.2 10.2 Z" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="0.7" />
  <path d="M 14.4 9.4 L 16.7 5.5 L 20.3 5.5 L 20.3 9.4 Z" fill="rgba(195,228,247,0.92)" />
  <path d="M 21.5 9.4 L 21.5 5.5 L 25.5 5.5 L 27.9 9.4 Z" fill="rgba(195,228,247,0.92)" />
  <rect x="1.5" y="9.6" width="37" height="7.3" rx="2.6" fill="${colour}" />
  <rect x="1.5" y="14.3" width="37" height="2.6" rx="1.3" fill="rgba(0,0,0,0.2)" />
  <rect x="1.5" y="9.6" width="37" height="7.3" rx="2.6" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="0.7" />
  <rect x="20.4" y="10.4" width="0.8" height="4.6" fill="rgba(0,0,0,0.28)" />
  <rect x="35.4" y="10.8" width="2.8" height="2.3" rx="0.9" fill="rgba(255,250,220,0.95)" />
  <rect x="1.9" y="10.8" width="2.3" height="2.3" rx="0.9" fill="rgba(220,60,50,0.95)" />
  <circle cx="11.2" cy="16.7" r="3" fill="#191919" />
  <circle cx="28.8" cy="16.7" r="3" fill="#191919" />
  <circle cx="11.2" cy="16.7" r="1.2" fill="#9aa0a6" />
  <circle cx="28.8" cy="16.7" r="1.2" fill="#9aa0a6" />
</svg>`;
  return svg;
}

import { arguments_assert } from "./arguments_assert.mjs";
export function bless_vehicle_svg(colour) {
  arguments_assert(arguments, 1);
  ("The drawing of one car, in the colour asked for, seen from the side AND from above at");
  ("once - the near flank, and the roof and bonnet lying back on top of it.");
  ("Three quarters rather than flat side-on, because that is the view the rest of the street");
  ("is drawn in. A house shows its front and a strip of roof; the camera is in front of the");
  ("row and a little over it. A car with no roof showing is being looked at from ground");
  ("level, which is a second camera in the same picture.");
  ("It reached that in two wrong steps, and both are worth keeping because each one was a");
  ("different fault and the second was caused by fixing the first.");
  ("FROM OVERHEAD first. A car seen from straight above is a body with wheels sticking out at");
  ("the top and the bottom of it, so the wheels sat on the two edges of the square and the");
  ("coloured body sat in the middle between them. On the near lane the lower wheels land");
  ("exactly on the kerb, and what that reads as is a car with its tyres on the road and the");
  ("rest of it out on the grass. Nothing was in the wrong square. It simply was not drawn as");
  ("though it were standing on anything.");
  ("Then FLAT SIDE-ON, with the wheels near the bottom edge. That fixed the standing and");
  ("caused the next thing: a car whose weight is all in the low part of its square reads as");
  ("having slipped down out of the lane, and on the near lane the square below really is");
  ("grass, so the eye finishes the sentence.");
  ("So it is CENTRED in its square now, with about a sixth of the square clear above the roof");
  ("and about a sixth clear below the tyres. That clear strip is the whole of the repair: a");
  ("tyre touching the edge of a square is on the line between two squares, which is the one");
  ("place a reader cannot tell which of them the car is on. A tyre with road showing all");
  ("round it is on the road, and nobody has to measure anything to see it.");
  ("Two squares long and rather over half of one tall. That is roughly the proportion of a");
  ("real car and about the scale a person is drawn at - a car is longer than a person is tall");
  ("and not much higher than one. Drawn taller it stops being traffic and starts being a bus;");
  ("drawn shorter it reads as a stone lying on the road.");
  ("The roof is the SAME colour lightened rather than a second colour chosen, and the lower");
  ("part of the flank the same colour darkened. Light falls from above, so a surface facing");
  ("the sky is the pale one - and doing it as a wash over the colour rather than as a palette");
  ("means it works for a colour nobody has picked yet, which is the point, since the colour");
  ("arrives from outside.");
  ("Pointing EAST, front to the right, and the westbound cars are the same drawing mirrored.");
  ("One drawing for both ways is why the front is somewhere definite: the headlight at the");
  ("front and the red lamp at the back are what say which way a car is going, and mirrored");
  ("they swap over by themselves.");
  ("MARKUP rather than a picture file, because there is no picture of a car anywhere in this");
  ("repo and the game is not asking for one. Every car is the same shape with one word");
  ("changed in it, and it costs no request, no cache and no waiting - the street is drawn");
  ("with it the moment the world is.");
  ("Kept plain on purpose. It is looked at from a height where a square is a fifth of a phone");
  ("screen, so a pale roof, a dark flank, two wheels and a light are all that survive the");
  ("size; anything finer is work that reaches nobody.");
  let svg = `<svg viewBox="0 0 40 20" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="20" cy="15.9" rx="16.5" ry="0.85" fill="rgba(0,0,0,0.3)" />
  <rect x="3" y="4.4" width="34" height="6" rx="3" fill="${colour}" />
  <rect x="3" y="4.4" width="34" height="6" rx="3" fill="rgba(255,255,255,0.32)" />
  <rect x="13.5" y="3.5" width="13.5" height="5.4" rx="2" fill="${colour}" />
  <rect x="13.5" y="3.5" width="13.5" height="5.4" rx="2" fill="rgba(255,255,255,0.5)" />
  <rect x="13.5" y="3.5" width="13.5" height="5.4" rx="2" fill="none" stroke="rgba(0,0,0,0.32)" stroke-width="0.55" />
  <rect x="1.5" y="8.6" width="37" height="5.7" rx="2.3" fill="${colour}" />
  <rect x="1.5" y="11.7" width="37" height="2.6" rx="1.3" fill="rgba(0,0,0,0.22)" />
  <rect x="1.5" y="8.6" width="37" height="5.7" rx="2.3" fill="none" stroke="rgba(0,0,0,0.42)" stroke-width="0.65" />
  <rect x="14.4" y="9.1" width="5.4" height="2.3" rx="0.7" fill="rgba(195,228,247,0.92)" />
  <rect x="20.8" y="9.1" width="5.8" height="2.3" rx="0.7" fill="rgba(195,228,247,0.92)" />
  <rect x="20.1" y="9.1" width="0.6" height="4" fill="rgba(0,0,0,0.25)" />
  <rect x="35.4" y="11.2" width="2.8" height="2.1" rx="0.8" fill="rgba(255,250,220,0.95)" />
  <rect x="1.9" y="11.2" width="2.3" height="2.1" rx="0.8" fill="rgba(220,60,50,0.95)" />
  <circle cx="11" cy="13.6" r="2.1" fill="#191919" />
  <circle cx="29" cy="13.6" r="2.1" fill="#191919" />
  <circle cx="11" cy="13.6" r="0.85" fill="#9aa0a6" />
  <circle cx="29" cy="13.6" r="0.85" fill="#9aa0a6" />
</svg>`;
  return svg;
}

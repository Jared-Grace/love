import { arguments_assert } from "./arguments_assert.mjs";
export function bless_vehicle_svg(colour) {
  arguments_assert(arguments, 1);
  ("The drawing of one car, in the colour asked for, seen from the side AND from above at");
  ("once - the near flank, the roof and bonnet lying back on top of it, and the windows");
  ("standing up between the two.");
  ("Three quarters rather than flat side-on, because that is the view the rest of the street");
  ("is drawn in. A house shows its front and a strip of roof; the camera is in front of the");
  ("row and a little over it. A car with no roof showing is being looked at from ground");
  ("level, which is a second camera in the same picture.");
  ("It reached that in three wrong steps, and all of them are worth keeping, because each was");
  ("a different fault and each was caused by repairing the one before it.");
  ("FROM OVERHEAD first. A car seen from straight above is a body with wheels sticking out at");
  ("the top and the bottom of it, so the wheels sat on the two edges of the square and the");
  ("coloured body sat in the middle between them. On the near lane the lower wheels land");
  ("exactly on the kerb, and what that reads as is a car with its tyres on the road and the");
  ("rest of it out on the grass. Nothing was in the wrong square. It simply was not drawn as");
  ("though it were standing on anything.");
  ("Then FLAT SIDE-ON, wheels near the bottom edge. That fixed the standing and caused the");
  ("next thing: a car whose weight is all in the low part of its square reads as having");
  ("slipped down out of the lane, and on the near lane the square below really is grass, so");
  ("the eye finishes the sentence.");
  ("Then CENTRED in its square, which fixed that and left the last one. Everything had to fit");
  ("inside one square, and a car is about two squares long, so it came out four times longer");
  ("than it was tall - a bar of colour with wheels under it. The part with nowhere to go was");
  ("the cabin, and the cabin is the part that says car.");
  ("So the picture is TWO squares tall and hangs over the square above. The whole lower half");
  ("of it is the square the car is on: the flank, the wheels, and a clear strip of road under");
  ("the tyres. Only the roof and the windows are up in the square above. Which square the car");
  ("is on never changed and is not in question - the wheels answer that, and they are");
  ("standing on road with road showing all round them.");
  ("A tyre with road showing round it is the whole of what settled the earlier complaints. A");
  ("tyre touching the edge of a square is on the line between two squares, which is the one");
  ("place a reader cannot tell which of them the car is on.");
  ("The ROOF is the same colour lightened and the lower flank the same colour darkened. Light");
  ("falls from above, so a surface facing the sky is the pale one - and doing it as a wash");
  ("over the colour rather than as a chosen palette means it works for a colour nobody has");
  ("picked yet, which is the point, since the colour arrives from outside.");
  ("Pointing EAST, front to the right, and the westbound cars are the same drawing mirrored.");
  ("One drawing for both ways is why the front is somewhere definite: the headlight at the");
  ("front and the red lamp at the back are what say which way a car is going, and mirrored");
  ("they swap over by themselves.");
  ("MARKUP rather than a picture file, because there is no picture of a car anywhere in this");
  ("repo and the game is not asking for one. Every car is the same shape with one word");
  ("changed in it, and it costs no request, no cache and no waiting - the street is drawn");
  ("with it the moment the world is.");
  ("The square it is drawn in is TWENTY units of this picture, which is why the numbers below");
  ("run to forty. The road the car stands on is the lower twenty; the borrowed square above");
  ("is the upper twenty. Reading any measurement here is asking which of those it falls in.");
  ("Kept plain on purpose. It is looked at from a height where a square is a fifth of a phone");
  ("screen, so a pale roof, two windows, a dark flank and two wheels are all that survive the");
  ("size; anything finer is work that reaches nobody.");
  let svg = `<svg viewBox="0 0 40 40" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="20" cy="36.4" rx="16.5" ry="1" fill="rgba(0,0,0,0.3)" />
  <rect x="3" y="21.8" width="34" height="6.4" rx="3.2" fill="${colour}" />
  <rect x="3" y="21.8" width="34" height="6.4" rx="3.2" fill="rgba(255,255,255,0.26)" />
  <rect x="12.5" y="14.5" width="16" height="12" rx="2.6" fill="${colour}" />
  <rect x="12.5" y="14.5" width="16" height="4.4" rx="2.2" fill="rgba(255,255,255,0.44)" />
  <rect x="12.5" y="14.5" width="16" height="12" rx="2.6" fill="none" stroke="rgba(0,0,0,0.34)" stroke-width="0.6" />
  <rect x="14" y="18.8" width="6.2" height="5.2" rx="0.9" fill="rgba(195,228,247,0.92)" />
  <rect x="21.3" y="18.8" width="5.9" height="5.2" rx="0.9" fill="rgba(195,228,247,0.92)" />
  <rect x="1.5" y="26" width="37" height="8.6" rx="2.8" fill="${colour}" />
  <rect x="1.5" y="31.2" width="37" height="3.4" rx="1.7" fill="rgba(0,0,0,0.22)" />
  <rect x="1.5" y="26" width="37" height="8.6" rx="2.8" fill="none" stroke="rgba(0,0,0,0.42)" stroke-width="0.7" />
  <rect x="20.5" y="26.6" width="0.7" height="5.4" fill="rgba(0,0,0,0.25)" />
  <rect x="35.3" y="28.4" width="2.9" height="2.6" rx="0.9" fill="rgba(255,250,220,0.95)" />
  <rect x="1.9" y="28.4" width="2.4" height="2.6" rx="0.9" fill="rgba(220,60,50,0.95)" />
  <circle cx="11" cy="33.4" r="2.6" fill="#191919" />
  <circle cx="29" cy="33.4" r="2.6" fill="#191919" />
  <circle cx="11" cy="33.4" r="1.05" fill="#9aa0a6" />
  <circle cx="29" cy="33.4" r="1.05" fill="#9aa0a6" />
</svg>`;
  return svg;
}

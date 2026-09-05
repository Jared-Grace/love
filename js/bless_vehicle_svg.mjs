import { arguments_assert } from "./arguments_assert.mjs";
export function bless_vehicle_svg(colour) {
  arguments_assert(arguments, 1);
  ("A car seen from directly above, drawn as markup rather than fetched as a picture.");
  ("It is a PLACEHOLDER and should be read as one. Every character in this game is a");
  ("photograph-like sprite drawn by somebody, and there is no drawing of a car anywhere in");
  ("the repo; rather than ship a street with nothing moving on it while waiting for one, this");
  ("says the shape in the smallest way that reads as a car from the height the player is at.");
  ("When real art arrives, this function is the only thing that has to go.");
  ("Drawn as markup for one reason above the rest: nothing has to be uploaded, addressed,");
  ("cached or version stamped. A picture is a file somewhere with a URL and a version on it, and a");
  ("wrong one of those is a silent blank square. Markup handed straight to the element cannot");
  ("be stale and cannot fail to load.");
  ("Pointed EAST, and only east. A car going the other way is this drawing mirrored, which is");
  ("one line of style where a second drawing would be a second thing to keep right. The same");
  ("reasoning the arrow uses.");
  ("Two squares long and one square across, which is why the box is forty by twenty. A car is");
  ("about twice as long as it is wide seen from above, and a car exactly as long as a person");
  ("is wide would read as a crate.");
  ("The paint is the only thing that changes. Everything drawn on top of it - the cabin, the");
  ("glass, the wheels - is black or white at a low opacity rather than a chosen colour, so it");
  ("darkens a light car and lightens a dark one without any colour having to be worked out.");
  let svg = `<svg viewBox="0 0 40 20" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="7" y="0.5" width="6" height="4" rx="1.2" fill="#1a1a1a" />
  <rect x="7" y="15.5" width="6" height="4" rx="1.2" fill="#1a1a1a" />
  <rect x="26" y="0.5" width="6" height="4" rx="1.2" fill="#1a1a1a" />
  <rect x="26" y="15.5" width="6" height="4" rx="1.2" fill="#1a1a1a" />
  <rect x="1.5" y="2.5" width="37" height="15" rx="5" fill="${colour}" />
  <rect x="1.5" y="2.5" width="37" height="15" rx="5" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="1" />
  <rect x="10" y="4.5" width="17" height="11" rx="3" fill="rgba(0,0,0,0.28)" />
  <rect x="24" y="5.5" width="3.5" height="9" rx="1.2" fill="rgba(190,225,245,0.85)" />
  <rect x="9.5" y="5.5" width="3" height="9" rx="1.2" fill="rgba(190,225,245,0.6)" />
  <rect x="35.5" y="4" width="2.5" height="3" rx="1" fill="rgba(255,250,220,0.95)" />
  <rect x="35.5" y="13" width="2.5" height="3" rx="1" fill="rgba(255,250,220,0.95)" />
  <rect x="2" y="4" width="2" height="3" rx="1" fill="rgba(220,60,50,0.9)" />
  <rect x="2" y="13" width="2" height="3" rx="1" fill="rgba(220,60,50,0.9)" />
</svg>`;
  return svg;
}

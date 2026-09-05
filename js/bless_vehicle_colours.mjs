import { arguments_assert } from "./arguments_assert.mjs";
export function bless_vehicle_colours() {
  arguments_assert(arguments, 0);
  ("What colour the cars on the street are painted.");
  ("A car is the only thing on this street drawn in a colour of its own rather than in a");
  ("material off the tile set, because it is the only thing that is not ground. Ground is");
  ("photographed earth and brick and grass; a car sat on top of that has to read as a made");
  ("object at a glance, from a long way up, while it is moving. Flat paint does that and a");
  ("texture does not.");
  ("Chosen to sit apart from what they drive over. The road surfaces are grey and brown, the");
  ("lawns green and the pavement pale, so these are the colours left over - and each is dark");
  ("enough to hold its shape against pale concrete and bright enough to hold it against dark");
  ("gravel. A middling grey car would be right about a real street and invisible on this one.");
  ("SEVERAL of them rather than one, so that two cars in the same lane are two cars rather");
  ("than the same one seen twice. Seven is enough that a player watching one street rarely");
  ("sees a pair, and few enough that they all stay clearly different rather than turning into");
  ("a gradient.");
  ("They are placeholder paint on a placeholder drawing. When somebody draws real cars these");
  ("go, and the list is here rather than inside the drawing so that the swap is one file.");
  let colours = [
    "#c62828",
    "#1565c0",
    "#f9a825",
    "#2e7d32",
    "#ffffff",
    "#37474f",
    "#6a1b9a",
  ];
  return colours;
}

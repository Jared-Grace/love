export function g_directions_keypad() {
  "The four ways to turn, in the order they are laid out as buttons along the bottom of a";
  "screen - left, up, down, right.";
  "It is the keyboard's own arrangement flattened into one row. On every keyboard anybody";
  "has used, left is the leftmost key and right is the rightmost, with up and down between";
  "them; up sits above down, so read into a single row it comes first. A player does not";
  "learn that layout here, they arrive already knowing it, and a row that disagrees with it";
  "is one every press has to be thought about.";
  "It is SEPARATE from the list the character art is drawn from, and that separation is the";
  "whole point of it. That list is the names of the rotation pictures, in whatever order";
  "they are convenient to preload in, and it read as down, up, right, left when it was";
  "hung on buttons - which is what these buttons did. A drawing list happening to be four";
  "items long does not make it a layout.";
  "West and east rather than left and right, because a facing is what the game stores and";
  "turning a name into a direction here would be a second spelling of something already";
  "written down.";
  let keypad = ["west", "north", "south", "east"];
  return keypad;
}

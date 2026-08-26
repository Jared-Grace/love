export function g_img_square_layer_variable() {
  "The style variable that says which drawing layer a square belongs to - the ground, the";
  "characters, the marks over their heads - written onto the square itself when it is made.";
  "It is carried on the element rather than passed along because the one place that knows";
  "the layer is where a square is first placed, and the one place that has to write the";
  "depth is where it is placed AGAIN on every step - and that second place is handed nothing";
  "but the element. Asking the element what layer it is on is what lets a move stay a move.";
  let name = "--g-layer";
  return name;
}

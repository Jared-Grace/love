export function g_z_layer_step() {
  "How far apart the drawing layers of a map are set, counted in z-index - and so how much";
  "room each one leaves inside itself for the things on it to be ordered among themselves.";
  "The layers used to be numbered one after another, which left a layer no room at all: the";
  "characters were all the same number, so which of two overlapping people painted in front";
  "was decided by which was made first. Spacing the layers out is what lets a person's ROW";
  "be added on top of their layer, so the one further down the screen is drawn in front.";
  "A hundred, because the world is twenty-seven tiles across and a row can therefore never";
  "reach into the next layer, and because nine layers a hundred apart still finish below the";
  "thousand where the overlays sit - so a menu, a toast or a loading cover covers the map";
  "exactly as it did before.";
  let step = 100;
  return step;
}

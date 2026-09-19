export function html_text_halo_directions() {
  "how many copies of the lettering a ring round it is made of, set evenly round the circle";
  "ENOUGH THAT THE RING'S EDGE IS THE LETTER'S EDGE AND NOT A POLYGON. Each copy contributes an arc of the ring, and between two neighbouring copies the ring falls short of the radius by the sagitta - the little bite a chord takes out of an arc. At sixteen the gap between neighbours is a little over a fifth of a radian and that shortfall is under two percent of the radius, which on a ring a tenth of an em wide is a fraction of a pixel and so is nothing at all.";
  "Eight is the count this started at and is where the fault showed: a twelfth of the radius missing between neighbours, which a hairline hides and a ring thick enough to see does not.";
  "Going further costs and buys nothing. The shortfall falls with the square of the count, so thirty-two would take it from two percent to half of one, on a ring where two percent is already invisible - and every copy is another shadow the browser paints behind every letter that wears one.";
  let v = 16;
  return v;
}

export function bless_pavements() {
  "The ground a pavement can be made of - one kind per block, taken in turn.";
  "Named here rather than written into the laying of it, so the one place that decides what";
  "a street looks like is a place with a name. It is a choice about the picture and nothing";
  "else - walking does not read it, because a pavement is walkable for the same reason grass";
  "is: it is simply not one of the solids.";
  "There is more than one because a block is a PLACE and has to look like one. A pavement is";
  "the widest thing a block is made of - fifty-seven squares against five fronts - so it is";
  "the first thing a player sees change on walking from one street to the next, and the";
  "cheapest way to say that the walk was to somewhere rather than round in a circle.";
  let laid = "construction_path";
  let cobbled = "pebbles";
  let items = [laid, cobbled];
  return items;
}

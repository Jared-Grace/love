export function app_g_bless_crowd() {
  "The people standing about on the dev screen's world, as tiles they occupy.";
  "Placed by hand rather than scattered at random, so the screen answers the same way every";
  "time it is opened - a cone whose reach changes between two looks cannot be judged, and";
  "judging the cone's reach is the whole reason this screen exists.";
  "Eight of them stand inside the cone the player starts facing, which is a count rung the";
  "ladder has, so the first thing the screen shows is a prayer the ladder can actually grow";
  "into. The other eight stand outside it, so turning away visibly costs you people.";
  let people = [
    { x: -3, y: -3 },
    { x: -2, y: -3 },
    { x: 0, y: -3 },
    { x: 1, y: -3 },
    { x: 3, y: -3 },
    { x: -1, y: -2 },
    { x: 2, y: -2 },
    { x: 0, y: -1 },
    { x: -4, y: -4 },
    { x: 4, y: -3 },
    { x: -4, y: -1 },
    { x: 4, y: 0 },
    { x: -2, y: 1 },
    { x: 3, y: 2 },
    { x: 0, y: 3 },
    { x: 1, y: 5 },
  ];
  return people;
}

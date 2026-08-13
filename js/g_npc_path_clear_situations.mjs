export function g_npc_path_clear_situations() {
  "Every arrangement of people that makes the way open in a different way, named - one per situation, so each can be walked into on its own instead of hoped for while playing.";
  "The mechanic has SEVERAL answers and it chooses between them silently. A way round is taken while one exists; a crowd across the way splits sideways rather than anybody being shoved along; each opening further off waits longer than the one before it. Playing the game you get whichever answer the tiles you happened to walk on asked for, and there is no way to ask for the others - so the ones you never happened to trigger are the ones that break.";
  "PEOPLE ARE THE WALLS here, not the terrain. The map is generated, so a corridor cannot be asked for - but the way ROUND treats a person as blocking, so a person is a wall and a gap between two is a door.";
  "HEMMED is why most of these are shaped the way they are, and it is the thing that is easy to get wrong. A crowd only opens on a way that goes THROUGH it, and the way round is taken whenever one exists at all - so a row of people on open ground is simply walked round, and nothing parts. What forces the way through is having no way round, which on an open map means the four tiles beside the player. Hemmed in fills them, and then every one of these plays as its name says.";
  "PEOPLE are offsets from where the player is standing, and TAP is the tile to tap, given the same way. East is a larger x. The route puts a gold tile on the tap, so there is nothing to count out by hand.";
  "TAPPED says the tap lands on a PERSON rather than on ground, which is its own situation: whoever is tapped is the one member of a crowd who must not be shuffled aside, because walking up to somebody means arriving where they were tapped.";
  "TWO ARE DELIBERATELY ABSENT. A line backing down its own trail is the people FOLLOWING the player getting out of the way, which is a different mechanic and wants its own door. And a crowd with nowhere to shuffle to, passed one at a time by trading places, needs the crowd hemmed by water or by the edge of the map - which is terrain, and terrain is the one thing an arrangement of people cannot put where it likes.";
  let r = [
    {
      name: "around",
      what: "Nobody should move - there is a way round.",
      hemmed: false,
      people: [{ x: 2, y: 0 }],
      tapped: false,
      tap: { x: 4, y: 0 },
    },
    {
      name: "part",
      what: "Watch the row SPLIT and a lane open down the middle.",
      hemmed: true,
      people: [
        { x: 2, y: -1 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
      ],
      tapped: false,
      tap: { x: 5, y: 0 },
    },
    {
      name: "ripple",
      what: "Watch the openings run away from you, one after another.",
      hemmed: true,
      people: [
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
        { x: 5, y: 0 },
        { x: 6, y: 0 },
      ],
      tapped: false,
      tap: { x: 8, y: 0 },
    },
    {
      name: "lane",
      what: "A crowd three deep - watch the lane open the whole way down it.",
      hemmed: true,
      people: [
        { x: 2, y: -1 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 3, y: -1 },
        { x: 3, y: 0 },
        { x: 3, y: 1 },
        { x: 4, y: -1 },
        { x: 4, y: 0 },
        { x: 4, y: 1 },
      ],
      tapped: false,
      tap: { x: 6, y: 0 },
    },
    {
      name: "tapped",
      what: "The gold is on a PERSON - watch the crowd open and that one stay.",
      hemmed: true,
      people: [
        { x: 2, y: -1 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 4, y: 0 },
      ],
      tapped: true,
      tap: { x: 4, y: 0 },
    },
  ];
  return r;
}

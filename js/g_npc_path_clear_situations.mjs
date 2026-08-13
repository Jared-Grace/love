export function g_npc_path_clear_situations() {
  "Every arrangement of people that makes the way open in a different way, named - one per situation, so each can be walked into on its own instead of hoped for while playing.";
  "The mechanic has SEVERAL answers and they are chosen between silently. A way round is taken before a way through; a row across the way splits sideways before anybody is pushed along; a crowd too deep to open is passed one at a time instead. Playing the game you see whichever one the tiles you happened to walk on asked for, and there is no way to ask for the others - so the ones you never happened to trigger are the ones that break.";
  "PEOPLE ARE THE WALLS here, not the terrain. The map is generated, so a corridor or a dead end cannot be asked for - but the pathfinder treats a person as blocking, so a row of strangers IS a wall and a gap in one IS a door. Every arrangement below is therefore built out of nothing but where people are standing, which is the one thing a route can put wherever it likes.";
  "PEOPLE are offsets from where the player is standing, and TAP is the tile to tap, given the same way. East is a larger x. The route puts a gold tile on the tap so there is nothing to count out by hand.";
  "TAPPED says the tap lands on a PERSON rather than on ground, which is its own situation: whoever was tapped is the one member of a crowd who must not be shuffled aside, because walking up to somebody means arriving where they were tapped.";
  "The LINE situations are deliberately absent. A line backing down its own trail is people getting out of the way of the person they are following, which is a different mechanic reached through a different door - these are the ones where STRANGERS open a way.";
  let r = [
    {
      name: "around",
      what: "Nobody should move. One person stands between you and the tile, and a way round exists - so the way round is taken, because it always is while it exists.",
      people: [{ x: 2, y: 0 }],
      tapped: false,
      tap: { x: 4, y: 0 },
    },
    {
      name: "part",
      what: "A row of three stands across the way. Watch it SPLIT - the two halves step apart along their own rows and a lane opens down the middle, rather than anybody being shoved along in front of you.",
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
      what: "Five people stand in single file down the way you are going. Watch the openings run AWAY from you like a wave - each one waits a little longer than the one before it, so you can see why each person moved.",
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
      name: "deep",
      what: "A crowd three deep and five across. A crowd does not merely let one person through - watch a lane open the whole way down the middle of it, both halves stepping apart together.",
      people: [
        { x: 2, y: -2 },
        { x: 2, y: -1 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: -2 },
        { x: 3, y: -1 },
        { x: 3, y: 0 },
        { x: 3, y: 1 },
        { x: 3, y: 2 },
        { x: 4, y: -2 },
        { x: 4, y: -1 },
        { x: 4, y: 0 },
        { x: 4, y: 1 },
        { x: 4, y: 2 },
      ],
      tapped: false,
      tap: { x: 6, y: 0 },
    },
    {
      name: "tapped",
      what: "The gold is on a PERSON standing behind a row of three. Watch the row open and that person STAY - walking up to somebody means finding them where you tapped them, so they are the one who must not be shuffled aside.",
      people: [
        { x: 2, y: -1 },
        { x: 2, y: 0 },
        { x: 2, y: 1 },
        { x: 4, y: 0 },
      ],
      tapped: true,
      tap: { x: 4, y: 0 },
    },
    {
      name: "pocket",
      what: "You are walled in by people with one gap, and the gap is far from the tile. Nowhere near enough room for the crowd to open, so watch yourself pass the people in the way ONE AT A TIME, trading places with each as you meet them.",
      people: [
        { x: -1, y: -1 },
        { x: 0, y: -1 },
        { x: 1, y: -1 },
        { x: -1, y: 0 },
        { x: 1, y: 0 },
        { x: -1, y: 1 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
      ],
      tapped: false,
      tap: { x: 5, y: 0 },
    },
  ];
  return r;
}

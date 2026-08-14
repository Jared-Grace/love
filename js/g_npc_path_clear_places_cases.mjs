export function g_npc_path_clear_places_cases() {
  "everything that happens to an arrangement AFTER it has been turned, written down as a patch of dry land and the tiles that come back.";
  "the player stands at 0,0 and every case leaves only an eastward strip dry, so the turning is settled the same way each time and what is being read is the four things done on top of it: the four tiles beside the player added when the arrangement is hemmed, the tap folded in among the people when the tap lands on somebody, water dropped, and a tile named twice asked for once.";
  "LAND IS LISTED RATHER THAN WATER, because a case that says where the dry land is can be read without holding a map in mind, and everything not listed is sea.";
  "THE ORDER OF THE PEOPLE IS PART OF THE ANSWER and is not incidental: they come back in the order they were first asked for, the arrangement's own people before the four beside the player. Somebody reading a failure needs to see WHICH tile moved, and a set would only say that something did.";
  let player = {
    x: 0,
    y: 0,
  };
  let r = [
    {
      why: "the plain case: nobody hemmed in, nothing tapped on a person, every tile dry. What is asked for is what comes back, and it is here so that the three cases below are read as differences from something rather than each from nothing",
      player,
      situation: {
        people: [
          {
            x: 2,
            y: 0,
          },
        ],
        hemmed: false,
        tapped: false,
        tap: {
          x: 4,
          y: 0,
        },
      },
      land: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 2,
          y: 0,
        },
        {
          x: 4,
          y: 0,
        },
      ],
      places: {
        people: [
          {
            x: 2,
            y: 0,
          },
        ],
        tap: {
          x: 4,
          y: 0,
        },
      },
    },
    {
      why: "HEMMED puts somebody on each of the four tiles beside the player, east west south north, and they come AFTER the arrangement's own. Without them a row of people on open ground is simply walked round and nothing parts - having no way round is what forces the way through",
      player,
      situation: {
        people: [
          {
            x: 2,
            y: 0,
          },
        ],
        hemmed: true,
        tapped: false,
        tap: {
          x: 4,
          y: 0,
        },
      },
      land: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 2,
          y: 0,
        },
        {
          x: 4,
          y: 0,
        },
        {
          x: 1,
          y: 0,
        },
        {
          x: -1,
          y: 0,
        },
        {
          x: 0,
          y: 1,
        },
        {
          x: 0,
          y: -1,
        },
      ],
      places: {
        people: [
          {
            x: 2,
            y: 0,
          },
          {
            x: 1,
            y: 0,
          },
          {
            x: -1,
            y: 0,
          },
          {
            x: 0,
            y: 1,
          },
          {
            x: 0,
            y: -1,
          },
        ],
        tap: {
          x: 4,
          y: 0,
        },
      },
    },
    {
      why: "TAPPED means the tap lands on a person rather than on ground, so that tile is named twice - once as somebody standing there and once as the tile to tap - and ONE person comes back, not two. This is the case the whole file is worth writing for: a person's picture and the cross over them are remembered by where that person is standing, so a second person arriving on a tile takes over the first one's drawer and the first drags somebody else's picture about from then on. Nothing on the screen says so, and nothing throws",
      player,
      situation: {
        people: [
          {
            x: 2,
            y: 0,
          },
        ],
        hemmed: false,
        tapped: true,
        tap: {
          x: 2,
          y: 0,
        },
      },
      land: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 2,
          y: 0,
        },
      ],
      places: {
        people: [
          {
            x: 2,
            y: 0,
          },
        ],
        tap: {
          x: 2,
          y: 0,
        },
      },
    },
    {
      why: "WATER IS DROPPED rather than moved to dry land. Two people are asked for and the nearer tile is sea, so one comes back and the arrangement stands a person short. Nobody can stand on water, and these people are only there to be a wall - so water is a wall already and the arrangement is right without them",
      player,
      situation: {
        people: [
          {
            x: 1,
            y: 0,
          },
          {
            x: 2,
            y: 0,
          },
        ],
        hemmed: false,
        tapped: false,
        tap: {
          x: 3,
          y: 0,
        },
      },
      land: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 1,
          y: 0,
        },
        {
          x: 3,
          y: 0,
        },
      ],
      places: {
        people: [
          {
            x: 1,
            y: 0,
          },
        ],
        tap: {
          x: 3,
          y: 0,
        },
      },
    },
  ];
  return r;
}

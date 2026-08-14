import { fn_name } from "./fn_name.mjs";
export function g_npc_path_clear_facing_best_cases() {
  "every way a turning can be decided, written down as a patch of dry land and the tile the winning turn puts the tap on.";
  "the player stands at 0,0 and the arrangement is one person one step east with the tap two steps east - the smallest shape that still has a person and a tap to disagree about. The four turns then put the tap at 2,0 east, 0,2 south, -2,0 west and 0,-2 north, so naming the tap names which turn won.";
  "LAND IS LISTED RATHER THAN WATER, because a case that says where the dry land is can be read without holding a map in mind, and everything not listed is sea.";
  ("only the tap is checked, not the whole arrangement. Each turn puts its tap somewhere no other turn does, so the tap alone says which way the shape ended up pointing - and the people follow from the turn, so checking them too would only be checking ",
    fn_name("g_coordinates_turn"),
    " a second time.");
  let situation = {
    people: [
      {
        x: 1,
        y: 0,
      },
    ],
    tap: {
      x: 2,
      y: 0,
    },
  };
  let place = {
    x: 0,
    y: 0,
  };
  let r = [
    {
      why: "all four ways fit, so the one it was written facing is kept - an arrangement that already stands where it was written is never turned for nothing",
      situation,
      place,
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
          x: 2,
          y: 0,
        },
        {
          x: 0,
          y: 1,
        },
        {
          x: 0,
          y: 2,
        },
        {
          x: -1,
          y: 0,
        },
        {
          x: -2,
          y: 0,
        },
        {
          x: 0,
          y: -1,
        },
        {
          x: 0,
          y: -2,
        },
      ],
      tap: {
        x: 2,
        y: 0,
      },
    },
    {
      why: "only the way south is dry, so the shape is turned onto it - this is the whole reason turning exists, the first run having asked for a row of people out at sea because the player happened to be standing on the eastern shore",
      situation,
      place,
      land: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
          y: 1,
        },
        {
          x: 0,
          y: 2,
        },
      ],
      tap: {
        x: 0,
        y: 2,
      },
    },
    {
      why: "THE TAP OUTWEIGHS EVERYBODY: east stands its one person and drowns the tap, south drowns its person and keeps the tap dry, and south wins. A person short still mostly reads; a tap on water is a screen with nothing to do on it",
      situation,
      place,
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
          x: 0,
          y: 2,
        },
      ],
      tap: {
        x: 0,
        y: 2,
      },
    },
    {
      why: "south and west fit exactly as well as each other and east does not fit at all, so the EARLIER of the two equal ways is kept. This is the case the picking was rewritten under: it used to be a running best that only gave way to something strictly better, and sorting by score and taking an end would hand back west instead - the same score, the other answer, and nothing to say it had changed",
      situation,
      place,
      land: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
          y: 1,
        },
        {
          x: 0,
          y: 2,
        },
        {
          x: -1,
          y: 0,
        },
        {
          x: -2,
          y: 0,
        },
      ],
      tap: {
        x: 0,
        y: 2,
      },
    },
  ];
  return r;
}

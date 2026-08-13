export function app_g_player_walk_cases() {
  "walks set off and finished in every order they can happen in, beside what could be seen after each one - whether anybody is walking, and which of the walks so far has been left behind.";
  "what rests on this is which of two things a tap on the player means. standing still it opens the menu; walking it means stop here. so an answer of nobody-is-walking while somebody still is opens the menu over a player who is sliding across the map, and nothing can then stop them - which is the exact bug this pair of counts was built to close, and it raises nothing anywhere. the only thing seen is a menu appearing when a stop was meant.";
  "the third case is the one worth the whole file: an older walk finishing after a newer one has taken over. it must say nothing at all, because the newer walk is the one still going. take the check out of the ending and only that one case turns, silently.";
  "the walks are named rather than numbered here so a case reads as what happened, and the numbers they are really recognised by are handed out by the beginning itself.";
  let cases = [
    {
      steps: [],
      after: [
        {
          walking: false,
          stopped: {},
        },
      ],
      why: "before anybody has moved. both counts start at nought, which is a walk that never happened, so they agree and nobody is walking - a fresh game must not open with the menu refused",
    },
    {
      steps: [
        {
          action: "begin",
          name: "a",
        },
        {
          action: "end",
          name: "a",
        },
      ],
      after: [
        {
          walking: false,
          stopped: {},
        },
        {
          walking: true,
          stopped: {
            a: false,
          },
        },
        {
          walking: false,
          stopped: {
            a: false,
          },
        },
      ],
      why: "one walk, run to the end of its path. it is walking from the moment it sets off until it says it is over, and it is never stopped - nothing newer ever took over from it",
    },
    {
      steps: [
        {
          action: "begin",
          name: "a",
        },
        {
          action: "begin",
          name: "b",
        },
        {
          action: "end",
          name: "a",
        },
        {
          action: "end",
          name: "b",
        },
      ],
      after: [
        {
          walking: false,
          stopped: {},
        },
        {
          walking: true,
          stopped: {
            a: false,
          },
        },
        {
          walking: true,
          stopped: {
            a: true,
            b: false,
          },
        },
        {
          walking: true,
          stopped: {
            a: true,
            b: false,
          },
        },
        {
          walking: false,
          stopped: {
            a: true,
            b: false,
          },
        },
      ],
      why: "a tap partway through a walk, which sets a second one off and stops the first by doing it. the first then reaches its own ending and must say NOTHING - after that step the player is still walking, because b is. this is the case that turns if the ending stops asking whether it has been left behind, and the player would be handed the menu mid-slide",
    },
    {
      steps: [
        {
          action: "begin",
          name: "a",
        },
        {
          action: "begin",
          name: "b",
        },
        {
          action: "end",
          name: "b",
        },
        {
          action: "end",
          name: "a",
        },
      ],
      after: [
        {
          walking: false,
          stopped: {},
        },
        {
          walking: true,
          stopped: {
            a: false,
          },
        },
        {
          walking: true,
          stopped: {
            a: true,
            b: false,
          },
        },
        {
          walking: false,
          stopped: {
            a: true,
            b: false,
          },
        },
        {
          walking: false,
          stopped: {
            a: true,
            b: false,
          },
        },
      ],
      why: "the same pair with the endings the other way about, which is the ordinary order: the walk that was cut short is left mid-step and only says so afterwards. once b has finished nobody is walking, and a arriving late must not put the player back to walking again - the menu has to stay reachable",
    },
    {
      steps: [
        {
          action: "begin",
          name: "a",
        },
        {
          action: "begin",
          name: "b",
        },
        {
          action: "begin",
          name: "c",
        },
        {
          action: "end",
          name: "c",
        },
      ],
      after: [
        {
          walking: false,
          stopped: {},
        },
        {
          walking: true,
          stopped: {
            a: false,
          },
        },
        {
          walking: true,
          stopped: {
            a: true,
            b: false,
          },
        },
        {
          walking: true,
          stopped: {
            a: true,
            b: true,
            c: false,
          },
        },
        {
          walking: false,
          stopped: {
            a: true,
            b: true,
            c: false,
          },
        },
      ],
      why: "taps landing faster than the walks can finish. only the newest is ever the one still going, and the newest finishing is enough on its own to say the walking is over - the two left behind need not be heard from at all, which is what makes a count safe where a flag somebody has to put down would not be",
    },
  ];
  return cases;
}

export function app_replace_rule_set_unary_to_binary_equations_preparation() {
  let r = {
    name: "Unary To Binary Equations Preparation",
    rules: [
      "d e = > = d",
      "= d > d f =",
      "d > d d",
      "d d > d e d",
      "e d > e =",
    ],
    goals: [
      {
        start: "d",
        end: "d d",
      },
      {
        start: "d",
        end: "d e d",
      },
      {
        start: "d",
        end: "d e =",
      },
      {
        start: "d e =",
        end: "= d",
      },
      {
        start: "d e =",
        end: "d f =",
      },
      {
        start: "d e =",
        end: "d d f =",
      },
      {
        start: "d e =",
        end: "d e d f =",
      },
      {
        start: "d e =",
        end: "d f = f =",
      },
    ],
    why: "The replacement rules demonstrate a process for transforming unary equations into a binary-like form by systematically introducing new symbols and rearranging terms, simulating the conversion of unary representations to binary equations through stepwise symbol manipulation.",
    rules_used: [
      [
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
      ],
      [
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
      ],
      [
        {
          left: ["e", "d"],
          right: ["e", "="],
          original: "e d > e =",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
      ],
      [
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
      ],
      [
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
      ],
      [
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
      ],
      [
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
      ],
      [
        {
          left: ["e", "d"],
          right: ["e", "="],
          original: "e d > e =",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
      ],
    ],
  };
  return r;
}

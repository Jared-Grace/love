export function app_replace_rule_sets_fns_rules_used() {
  return {
    app_replace_rule_set_binary_numbers_simple: [
      [
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
      ],
      [
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
      ],
      [
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
      ],
      [
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
      ],
      [
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
      ],
      [
        {
          left: ["0"],
          right: ["0", "0"],
          original: "0 > 0 0",
        },
        {
          left: ["0"],
          right: ["1"],
          original: "0 > 1",
        },
      ],
    ],
    app_replace_rule_set_binary_numbers_simple_2: [
      [
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
      ],
      [
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["b", "b"],
          original: "b > b b",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
      ],
    ],
    app_replace_rule_set_binary_numbers: [
      [
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
      ],
      [
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
      ],
      [
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
      ],
      [
        {
          left: ["g"],
          right: ["b"],
          original: "g > b",
        },
        {
          left: ["g"],
          right: ["b", "g"],
          original: "g > b g",
        },
        {
          left: ["b"],
          right: ["0"],
          original: "b > 0",
        },
        {
          left: ["b"],
          right: ["1"],
          original: "b > 1",
        },
      ],
    ],
    app_replace_rule_set_binary_counting_prepare_1: [
      [
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
      ],
    ],
    app_replace_rule_set_three_different_grow_same: [
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
    ],
    app_replace_rule_set_shrink_same_three_different: [
      [
        {
          left: ["c", "e", "=", "b", "c"],
          right: ["e", "=", "b"],
          original: "c e = b c > e = b",
        },
      ],
      [
        {
          left: ["c", "e", "=", "b", "c"],
          right: ["e", "=", "b"],
          original: "c e = b c > e = b",
        },
      ],
    ],
    app_replace_rule_set_two_different_grow_same: [
      [
        {
          left: ["e", "b"],
          right: ["c", "e", "b", "c"],
          original: "e b > c e b c",
        },
      ],
      [
        {
          left: ["e", "b"],
          right: ["c", "e", "b", "c"],
          original: "e b > c e b c",
        },
      ],
    ],
    app_replace_rule_set_grow_same_three_different: [
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
      [
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
    ],
    app_replace_rule_set_boolean_literal: [
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
      ],
    ],
    app_replace_rule_set_grow_different: [
      [
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
    ],
    app_replace_rule_set_shrink_different: [
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
      ],
    ],
    app_replace_rule_set_double: [
      [
        {
          left: ["a"],
          right: ["a", "a"],
          original: "a > a a",
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a"],
          original: "a > a a",
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a"],
          original: "a > a a",
        },
      ],
    ],
    app_replace_rule_set_replace_right_same: [
      [
        {
          left: ["a", "b"],
          right: ["a", "a"],
          original: "a b > a a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a", "a"],
          original: "a b > a a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a", "a"],
          original: "a b > a a",
        },
      ],
    ],
    app_replace_rule_set_same_replace_right: [
      [
        {
          left: ["a", "a"],
          right: ["a", "b"],
          original: "a a > a b",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b"],
          original: "a a > a b",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b"],
          original: "a a > a b",
        },
      ],
    ],
    app_replace_rule_set_half: [
      [
        {
          left: ["a", "a"],
          right: ["a"],
          original: "a a > a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a"],
          original: "a a > a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a"],
          original: "a a > a",
        },
      ],
    ],
    app_replace_rule_set_same_replace_left: [
      [
        {
          left: ["a", "a"],
          right: ["b", "a"],
          original: "a a > b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["b", "a"],
          original: "a a > b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["b", "a"],
          original: "a a > b a",
        },
      ],
    ],
    app_replace_rule_set_right_change: [
      [
        {
          left: ["a", "b"],
          right: ["a", "c"],
          original: "a b > a c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a", "c"],
          original: "a b > a c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a", "c"],
          original: "a b > a c",
        },
      ],
    ],
    app_replace_rule_set_replace_left_same: [
      [
        {
          left: ["b", "a"],
          right: ["a", "a"],
          original: "b a > a a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a", "a"],
          original: "b a > a a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a", "a"],
          original: "b a > a a",
        },
      ],
    ],
    app_replace_rule_set_shrink_triple: [
      [
        {
          left: ["a", "a", "a"],
          right: ["a"],
          original: "a a a > a",
        },
      ],
      [
        {
          left: ["a", "a", "a"],
          right: ["a"],
          original: "a a a > a",
        },
      ],
      [
        {
          left: ["a", "a", "a"],
          right: ["a"],
          original: "a a a > a",
        },
      ],
    ],
    app_replace_rule_set_shrink_both_same: [
      [
        {
          left: ["a", "b", "a"],
          right: ["b"],
          original: "a b a > b",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["b"],
          original: "a b a > b",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["b"],
          original: "a b a > b",
        },
      ],
    ],
    app_replace_rule_set_grow_triple: [
      [
        {
          left: ["a"],
          right: ["a", "a", "a"],
          original: "a > a a a",
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a", "a"],
          original: "a > a a a",
        },
      ],
      [
        {
          left: ["a"],
          right: ["a", "a", "a"],
          original: "a > a a a",
        },
      ],
    ],
    app_replace_rule_set_unary_equations: [
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
    ],
    app_replace_rule_set_grow_between: [
      [
        {
          left: ["a", "a"],
          right: ["a", "b", "a"],
          original: "a a > a b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b", "a"],
          original: "a a > a b a",
        },
      ],
      [
        {
          left: ["a", "a"],
          right: ["a", "b", "a"],
          original: "a a > a b a",
        },
      ],
    ],
    app_replace_rule_set_shrink_between: [
      [
        {
          left: ["a", "b", "a"],
          right: ["a", "a"],
          original: "a b a > a a",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["a", "a"],
          original: "a b a > a a",
        },
      ],
      [
        {
          left: ["a", "b", "a"],
          right: ["a", "a"],
          original: "a b a > a a",
        },
      ],
    ],
    app_replace_rule_set_grow_different_2: [
      [
        {
          left: ["b"],
          right: ["d", "e"],
          original: "b > d e",
        },
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
      [
        {
          left: ["b"],
          right: ["d", "e"],
          original: "b > d e",
        },
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
      [
        {
          left: ["b"],
          right: ["d", "e"],
          original: "b > d e",
        },
        {
          left: ["a"],
          right: ["b", "c"],
          original: "a > b c",
        },
      ],
    ],
    app_replace_rule_set_shrink_different_2: [
      [
        {
          left: ["d", "e"],
          right: ["b"],
          original: "d e > b",
        },
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
        {
          left: ["d", "e"],
          right: ["b"],
          original: "d e > b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a"],
          original: "b c > a",
        },
        {
          left: ["d", "e"],
          right: ["b"],
          original: "d e > b",
        },
      ],
    ],
    app_replace_rule_set_swap_3: [
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
        {
          left: ["a", "c"],
          right: ["c", "a"],
          original: "a c > c a",
        },
        {
          left: ["a", "d"],
          right: ["d", "a"],
          original: "a d > d a",
        },
      ],
      [
        {
          left: ["a", "c"],
          right: ["c", "a"],
          original: "a c > c a",
        },
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
        {
          left: ["a", "d"],
          right: ["d", "a"],
          original: "a d > d a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
        {
          left: ["a", "c"],
          right: ["c", "a"],
          original: "a c > c a",
        },
        {
          left: ["a", "d"],
          right: ["d", "a"],
          original: "a d > d a",
        },
      ],
    ],
    app_replace_rule_set_binary_counting_prepare_2: [
      [
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["1"],
          right: ["1", "1"],
          original: "1 > 1 1",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
    ],
    app_replace_rule_set_swap_2: [
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
        {
          left: ["a", "c"],
          right: ["c", "a"],
          original: "a c > c a",
        },
      ],
      [
        {
          left: ["a", "c"],
          right: ["c", "a"],
          original: "a c > c a",
        },
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
      ],
      [
        {
          left: ["a", "c"],
          right: ["c", "a"],
          original: "a c > c a",
        },
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
      ],
    ],
    app_replace_rule_set_grow_right: [
      [
        {
          left: ["g"],
          right: ["g", "s"],
          original: "g > g s",
        },
      ],
      [
        {
          left: ["g"],
          right: ["g", "s"],
          original: "g > g s",
        },
      ],
      [
        {
          left: ["g"],
          right: ["g", "s"],
          original: "g > g s",
        },
      ],
      [
        {
          left: ["g"],
          right: ["g", "s"],
          original: "g > g s",
        },
      ],
    ],
    app_replace_rule_set_grow_left: [
      [
        {
          left: ["g"],
          right: ["s", "g"],
          original: "g > s g",
        },
      ],
      [
        {
          left: ["g"],
          right: ["s", "g"],
          original: "g > s g",
        },
      ],
      [
        {
          left: ["g"],
          right: ["s", "g"],
          original: "g > s g",
        },
      ],
      [
        {
          left: ["g"],
          right: ["s", "g"],
          original: "g > s g",
        },
      ],
    ],
    app_replace_rule_set_shrink_right: [
      [
        {
          left: ["a", "b"],
          right: ["a"],
          original: "a b > a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a"],
          original: "a b > a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a"],
          original: "a b > a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["a"],
          original: "a b > a",
        },
      ],
    ],
    app_replace_rule_set_shrink_left: [
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
    ],
    app_replace_rule_set_replace_2: [
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
        {
          left: ["c"],
          right: ["d"],
          original: "c > d",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
        {
          left: ["c"],
          right: ["d"],
          original: "c > d",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
        {
          left: ["c"],
          right: ["d"],
          original: "c > d",
        },
      ],
      [
        {
          left: ["c"],
          right: ["d"],
          original: "c > d",
        },
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
    ],
    app_replace_rule_set_swap: [
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "a"],
          original: "a b > b a",
        },
      ],
    ],
    app_replace_rule_set_swap_change_right: [
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
      [
        {
          left: ["a", "b"],
          right: ["b", "c"],
          original: "a b > b c",
        },
      ],
    ],
    app_replace_rule_set_replace: [
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
    ],
    app_replace_rule_set_replace_flow: [
      [
        {
          left: ["b"],
          right: ["c"],
          original: "b > c",
        },
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["c"],
          original: "b > c",
        },
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["b"],
          right: ["c"],
          original: "b > c",
        },
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b"],
          original: "a > b",
        },
        {
          left: ["b"],
          right: ["c"],
          original: "b > c",
        },
      ],
    ],
    app_replace_rule_set_swap_change_left: [
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["a", "b"],
          original: "b c > a b",
        },
      ],
    ],
    app_replace_rule_set_statements_block: [
      [
        {
          left: ["bs"],
          right: ["{", "}"],
          original: "bs > { }",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
      ],
      [
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["sm"],
          right: [";"],
          original: "sm > ;",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["ex"],
          right: ["u", "p", "d", "a", "t", "e", "(", ")"],
          original: "ex > u p d a t e ( )",
        },
      ],
      [
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["ex"],
          right: ["u", "p", "d", "a", "t", "e", "(", ")"],
          original: "ex > u p d a t e ( )",
        },
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
      ],
    ],
    app_replace_rule_set_statements_simple: [
      [
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["sm"],
          right: [";"],
          original: "sm > ;",
        },
        {
          left: ["sm"],
          right: ["return", ";"],
          original: "sm > return ;",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["u", "p", "d", "a", "t", "e", "(", ")"],
          original: "ex > u p d a t e ( )",
        },
        {
          left: ["sm"],
          right: ["return", ";"],
          original: "sm > return ;",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["u", "p", "d", "a", "t", "e", "(", ")"],
          original: "ex > u p d a t e ( )",
        },
        {
          left: ["sm"],
          right: [";"],
          original: "sm > ;",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
      ],
    ],
    app_replace_rule_set_statements_while: [
      [
        {
          left: ["ws"],
          right: ["while", "(", "ex", ")", "sm"],
          original: "ws > while ( ex ) sm",
        },
        {
          left: ["ex"],
          right: ["x", "=", "x", "+", "1"],
          original: "ex > x = x + 1",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["x", "<", "3"],
          original: "ex > x < 3",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["y", ">", "0"],
          original: "ex > y > 0",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["ex"],
          right: ["y", "=", "y", "-", "1"],
          original: "ex > y = y - 1",
        },
        {
          left: ["ws"],
          right: ["while", "(", "ex", ")", "sm"],
          original: "ws > while ( ex ) sm",
        },
      ],
      [
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["ws"],
          right: ["while", "(", "ex", ")", "sm"],
          original: "ws > while ( ex ) sm",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["!", "f", "o", "u", "n", "d", "(", "d", "o", "o", "r", ")"],
          original: "ex > ! f o u n d ( d o o r )",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["a", "s", "k", "(", ")"],
          original: "ex > a s k ( )",
        },
        {
          left: ["ex"],
          right: ["s", "e", "e", "k", "(", ")"],
          original: "ex > s e e k ( )",
        },
      ],
    ],
    app_replace_rule_set_statements_for: [
      [
        {
          left: ["fs"],
          right: ["for", "(", "ex", ";", "ex", ";", "ex", ")", "sm"],
          original: "fs > for ( ex ; ex ; ex ) sm",
        },
        {
          left: ["ex"],
          right: ["i", "=", "i", "+", "1"],
          original: "ex > i = i + 1",
        },
        {
          left: ["ex"],
          right: ["i", "=", "0"],
          original: "ex > i = 0",
        },
        {
          left: ["ex"],
          right: ["i", "<", "12"],
          original: "ex > i < 12",
        },
      ],
      [
        {
          left: ["fs"],
          right: ["for", "(", "ex", ";", "ex", ";", "ex", ")", "sm"],
          original: "fs > for ( ex ; ex ; ex ) sm",
        },
        {
          left: ["ex"],
          right: [
            "l",
            "o",
            "g",
            "(",
            "a",
            "p",
            "o",
            "s",
            "t",
            "l",
            "e",
            "[",
            "i",
            "]",
            ")",
          ],
          original: "ex > l o g ( a p o s t l e [ i ] )",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
      ],
      [
        {
          left: ["fs"],
          right: ["for", "(", "ex", ";", "ex", ";", "ex", ")", "sm"],
          original: "fs > for ( ex ; ex ; ex ) sm",
        },
        {
          left: ["ex"],
          right: [
            "i",
            "<",
            "l",
            "i",
            "s",
            "t",
            ".",
            "l",
            "e",
            "n",
            "g",
            "t",
            "h",
          ],
          original: "ex > i < l i s t . l e n g t h",
        },
        {
          left: ["ex"],
          right: ["i", "=", "i", "+", "1"],
          original: "ex > i = i + 1",
        },
        {
          left: ["ex"],
          right: ["i", "=", "0"],
          original: "ex > i = 0",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: [
            "c",
            "o",
            "p",
            "y",
            "[",
            "i",
            "]",
            "=",
            "l",
            "i",
            "s",
            "t",
            "[",
            "i",
            "]",
          ],
          original: "ex > c o p y [ i ] = l i s t [ i ]",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["ex"],
          right: ["l", "o", "g", "(", "i", ")"],
          original: "ex > l o g ( i )",
        },
      ],
    ],
    app_replace_rule_set_grow_left_pair_change_right: [
      [
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
      ],
      [
        {
          left: ["b", "b"],
          right: ["b", "c"],
          original: "b b > b c",
        },
        {
          left: ["a"],
          right: ["b", "a"],
          original: "a > b a",
        },
      ],
    ],
    app_replace_rule_set_shrink_left_pair_replace_right_same: [
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
      ],
      [
        {
          left: ["b", "c"],
          right: ["b", "b"],
          original: "b c > b b",
        },
        {
          left: ["b", "a"],
          right: ["a"],
          original: "b a > a",
        },
      ],
    ],
    app_replace_rule_set_expand_collapse: [
      [
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
      ],
      [
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
      ],
      [
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
      ],
      [
        {
          left: ["b", "b"],
          right: ["c"],
          original: "b b > c",
        },
        {
          left: ["a"],
          right: ["b", "b"],
          original: "a > b b",
        },
      ],
    ],
    app_replace_rule_set_unary_equations_adding: [
      [
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
      ],
      [
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
      ],
      [
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
      ],
      [
        {
          left: ["1", "1"],
          right: ["1", "+", "1"],
          original: "1 1 > 1 + 1",
        },
        {
          left: ["="],
          right: ["1", "=", "1"],
          original: "= > 1 = 1",
        },
      ],
    ],
    app_replace_rule_set_binary_counting: [
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
      [
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["c"],
          right: ["a", "c"],
          original: "c > a c",
        },
      ],
    ],
    app_replace_rule_set_unary_to_binary_equations_preparation: [
      [
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["e", "d"],
          right: ["e", "="],
          original: "e d > e =",
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
          left: ["d", "d"],
          right: ["d", "e", "d"],
          original: "d d > d e d",
        },
        {
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
      ],
      [
        {
          left: ["=", "d"],
          right: ["d", "f", "="],
          original: "= d > d f =",
        },
        {
          left: ["e", "d"],
          right: ["e", "="],
          original: "e d > e =",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
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
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
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
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
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
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
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
          left: ["d"],
          right: ["d", "d"],
          original: "d > d d",
        },
        {
          left: ["e", "d"],
          right: ["e", "="],
          original: "e d > e =",
        },
      ],
    ],
    app_replace_rule_set_statements_variable: [
      [
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["vk"],
          right: ["let"],
          original: "vk > let",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["id"],
          right: ["i"],
          original: "id > i",
        },
      ],
      [
        {
          left: ["id"],
          right: ["j"],
          original: "id > j",
        },
        {
          left: ["vk"],
          right: ["let"],
          original: "vk > let",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["ex"],
          right: ["0"],
          original: "ex > 0",
        },
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
      ],
      [
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
        {
          left: ["vk"],
          right: ["var"],
          original: "vk > var",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
      ],
      [
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["id"],
          right: ["a"],
          original: "id > a",
        },
        {
          left: ["vk"],
          right: ["var"],
          original: "vk > var",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
      ],
      [
        {
          left: ["id"],
          right: ["c"],
          original: "id > c",
        },
        {
          left: ["id"],
          right: ["b"],
          original: "id > b",
        },
        {
          left: ["vd"],
          right: ["id"],
          original: "vd > id",
        },
      ],
      [
        {
          left: ["vk"],
          right: ["const"],
          original: "vk > const",
        },
        {
          left: ["vdg"],
          right: ["vdg", ",", "vd"],
          original: "vdg > vdg , vd",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["ex"],
          right: ["2"],
          original: "ex > 2",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
      ],
      [
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["ex"],
          right: ["1"],
          original: "ex > 1",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
      ],
    ],
    app_replace_rule_set_statements_if: [
      [
        {
          left: ["sm"],
          right: ["return", ";"],
          original: "sm > return ;",
        },
        {
          left: ["ex"],
          right: ["y", "===", "null"],
          original: "ex > y === null",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
      ],
      [
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
        {
          left: ["ex"],
          right: ["x", "<", "0"],
          original: "ex > x < 0",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["x", "=", "1"],
          original: "ex > x = 1",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["y", ">", "max"],
          original: "ex > y >> max",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["sm"],
          right: ["bs"],
          original: "sm > bs",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["log", "(", '"', "r", "e", "s", "e", "t", '"', ")"],
          original: 'ex > log ( " r e s e t " )',
        },
        {
          left: ["ex"],
          right: ["y", "=", "0"],
          original: "ex > y = 0",
        },
      ],
      [
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm"],
          original: "is > if ( ex ) sm",
        },
        {
          left: ["is"],
          right: ["if", "(", "ex", ")", "sm", "else", "sm"],
          original: "is > if ( ex ) sm else sm",
        },
        {
          left: ["ex"],
          right: ["x", ">", "0"],
          original: "ex > x > 0",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["positive", "=", "true"],
          original: "ex > positive = true",
        },
        {
          left: ["sm"],
          right: ["ex", ";"],
          original: "sm > ex ;",
        },
        {
          left: ["ex"],
          right: ["positive", "=", "false"],
          original: "ex > positive = false",
        },
      ],
    ],
    app_replace_rule_set_expressions_unary: [
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ue"],
          right: ["uo", "ue"],
          original: "ue > uo ue",
        },
      ],
      [
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["uo"],
          right: ["!"],
          original: "uo > !",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["uo"],
          right: ["+"],
          original: "uo > +",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
      ],
      [
        {
          left: ["uo"],
          right: ["typeof"],
          original: "uo > typeof",
        },
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["ue"],
          right: ["uo", "ue"],
          original: "ue > uo ue",
        },
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ue"],
          original: "ex > ue",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
        {
          left: ["ue"],
          right: ["uo", "ue"],
          original: "ue > uo ue",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
    ],
    app_replace_rule_set_decimals: [
      [
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["de"],
          right: [".", "ig"],
          original: "de > . ig",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["2"],
          original: "pi > 2",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["de"],
          right: ["in", ".", "ig"],
          original: "de > in . ig",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
      ],
      [
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["de"],
          right: ["in", ".", "ig"],
          original: "de > in . ig",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["9"],
          original: "pi > 9",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
      ],
    ],
    app_replace_rule_set_integer_digits: [
      [
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
        {
          left: ["g"],
          right: ["di", "g"],
          original: "g > di g",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["di"],
          right: ["2"],
          original: "di > 2",
        },
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
      ],
      [
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["g"],
          right: ["di", "g"],
          original: "g > di g",
        },
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
        {
          left: ["g"],
          right: ["di", "g"],
          original: "g > di g",
        },
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
        {
          left: ["di"],
          right: ["9"],
          original: "di > 9",
        },
        {
          left: ["di"],
          right: ["8"],
          original: "di > 8",
        },
      ],
      [
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
        {
          left: ["g"],
          right: ["di", "g"],
          original: "g > di g",
        },
        {
          left: ["di"],
          right: ["2"],
          original: "di > 2",
        },
      ],
      [
        {
          left: ["di"],
          right: ["8"],
          original: "di > 8",
        },
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
        {
          left: ["di"],
          right: ["7"],
          original: "di > 7",
        },
      ],
      [
        {
          left: ["di"],
          right: ["5"],
          original: "di > 5",
        },
        {
          left: ["di"],
          right: ["6"],
          original: "di > 6",
        },
        {
          left: ["di"],
          right: ["4"],
          original: "di > 4",
        },
      ],
      [
        {
          left: ["g"],
          right: ["di", "g"],
          original: "g > di g",
        },
        {
          left: ["di"],
          right: ["5"],
          original: "di > 5",
        },
        {
          left: ["g"],
          right: ["di"],
          original: "g > di",
        },
      ],
      [
        {
          left: ["di"],
          right: ["2"],
          original: "di > 2",
        },
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["di"],
          right: ["4"],
          original: "di > 4",
        },
        {
          left: ["di"],
          right: ["6"],
          original: "di > 6",
        },
      ],
    ],
    app_replace_rule_set_integers: [
      [
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
      ],
      [
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["2"],
          original: "pi > 2",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
        {
          left: ["pi"],
          right: ["9"],
          original: "pi > 9",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["in"],
          right: ["pi", "ig"],
          original: "in > pi ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
    ],
    app_replace_rule_set_identifiers_simple: [
      [
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["idf"],
          right: ["_"],
          original: "idf > _",
        },
        {
          left: ["id"],
          right: ["idf"],
          original: "id > idf",
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
      ],
      [
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
        {
          left: ["idf"],
          right: ["t"],
          original: "idf > t",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
      ],
      [
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["idg"],
          right: ["ida", "idg"],
          original: "idg > ida idg",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["l"],
          original: "idf > l",
        },
        {
          left: ["idf"],
          right: ["v"],
          original: "idf > v",
        },
        {
          left: ["idf"],
          right: ["u"],
          original: "idf > u",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["idg"],
          right: ["ida", "idg"],
          original: "idg > ida idg",
        },
        {
          left: ["idg"],
          right: ["ida"],
          original: "idg > ida",
        },
        {
          left: ["id"],
          right: ["idf", "idg"],
          original: "id > idf idg",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["idf"],
          right: ["u"],
          original: "idf > u",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["A"],
          original: "idf > A",
        },
        {
          left: ["idf"],
          right: ["B"],
          original: "idf > B",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["h"],
          original: "idf > h",
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
      ],
    ],
    app_replace_rule_set_expressions_multiplicative: [
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
          original: "mue > mue mo ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["mo"],
          right: ["*"],
          original: "mo > *",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["mue"],
          original: "ex > mue",
        },
        {
          left: ["ag"],
          right: ["ex", ",", "ag"],
          original: "ag > ex , ag",
        },
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
          original: "mue > mue mo ue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["mo"],
          right: ["*"],
          original: "mo > *",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
      ],
    ],
    app_replace_rule_set_expressions_logical: [
      [
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["le"],
          right: ["le", "lo", "ee"],
          original: "le > le lo ee",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["id"],
          right: ["u", "p", "d", "a", "t", "e"],
          original: "id > u p d a t e",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["lo"],
          right: ["&&"],
          original: "lo > &&",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
      [
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["lo"],
          right: ["||"],
          original: "lo > ||",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["lo"],
          right: ["&&"],
          original: "lo > &&",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ex"],
          right: ["le"],
          original: "ex > le",
        },
      ],
      [
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["le"],
          right: ["le", "lo", "ee"],
          original: "le > le lo ee",
        },
        {
          left: ["lo"],
          right: ["||"],
          original: "lo > ||",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["id"],
          right: ["r", "e", "f", "r", "e", "s", "h"],
          original: "id > r e f r e s h",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
      ],
      [
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
    ],
    app_replace_rule_set_function_declarations: [
      [
        {
          left: ["bs"],
          right: ["{", "}"],
          original: "bs > { }",
        },
        {
          left: ["id"],
          right: ["e", "m", "p", "t", "y"],
          original: "id > e m p t y",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["fdm"],
          right: [")"],
          original: "fdm > )",
        },
      ],
      [
        {
          left: ["id"],
          right: ["t", "a", "u", "t", "o", "l", "o", "g", "y"],
          original: "id > t a u t o l o g y",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["fdm"],
          right: [")"],
          original: "fdm > )",
        },
        {
          left: ["ex"],
          right: ["true"],
          original: "ex > true",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
      ],
      [
        {
          left: ["fdm"],
          right: ["fpg", ")"],
          original: "fdm > fpg )",
        },
        {
          left: ["fpg"],
          right: ["id"],
          original: "fpg > id",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
      ],
      [
        {
          left: ["id"],
          right: ["i", "d", "e", "n", "t", "i", "t", "y"],
          original: "id > i d e n t i t y",
        },
        {
          left: ["ex"],
          right: ["i"],
          original: "ex > i",
        },
        {
          left: ["id"],
          right: ["i"],
          original: "id > i",
        },
      ],
      [
        {
          left: ["id"],
          right: ["i", "n", "v", "o", "k", "e"],
          original: "id > i n v o k e",
        },
        {
          left: ["ex"],
          right: ["f", "(", ")"],
          original: "ex > f ( )",
        },
        {
          left: ["id"],
          right: ["f"],
          original: "id > f",
        },
      ],
      [
        {
          left: ["bs"],
          right: ["{", "smg", "}"],
          original: "bs > { smg }",
        },
        {
          left: ["fd"],
          right: ["function", "id", "(", "fdm", "bs"],
          original: "fd > function id ( fdm bs",
        },
        {
          left: ["fdm"],
          right: ["fpg", ")"],
          original: "fdm > fpg )",
        },
      ],
      [
        {
          left: ["fpg"],
          right: ["id"],
          original: "fpg > id",
        },
        {
          left: ["fpg"],
          right: ["fpg", ",", "id"],
          original: "fpg > fpg , id",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
        {
          left: ["id"],
          right: ["a", "d", "d"],
          original: "id > a d d",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["ex"],
          right: ["x", "+", "y"],
          original: "ex > x + y",
        },
      ],
      [
        {
          left: ["sm"],
          right: ["vs"],
          original: "sm > vs",
        },
        {
          left: ["smg"],
          right: ["sm"],
          original: "smg > sm",
        },
        {
          left: ["smg"],
          right: ["smg", "sm"],
          original: "smg > smg sm",
        },
        {
          left: ["sm"],
          right: ["return", "ex", ";"],
          original: "sm > return ex ;",
        },
      ],
      [
        {
          left: ["vd"],
          right: ["id", "=", "ex"],
          original: "vd > id = ex",
        },
        {
          left: ["vs"],
          right: ["vk", "vdg", ";"],
          original: "vs > vk vdg ;",
        },
        {
          left: ["vdg"],
          right: ["vd"],
          original: "vdg > vd",
        },
        {
          left: ["vk"],
          right: ["let"],
          original: "vk > let",
        },
      ],
      [
        {
          left: ["id"],
          right: ["s", "u", "m"],
          original: "id > s u m",
        },
        {
          left: ["ex"],
          right: ["s", "u", "m", "/", "2"],
          original: "ex > s u m / 2",
        },
        {
          left: ["id"],
          right: ["a", "v", "e", "r", "a", "g", "e"],
          original: "id > a v e r a g e",
        },
        {
          left: ["ex"],
          right: ["a", "d", "d", "(", "x", ",", "y", ")"],
          original: "ex > a d d ( x , y )",
        },
      ],
    ],
    app_replace_rule_set_strings_simple: [
      [
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["idf"],
          right: ["_"],
          original: "idf > _",
        },
      ],
      [
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
      ],
      [
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["di"],
          right: ["1"],
          original: "di > 1",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["t"],
          original: "idf > t",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
        {
          left: ["di"],
          right: ["3"],
          original: "di > 3",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["v"],
          original: "idf > v",
        },
        {
          left: ["idf"],
          right: ["l"],
          original: "idf > l",
        },
        {
          left: ["idf"],
          right: ["u"],
          original: "idf > u",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
        },
      ],
      [
        {
          left: ["stg"],
          right: ["ida", "stg"],
          original: "stg > ida stg",
        },
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
      ],
      [
        {
          left: ["stg"],
          right: ["ida"],
          original: "stg > ida",
        },
        {
          left: ["st"],
          right: ['"', "stg", '"'],
          original: 'st > " stg "',
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["A"],
          original: "idf > A",
        },
        {
          left: ["idf"],
          right: ["h"],
          original: "idf > h",
        },
        {
          left: ["idf"],
          right: ["B"],
          original: "idf > B",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["ida"],
          right: ["idf"],
          original: "ida > idf",
        },
        {
          left: ["ida"],
          right: ["di"],
          original: "ida > di",
        },
      ],
      [
        {
          left: ["idf"],
          right: ["h"],
          original: "idf > h",
        },
        {
          left: ["idf"],
          right: ["J"],
          original: "idf > J",
        },
        {
          left: ["idf"],
          right: ["$"],
          original: "idf > $",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
    ],
    app_replace_rule_set_expressions_primary: [
      [
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
      ],
      [
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["st"],
          right: ['"', "l", "u", "v", '"'],
          original: 'st > " l u v "',
        },
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
      ],
      [
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
      ],
      [
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["st"],
          right: ['"', "l", "u", "v", '"'],
          original: 'st > " l u v "',
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
    ],
    app_replace_rule_set_expressions_member_and_access: [
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["p", "r", "o", "p"],
          original: "id > p r o p",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
      [
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
      ],
      [
        {
          left: ["id"],
          right: ["l", "a", "s", "t"],
          original: "id > l a s t",
        },
        {
          left: ["id"],
          right: ["h", "u", "m", "a", "n"],
          original: "id > h u m a n",
        },
        {
          left: ["id"],
          right: ["n", "a", "m", "e"],
          original: "id > n a m e",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["id"],
          right: ["y", "e", "a", "r"],
          original: "id > y e a r",
        },
        {
          left: ["id"],
          right: ["h", "u", "m", "a", "n"],
          original: "id > h u m a n",
        },
        {
          left: ["id"],
          right: ["b", "i", "r", "t", "h", "d", "a", "t", "e"],
          original: "id > b i r t h d a t e",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["st"],
          right: ['"', "l", "u", "v", '"'],
          original: 'st > " l u v "',
        },
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
    ],
    app_replace_rule_set_expressions_equality: [
      [
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ee"],
          right: ["ee", "===", "re"],
          original: "ee > ee === re",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["id"],
          right: ["b", "u", "i", "l", "d", "i", "n", "g"],
          original: "id > b u i l d i n g",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ee"],
          original: "ex > ee",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ex"],
          right: ["ee"],
          original: "ex > ee",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ee"],
          right: ["ee", "===", "re"],
          original: "ee > ee === re",
        },
      ],
      [
        {
          left: ["id"],
          right: ["l", "o", "v", "e"],
          original: "id > l o v e",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
    ],
    app_replace_rule_set_scientific_notation_numbers: [
      [
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
        {
          left: ["ex"],
          right: ["ig"],
          original: "ex > ig",
        },
        {
          left: ["eE"],
          right: ["e"],
          original: "eE > e",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
      ],
      [
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["de"],
          right: ["in", "."],
          original: "de > in .",
        },
        {
          left: ["ex"],
          right: ["+", "ig"],
          original: "ex > + ig",
        },
        {
          left: ["eE"],
          right: ["E"],
          original: "eE > E",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
      ],
      [
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["2"],
          original: "pi > 2",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["9"],
          original: "pi > 9",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["-", "ig"],
          original: "ex > - ig",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["eE"],
          right: ["e"],
          original: "eE > e",
        },
        {
          left: ["de"],
          right: [".", "ig"],
          original: "de > . ig",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["ex"],
          right: ["+", "ig"],
          original: "ex > + ig",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["pi"],
          right: ["5"],
          original: "pi > 5",
        },
        {
          left: ["pi"],
          right: ["8"],
          original: "pi > 8",
        },
      ],
      [
        {
          left: ["de"],
          right: ["in", ".", "ig"],
          original: "de > in . ig",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["sn"],
          right: ["de", "se"],
          original: "sn > de se",
        },
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["ex"],
          right: ["ig"],
          original: "ex > ig",
        },
        {
          left: ["eE"],
          right: ["E"],
          original: "eE > E",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["in"],
          right: ["di"],
          original: "in > di",
        },
        {
          left: ["pi"],
          right: ["1"],
          original: "pi > 1",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
      ],
      [
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["3"],
          original: "pi > 3",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ig"],
          original: "ex > ig",
        },
        {
          left: ["eE"],
          right: ["e"],
          original: "eE > e",
        },
        {
          left: ["se"],
          right: ["eE", "ex"],
          original: "se > eE ex",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["sn"],
          right: ["ig", "se"],
          original: "sn > ig se",
        },
      ],
      [
        {
          left: ["ig"],
          right: ["di"],
          original: "ig > di",
        },
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
        {
          left: ["ig"],
          right: ["di", "ig"],
          original: "ig > di ig",
        },
      ],
      [
        {
          left: ["eE"],
          right: ["E"],
          original: "eE > E",
        },
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["pi"],
          right: ["6"],
          original: "pi > 6",
        },
        {
          left: ["pi"],
          right: ["4"],
          original: "pi > 4",
        },
      ],
      [
        {
          left: ["di"],
          right: ["pi"],
          original: "di > pi",
        },
        {
          left: ["di"],
          right: ["0"],
          original: "di > 0",
        },
        {
          left: ["pi"],
          right: ["7"],
          original: "pi > 7",
        },
      ],
    ],
    app_replace_rule_set_expressions_relational: [
      [
        {
          left: ["ro"],
          right: ["<"],
          original: "ro > <",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["id"],
          right: ["r", "e", "f", "r", "e", "s", "h"],
          original: "id > r e f r e s h",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ro"],
          right: [">"],
          original: "ro > >>",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["id"],
          right: ["u", "p", "d", "a", "t", "e"],
          original: "id > u p d a t e",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["ex"],
          right: ["re"],
          original: "ex > re",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
          original: "ce > ce ( ag )",
        },
      ],
      [
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
    ],
    app_replace_rule_set_expressions_function_calls: [
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["id"],
          right: ["f", "n"],
          original: "id > f n",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
      ],
      [
        {
          left: ["id"],
          right: ["r", "e", "f", "r", "e", "s", "h"],
          original: "id > r e f r e s h",
        },
        {
          left: ["id"],
          right: ["p", "a", "g", "e"],
          original: "id > p a g e",
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
          original: "ce > ce ( ag )",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
      ],
      [
        {
          left: ["ag"],
          right: ["ex", ",", "ag"],
          original: "ag > ex , ag",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
      ],
      [
        {
          left: ["id"],
          right: ["a", "d", "d"],
          original: "id > a d d",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
      ],
      [
        {
          left: ["id"],
          right: ["b", "u", "i", "l", "d", "i", "n", "g"],
          original: "id > b u i l d i n g",
        },
        {
          left: ["id"],
          right: ["d", "o", "o", "r"],
          original: "id > d o o r",
        },
        {
          left: ["id"],
          right: ["k", "n", "o", "c", "k"],
          original: "id > k n o c k",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
        {
          left: ["id"],
          right: ["d", "o", "u", "b", "l", "e"],
          original: "id > d o u b l e",
        },
        {
          left: ["id"],
          right: ["l", "i", "s", "t"],
          original: "id > l i s t",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["id"],
          right: ["a", "l", "l"],
          original: "id > a l l",
        },
        {
          left: ["id"],
          right: ["l", "o", "v", "e"],
          original: "id > l o v e",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
      ],
    ],
    app_replace_rule_set_expressions_additive: [
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["ex"],
          right: ["ade"],
          original: "ex > ade",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["mue", "mo", "ue"],
          original: "mue > mue mo ue",
        },
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ex"],
          right: ["ade"],
          original: "ex > ade",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ao"],
          right: ["-"],
          original: "ao > -",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["mo"],
          right: ["/"],
          original: "mo > /",
        },
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
        {
          left: ["id"],
          right: ["a", "l", "l"],
          original: "id > a l l",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
        {
          left: ["ex"],
          right: ["ade"],
          original: "ex > ade",
        },
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
          original: "ce > ce ( ag )",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
          original: "ade > ade ao mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
      ],
      [
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["id"],
          right: ["d", "o", "u", "b", "l", "e"],
          original: "id > d o u b l e",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
    ],
    app_replace_rule_set_expressions_assignment: [
      [
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
          original: "ase > lh = ase",
        },
        {
          left: ["lh"],
          right: ["id"],
          original: "lh > id",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
      ],
      [
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
          original: "ase > lh = ase",
        },
        {
          left: ["lh"],
          right: ["mle"],
          original: "lh > mle",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
      ],
      [
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ase"],
          original: "ex > ase",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
      ],
      [
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["uo"],
          right: ["-"],
          original: "uo > -",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["id"],
          right: ["z"],
          original: "id > z",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
      ],
      [
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
          original: "ase > lh = ase",
        },
        {
          left: ["re"],
          right: ["re", "ro", "ade"],
          original: "re > re ro ade",
        },
        {
          left: ["lh"],
          right: ["id"],
          original: "lh > id",
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
      ],
      [
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
      ],
      [
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
      ],
    ],
    app_replace_rule_set_unary_to_binary_equations: [
      [
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
      [
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
      ],
      [
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
      ],
      [
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["e", "=", "b"],
          right: ["c", "e", "=", "b", "c"],
          original: "e = b > c e = b c",
        },
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
      ],
      [
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["d", "b"],
          right: ["b", "d"],
          original: "d b > b d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
      ],
      [
        {
          left: ["d", "+"],
          right: ["+", "d"],
          original: "d + > + d",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
      [
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
        {
          left: ["d", "c"],
          right: ["a", "d"],
          original: "d c > a d",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
      ],
      [
        {
          left: ["c", "c"],
          right: ["c", "+", "b", "c"],
          original: "c c > c + b c",
        },
        {
          left: ["d", "e", "="],
          right: ["=", "d"],
          original: "d e = > = d",
        },
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
      ],
      [
        {
          left: ["0", "a"],
          right: ["1"],
          original: "0 a > 1",
        },
        {
          left: ["b", "a"],
          right: ["b", "1"],
          original: "b a > b 1",
        },
        {
          left: ["1", "a"],
          right: ["a", "0"],
          original: "1 a > a 0",
        },
      ],
    ],
  };
}

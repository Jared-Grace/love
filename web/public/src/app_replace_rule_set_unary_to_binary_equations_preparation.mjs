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
  };
  return r;
}

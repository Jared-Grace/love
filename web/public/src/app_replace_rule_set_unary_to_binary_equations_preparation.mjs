export function app_replace_rule_set_unary_to_binary_equations_preparation() {
  return {
    name: "Unary to Binary Equations Preparation",
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
        end: "dd",
      },
      {
        start: "d",
        end: "ded",
      },
      {
        start: "d",
        end: "de=",
      },
      {
        start: "de=",
        end: "=d",
      },
      {
        start: "de=",
        end: "df=",
      },
      {
        start: "de=",
        end: "ddf=",
      },
      {
        start: "de=",
        end: "dedf=",
      },
      {
        start: "de=",
        end: "df=f=",
      },
    ],
  };
}

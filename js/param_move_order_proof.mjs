import { arguments_assert } from "./arguments_assert.mjs";
export function param_move_order_proof(alpha, beta, gamma, delta) {
  arguments_assert(arguments, 4);
  ("A throwaway standing in for a real function while the parameter-moving command is checked, so the check runs on a declaration and its call sites rather than on reasoning alone.");
  ("IT EXISTS TO BE REORDERED AND THEN DELETED. Its four parameters are named in alphabetical order so that any order they come back in is readable at a glance, and it does nothing with them beyond handing them back, so nothing about what it means can be broken by moving them.");
  let handed = {
    alpha,
    beta,
    gamma,
    delta,
  };
  return handed;
}

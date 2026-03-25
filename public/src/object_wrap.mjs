export function object_wrap(goal, property_name) {
  let r2 = {
    [property_name]: goal,
  };
  return r2;
}

export function object_wrap(goal, property_name) {
  let r = {
    [property_name]: goal,
  };
  return r;
}

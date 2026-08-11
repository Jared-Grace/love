export function js_binding_names_unbindable() {
  "The words this language will not let a function bind, so a name that is one of them can never become a parameter however the code is rearranged. There are two, and both are only refused where the code is strict, which every file here is because every file is a module. A piece of code inside another one may read either of them freely; what breaks is moving that piece out, because the reading then has to be handed in through a parameter list, and the parameter list is where the refusal lives.";
  let v = ["eval", "arguments"];
  return v;
}

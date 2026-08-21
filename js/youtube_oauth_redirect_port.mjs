export function youtube_oauth_redirect_port() {
  "The door on this machine that Google is told to send the answer back to.";
  "A desktop sign-in is allowed to name any door on this machine, and none of them has to be registered with Google beforehand - that freedom is the whole reason the desktop kind was chosen over the web kind. A fixed number is picked rather than whichever door happens to be free, because the number is printed in the address a person is about to open and a run that answers on a different door every time cannot be checked against the run before it.";
  "It is not the door the dev site answers on. Two servers on one number would mean whichever started first swallowed the sign-in.";
  let port = 8123;
  return port;
}

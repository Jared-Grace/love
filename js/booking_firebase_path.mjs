export function booking_firebase_path() {
  "Storage folder where public preaching bookings are written; under user/uuid so the storage rules allow an unauthenticated write from the booking website";
  let v = "user/uuid/bookings/";
  return v;
}

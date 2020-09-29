function isNatural(v) {
  return !isNaN(v) && isFinite(v) && v >= 0 && v % 1 == 0;
}

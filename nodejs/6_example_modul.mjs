function ust_alma(taban, us) {
  return Math.pow(taban, us);
}

function faktoriyal_alma(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * faktoriyal_alma(n - 1);
}

export { ust_alma, faktoriyal_alma };
function frogJump(X: number, Y: number, D: number) {
  if (X <= Y) {
    const diff = Y - X;
    const fullSteps = diff / D;
    return Math.ceil(fullSteps);
  }
}

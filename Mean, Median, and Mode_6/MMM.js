const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);describe("Mean", () => {
 it("Should implement mean", () => {
  assert.equal(Stats.round(stat1.mean()), 3.43);
  assert.equal(Stats.round(stat2.mean()), 2.5);
 });
});describe("Median", () => {
 it("Should implement median", () => {
  assert.equal(stat1.median(), 4);
  assert.equal(stat2.median(), 2.5);
 });
});describe("Mode", () => {
 it("Should implement mode", () => {
  assert.deepEqual(stat1.mode(), [4, 5]);
  assert.deepEqual(stat2.mode(), []);
 });
});


it('should calculate the monthly rate correctly', function () {
  // ...
  const values = { 
    amount: 10000,
    years: 8,
    rate: 4.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('124.23');
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc

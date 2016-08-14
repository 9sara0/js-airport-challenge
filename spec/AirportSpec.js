'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane   = jasmine.createSpy('plane');
  });

  it('Has no planes by defualt', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landign', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane])
  });

  it('Can clear planes fro takeoff', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
});

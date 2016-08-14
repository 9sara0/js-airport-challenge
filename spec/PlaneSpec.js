'use strict';

describe('Plane',function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });

  it('Can land at an airport', function() {
    plane.land(airport)
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('Can take off from an airport', functn() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});

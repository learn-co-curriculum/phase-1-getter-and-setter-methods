require ( './helpers.js' );

let circle;

describe( "Circle", () => {
  beforeEach( () => {
    circle = new Circle( 6 )
  } )

  it( "correctly returns the radius property of a Circle instance using `circle.radius`", () => {
    expect( circle.radius ).to.equal( 6 )
  } )

  describe( "gets", () => {
    it( "the diameter of a circle using the pseudo-property `circle.diameter`", () => {
      expect( circle.diameter ).to.equal( 12 )
    } )
    it( "the circumference of a circle using the pseudo-property `circle.circumference`", () => {
      expect( circle.circumference ).to.be.at.least( 37.68 )
      expect( circle.circumference ).to.be.at.most( 37.71 )
    } )
    it( "the area of a circle using the pseudo-property `circle.area`", () => {
      expect( circle.area ).to.be.at.least( 113 )
      expect( circle.area ).to.be.at.most( 113.1 )
    } )
  } )

  describe( "sets", () => {
    it( "the radius using the pseudo-property `circle.diameter`", () => {
      circle.diameter = 36
      expect( circle.radius ).to.eq( 18 )
    } )

    it( "the radius using the pseudo-property `circle.circumference`", () => {
      circle.circumference = 100
      expect( circle.radius ).to.be.at.least( 15 )
      expect( circle.radius ).to.be.at.most( 16 )
    } )

    it( "the radius using the pseudo-property `circle.area`", () => {
      circle.area = 200
      expect( circle.radius ).to.be.at.least( 7 )
      expect( circle.radius ).to.be.at.most( 8 )
    } )
  } )

} )

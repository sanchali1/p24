class Iron{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	var options={
		restitution:0.8,
		friction:3,
		density:20
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, (this.r)/2,this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.r,this.r)

			pop()
	}

}
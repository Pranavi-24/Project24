class Stone{
	constructor(x,y,r){
	var options = {
		restitution: 0.08,
		friction: 0.09,
		density: 12
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("cyan");
			ellipse(0,0,this.r,this.r);
			pop()
	}

}
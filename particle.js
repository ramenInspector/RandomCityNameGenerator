class particle {
  constructor() {
    this.x = random(width/2-20,width/2+20)
    this.y = random(height/2-20,height/2+20)
    this.d = random(2,10)
    this.xSpeed = random(-7,7)
    this.ySpeed = random(-7,7)
    this.a = random(200,255)
    this.rg = random(20,40)
    this.b = random(40,60)
  }
  
  show() {
    noStroke()
    fill(this.rg,this.rg,this.b,this.a)
    circle(this.x,this.y,this.d)
  }
  
  move() {
    this.x += this.xSpeed
    this.y += this.ySpeed
    
    this.a -= 5
  }
  
  dead() {
    return this.a == 0
  }
}
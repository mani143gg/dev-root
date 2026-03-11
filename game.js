const config = {
type: Phaser.AUTO,
width: window.innerWidth,
height: window.innerHeight,
backgroundColor:"#8ed6ff",
physics:{default:"arcade"},
scene:{create,update}
}

const game = new Phaser.Game(config)

let player
let points=[]

function create(){

player=this.physics.add.image(200,200,null)
player.setCircle(20)
player.setTint(0x000000)

this.input.on("pointermove",(pointer)=>{
if(pointer.isDown){
player.x=pointer.x
player.y=pointer.y
}
})

points=[

createPoint(this,400,200,"School","Studied HSC and SSLC in Trivandrum"),

createPoint(this,800,250,"College","BCA and MCA"),

createPoint(this,1200,250,"Internship","AdOps Engineering Intern at Airtory"),

createPoint(this,1600,250,"Developer","4+ years building Vue & Laravel apps")

]

this.cameras.main.setBounds(0,0,2000,800)
this.physics.world.setBounds(0,0,2000,800)

this.cameras.main.startFollow(player)

}

function update(){

points.forEach(p=>{

let dist=Phaser.Math.Distance.Between(player.x,player.y,p.x,p.y)

if(dist<80){
showInfo(p.text)
}

})

}

function createPoint(scene,x,y,label,text){

let t=scene.add.text(x,y,label,{fontSize:"24px",backgroundColor:"#fff"})
t.text=text

return t

}

function showInfo(text){

let box=document.getElementById("infoBox")
box.innerHTML=text
box.style.display="block"

}

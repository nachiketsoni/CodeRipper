import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import css from '../../Components/Home/Home.module.css'
import dustbin from '../../images/dustbinhomepage.png'
import boot from '../../images/boothomepage.png'
import r3 from '../../images/r3homepage.png'

var home=[{
    img:dustbin,
    des:"Put trash in the  right place"
},
{
    img:boot,
    des:"Reduce,Reuse,Recycle That’s our motto"
},
{
    img:r3,
    des:"The Earth is what we all have in common"
}]

function Cards() {
 return (
    <>
    {home.map((e,id)=>(
        <Card key ={id} className={css.c} style={{ width: '18rem',padding:"20px",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
      <Card.Img style={{height:"220px",width:"220px"}} variant="top" src={e.img}/>
      <Card.Body>
        <Card.Text style={{fontSize:"20px"}}>{e.des}
        </Card.Text>
      </Card.Body>
    </Card>
    ))}
    </>
 )
  
}

export default Cards;
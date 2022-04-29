import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const data =[{
  t11: " Word of the Day 111111111",
  t21: "be * nev * o * lent",
  t31: "well meaning and kindly.",
  t41: '"a benevolent smile"',
},
{
  t11: " Word of the Day 2222222222222222",
  t21: "be * nev * o * lent",
  t31: "well meaning and kindly.",
  t41: '"a benevolent smile"',
},
{
  t11: " Word of the Day 3333333333333",
  t21: "be * nev * o * lent",
  t31: "well meaning and kindly.",
  t41: '"a benevolent smile"',
},
{
  t11: " Word of the Day 4444444444444",
  t21: "be * nev * o * lent",
  t31: "well meaning and kindly.",
  t41: '"a benevolent smile"',
}
]


const card = (
  <React.Fragment>
  {data.map((item,index)=>{
    const {t11,t21,t31,t41}=item
  return(
      <>

    <CardContent >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {t11}
      </Typography>
      <Typography variant="h5" component="div">
      {t21}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
       {t31}
        <br />
        {t41}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
      </>
      
    )

  })}

  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
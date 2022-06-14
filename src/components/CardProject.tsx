import {Button, Card, CardContent, CardMedia, makeStyles, Theme, Typography} from "@material-ui/core";
import letmeaskImage from '../assets/images/letmeask.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

  const useStyles = makeStyles(() => (
    {
      card: {
        width: '320px',
        marginBottom: '50px',
      },
      title: {
        color:'#835AFD',
      },
      link: {
        textDecoration: 'none',
        fontSize: '18px',
        color: '#835AFD',
      },
      button: {
        margin: '0 0 19px 12px',
        textTransform:'revert',
        
      },
      arrow: {
        color: '#835AFD',
      },
    }
  ))

function CardProject() {

  const classes = useStyles();
  return(
    <Card 

      className={classes.card}>
      <CardMedia
        component="img"
        alt="letmeask projeto"
        height="150"
        image={letmeaskImage}
      />
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5">
          Letmeask
        </Typography>
        <Typography>
          Projeto criado com base nas aulas de React e typescript pela rockeseat.
        </Typography>
      </CardContent>     
      <Button size="small" className={classes.button}>
      <a color='blue' className={classes.link} href="https://letmeask.com.br" target="_blank">ver projeto</a>
      </Button>
      <ArrowRightAltIcon className={classes.arrow}/>
    </Card>
  )
}

export default CardProject;
import React from 'react'
import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from 'react-countup'

import styles from './Cards.module.css'

import cx from 'classnames'

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "Carregando..."
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infectados</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Pacientes infectados do COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Número de recuperações de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Mortes</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Número de mortes por COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
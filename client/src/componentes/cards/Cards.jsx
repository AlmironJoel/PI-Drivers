import Card from '../card/Card';
import style from './Cards.module.css';
import {useSelector} from 'react-redux'

export default function Cards({drivers}) {

   return (
      <div className={style.container}>
        { drivers.map((driver) => (
          <Card className={style.card} 
            key={driver.id} // clave unica
            id={driver.id}
            forename={driver.name?.forename?driver.name?.forename:driver.nombre}
            surname={driver.name?.surname?driver.name?.surname:driver.apellido}
            teams={driver.Teams || driver.teams}
            image={driver.image.url ? driver.image.url : driver.image}
            dob={driver.dob}
          />
        ))}
      </div>
  );
}


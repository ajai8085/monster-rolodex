import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = ({monsters})=>{
    return <div key='cardList1' className='card-list'>    
    
    {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster}></Card>;
      })}

    </div>
}
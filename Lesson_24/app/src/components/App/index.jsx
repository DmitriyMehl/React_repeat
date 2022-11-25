import { workers } from '../../data/workers'
import Worker from '../Worker'

export default function App() {

  const active_workers = workers.filter(el => el.in_office); // отоброжение активных 
  // const not_active_workers = workers.filter(el => !el.in_office); // отоброжение не активных 

  return (
    <div>
        {
            active_workers.map(el => <Worker key={el.id} {...el} />)
        }
    </div>
  )
}

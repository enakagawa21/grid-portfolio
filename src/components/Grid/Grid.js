import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'

import './Grid.css'

function Grid() {
  return (
    <div className="container">

<div className='main-grid'>

<div className='grid-item item-1'><Navbar /></div>
<div className='grid-item item-2'><Hero /></div>
<div className='grid-item item-3'>item-3</div>
<div className='grid-item item-4'>item-4</div>
<div className='grid-item item-5'>item-5</div>
<div className='grid-item item-6'>item-6</div>
<div className='grid-item item-7'>item-7</div>
<div className='grid-item item-8'>item-8</div>


</div>







    </div>
  )
}
export default Grid
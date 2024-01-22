import car1 from './assets/1000_F_568944136_AuI51K38OQH4SraxyGun89ibjfYBA5I0.jpg'
import car2 from './assets/car-background-lxpcvskier9sn4ou.jpg'
import car3 from './assets/pexels-mike-bird-1335077.jpg'
import car4 from './assets/pngtree-sports-car-wild-light-effect-creative-background-image_2190832.jpg'

import { ImageSlider } from './ImageSlider'

const images = [car1,car2,car3,car4]
export default function App() {
  return <ImageSlider imageUrls={images} />
}
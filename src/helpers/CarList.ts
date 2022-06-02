import CarImg1 from '../assets/images/card-img1.svg'
import CarImg2 from '../assets/images/card-img2.svg'
import CarImg3 from '../assets/images/card-img3.svg'

export const CarList = [
    {
        id: '1',
        name: 'Mustang',
        year: 2015,
        speed: 180,
        economic_rating: 9/10,
        users_rating: 8/10,
        image_src: CarImg1,
        image_style: {
            marginTop: '18px',
            marginLeft: '-16px'
        }
    },
    {
        id: '2',
        name: 'Mustang',
        year: 2015,
        speed: 180,
        economic_rating: 9/10,
        users_rating: 8/10,
        image_src: CarImg2,
        image_style: {
            width: '320px',
            marginTop: '-10px'
        }
    },
    {
        id: '3',
        name: 'Mustang',
        year: 2015,
        speed: 180,
        economic_rating: 9/10,
        users_rating: 8/10,
        image_src: CarImg3,
        image_style: {
            width: '480px',
            height: '480px',
            transform: 'translate(-10%, -85%)'
        }
    },
]
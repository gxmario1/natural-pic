import { useContext } from 'react'
import Context from '../Context'
import Likes from './Likes'



const Gallery = () => {

    const {images, setImages} = useContext(Context)

    const setFavs = (id) => {
        const imgIndex = images.findIndex((e) => e.id === id)
        images[imgIndex].favourite = !images[imgIndex].favourite
        setImages([...images])
    }

    return (
        <div style={{
            display: 'grid',
            gap: '20px',
            padding: '30px',
            gridTemplateColumns: 'repeat(5, 1fr)'
        }}>
            {
                images.map((e, i) => (
                    <div 
                        className='gallery-img'
                        onClick = {() => setFavs(e.id)} 
                        style={{
                            backgroundImage: `url(${e.src})`,
                            cursor: 'pointer',
                            padding: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            height: '250px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'white',
                            textAlign: 'left',
                            textShadow: '0px 0px 15px black',
                            borderRadius: '.2rem'
                        }} 
                        key={i}>
                        <Likes selected={e.favourite}/>
                        <p style={{
                            cursor: 'pointer',
                            padding: '10px 10px 0px 10px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start',
                            height: '250px',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: 'white',
                            textAlign: 'left',
                            textShadow: '0px 0px 15px black',
                            borderRadius: '.2rem'
                        }}>{e.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery

import { useContext } from 'react'
import Context from '../Context'

function Favs() {
    const {images,setImages} = useContext(Context)
    const deleteFav = (id) => {
        const imgIndex = images.findIndex((e) => e.id === id)
        images[imgIndex].favourite = !images[imgIndex].favourite
        setImages([...images])
    }
    return (
        <div>
            <h1 style={{
                fontSize: '2rem',
                textAlign: 'center',
                color: '#43a047',
                paddingTop: '2rem'
            }}>Natural Pic</h1>
            <div style={{
                display: 'grid',
                gap: '20px',
                padding: '30px',
                gridTemplateColumns: 'repeat(4, 1fr)'
            }}>
                {
                    images.filter((e) => e.favourite).map((e, i) => (
                        <div 
                            onClick = {() => deleteFav(e.id)} 
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
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Favs

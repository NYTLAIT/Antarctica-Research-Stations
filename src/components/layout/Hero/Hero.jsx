import './Hero.css'
import defaultHero from '../../../assets/images/layout/hero/AirShotSouthPoleStation_NOAAObservatory.jpg'

function Hero({heroImg = defaultHero}) {
    const heroBg = `linear-gradient(to right, var(--bg-primary), transparent), url(${heroImg})`
    return (
        <div 
            className='Hero'
            style={{ backgroundImage: heroBg }}
        >
            <div className='hero-text'>
                <h1 className='hero-headline'>Explore the Frontiers of Polar Research</h1>
                <h2 className='hero-subline'>A Continent of Science</h2>
                <p className='hero-paragraph lede'>
                    In one of the most extreme environments on Earth,
                    multitudes of research stations dot the white terrain and 
                    brave the harsh conditions to push the boundaries of 
                    scientific discovery.
                    </p>
            </div>
        </div>
    )
}

export default Hero
import React from 'react'

const LocationInfo = ({location}) => {
    
return (
    <article className='dimensionInfo'>
    <h2>{location?.name}</h2>
    <ul>
        <li><span className='SubTitle'>Type:</span>{location?.type}</li>
        <li><span className='SubTitle'>Dimension:</span>{location?.dimension}</li>
        <li><span className='SubTitle'>Population:</span>{location?.residents.length}</li>
    </ul>
    </article>
)
}

export default LocationInfo

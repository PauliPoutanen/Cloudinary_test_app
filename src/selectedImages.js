import React from 'react'

import Row from './row';




const SelectedImages =(props) => {

   



let showimages = props.list.map((photo, index) =>{
    return (
        <Row key={photo._id} photo={photo} index={index} cld={props.cld}/>
    )
})

return (
    <div>
        {showimages}
    </div>
)
}

export default SelectedImages
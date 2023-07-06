import { AdvancedImage } from "@cloudinary/react"

const Row = (props) =>{

    console.log("ROW", props)
    const tempUrl = props.photo.url.substring(49)
    console.log(tempUrl)
    const image = props.cld.image(tempUrl)


    return (
        
    <div>
        <AdvancedImage cldImg={image} /> 
    </div>
 
    )
}
export default Row
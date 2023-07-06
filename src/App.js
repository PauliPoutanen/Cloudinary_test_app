import React from "react"
import {useState, useEffect} from "react"
import {Cloudinary} from "@cloudinary/url-gen";
import UploadWidget from "./upLoadWidget";
import SelectedImages from "./selectedImages"


const App =() => {

  const [state, setState]=useState({
    list:[]
  })

  const [urlRequest, setUrlRequest] = useState({
    url:"",
    request:{},
    action:""

  })

  
  useEffect(() => {
    getAll()
  }, [])
  
  useEffect(()=> {
const imgData = async () => {
  if(!urlRequest.url){
    return
  }
  const response = await fetch(urlRequest.url , urlRequest.request)
  if(!response){
    console.log("Ei vastausta")
    return
  }

  if(response.ok){
    switch(urlRequest.action) {
      case "getdata":
        const data = await response.json()
        if(!data) {
          return
        }
      setState({
        list:data
      })
      return
      case "add_data":
      getAll()
      return
      default:
        return
      
      
    }
  }
  else {
    console.log("Vastaus on pielessä")
  }

}
imgData()


  },[urlRequest])


const getAll =() => {
  setUrlRequest({
    url:"/api/photos",
    request:{
      "method":"GET"
    },
    action:"getdata"
  })
}

const addData =(imagedata) => {
  setUrlRequest({
    url:"/api/photos",
    request:{
      "method":"POST",
      "headers":{
        "Content-Type":"application/json"
      },
      "body":JSON.stringify(imagedata)
    }, 
    action:"add_data"
  })
}





  

const cld = new Cloudinary({cloud: {cloudName: 'dthsowsft'}});
console.log(cld)







return(
  <div>
    <UploadWidget addData={addData}/>
    <SelectedImages list={state.list} cld={cld}/>

</div>

)

}


export default App
import axios from 'axios';
import "./write.css"

export default function Write() {

  async function sendData(event) {
    try {
      event.preventDefault()
      const res = await axios.post("http://localhost:8000/write" , {  // The json object to add in the collection
      title: event.target.title.value,
      content: event.target.content.value,
      thumbnail: event.target.thumbnail.value
    })

   if (res.status === 200)
     //loadData(); // If everything is ok, reload data in order to upadate the component
     alert("Baguette")
   else
     console.log("Failed to add article")
   } catch(err) {console.log("Error =>", err)}
 }

 function updateImg() {
   document.querySelector(".thumbnail__image").src=document.querySelector(".thumbnail__input").value;
 }

  return(<>
    <form id="upload" onSubmit={sendData} method="GET">
      <div className="form__thumbnail">
        <img className="thumbnail__image" src="/"/>
        <p className="alc"> <label htmlFor="thumbnail">Thumbnail URL: </label> <input onKeyUp={updateImg} required type="input" className="thumbnail__input" name="thumbnail"/> </p> <br/>
      </div>

      <hr/>

      <h1 className="alc">Content</h1>

      <div className="container">
         <input required type="input" name="title" className="title__input" placeholder="Click to add title"/> <br/>
         <textarea controls type="input" className="content__input" placeholder="Click to add content" required form="upload" name="content"></textarea>
      </div>

      <p className="alc"><button type="submit">Add article !</button></p>
    </form>
  </>)
}

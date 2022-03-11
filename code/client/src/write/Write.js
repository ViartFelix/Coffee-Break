import axios from 'axios';

export default function Write() {

  async function sendData(event) {
    try {
      event.preventDefault()
      const res = await axios.post("http://localhost:8000/write" , {  // The json object to add in the collection
      title: event.target.title.value,
      content: event.target.content.value
    })

   if (res.status === 200)
     //loadData(); // If everything is ok, reload data in order to upadate the component
     alert("Baguette")
   else
     console.log("Failed to add article")
   } catch(err) {console.log("Error =>", err)}
 }

  return(<>
    <form id="upload" onSubmit={sendData} method="GET">
      <div>
        <label htmlFor="thumbnail">Thumbnail</label> <input required type="input" name="thumbnail"/> <br/>
      </div>

      <div>
         <label htmlFor="title">Title</label> <input required type="input" name="title"/> <br/>
         <label htmlFor="content">content</label> <textarea type="input" required form="upload" name="content"> </textarea> <br/>
      </div>

      <button type="submit">Add article !</button>
    </form>
  </>)
}

import PageTitle from "./layouts/PageTitle"
import Index from "./routes/Index"


function App() {
  return (
    <div className="">
     <PageTitle title={"Home"}/>

     <Index/>
    </div>
  )
}

export default App


// npm install @reduxjs/toolkit react-router-dom react-redux
// npm install uuid
// npm i react-helmet
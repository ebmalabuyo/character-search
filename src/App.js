import React from "react";
import Card from "./components/card";
import Search from "./components/search";

/// get input from form 
/// connect it to state
/// use that state and put into the string url 


export default function App() {

  const [data, setData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [page, setPage] =  React.useState(1)
  const [searchValue, setSearchValue] = React.useState("")
  
  const url = `https://rickandmortyapi.com/api/character`;
  React.useEffect(() => {
    function getJsonData(i) {
      fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
          .then(res => res.json())
          .then(stuff => {
            console.log(stuff)
            setData(prev => prev.concat(stuff.results))
          })
        }
      
      for (let i = 0; i < 10; i++) {
        getJsonData(i)
      }
      setIsLoading(false)
      }, [])


const nextPage = () => {
  setPage(prev => prev + 1)
  console.log(page)
  console.log(data)
}

  return(
    <div>
      <h1>TEST</h1>
      <Search 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <p>{page}</p>
      <button onClick={nextPage}>Next Page</button>
      {!isLoading && data
      .filter(item => item.name.match(new RegExp(searchValue, "i")))
      .map((item, index) => { 
        return(
        <Card
          index = {index}
          name = {item.name}
          species = {item.species}
          image = {item.image}
          /> )
                }
              )
      }
    </div>
)}

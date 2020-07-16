import React from 'react';
import Context from './context';
import TDList from './main/app1';
import AddBuying from './main/addBuy';
import Loader from './Loader'

function App() {
  const server = '192.168.1.9';
  const [buy,setBuy] = React.useState('')
  const [loading, setLoading] = React.useState(true)

function ontg(id){
  setBuy(buy.map(td =>{
    if (td.id_do === id){
      td.complete = !td.complete
      fetch(`http://${server}:3000/complete`,{
        method: 'POST',
        headers: {
          'CONTENT-TYPE': 'application/json'
        },
        body: JSON.stringify({id_do: id,boolean: td.complete})
      })
    }
    return td
  })
  )
}

React.useEffect(() =>{ 
  fetch(`http://${server}:3000/do`)
  .then(response => response.json())
  .then(response => {
    setBuy(response.data.rows)
    setLoading(false);
  })},[])

function removeList(id){
      setBuy(buy.filter(td => id !== td.id_do))
      fetch(`http://${server}:3000/del`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id_do: id})
      })
      .then(response => response.json())
      .then(response => {
        setBuy(response.data.rows)
      })
}
function addBuy(title, about){
  let data = {}
  data = {do: title, About: about}
  fetch(`http://${server}:3000/Add`,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  )
  .then(response => response.json())
  .then(response => {
    setBuy(response.data.rows)
  })
}
  return (
    <Context.Provider value = {{removeList}}>
          <div className="hibody">
              <h1 style={{textAlign: "center"}}>Важные сука дела</h1>
              <AddBuying onCreate={addBuy}/>
              {loading && <Loader />}
              {buy.length ? <TDList todos = {buy} onTogle={ontg}/>: loading ? null:<p style={{textAlign: "center"}}>Список пуст.</p>}
          </div>
    </Context.Provider>
  );
}

export default App;

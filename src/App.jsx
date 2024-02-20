import { useEffect, useState } from "react"

//! UseEffect - Documentation
function App() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState([]);

  console.log("Sayfa render edildi.") 
  // Render durumunu gösterecek olan bir konsol mesajına sahibiz.
  // We have a console log message that will be displayed render status.  

  useEffect(() => {
    console.log("Merhaba")
  }, [])
  // Sayfa ilk yüklendiğinde yani ilk render işleminde çalışacak olan etkiyi sağladı.
  // It provided the effect that will work when the page is first loaded, that is, in the first rendering process.

  useEffect(() => {
    console.log("Merhaba")
  }, [lastName])
  // Burada bir state değişlikliği güncellemesi olduğunda çalışması gerektiği söylüyoruz.
  // Here We say that its should work when a state update, 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))
    console.log(data)
  }, [])

  // Burada bir fetch api isteği ile useEffect konusunusu daha iyi anlabiliriz. Peki bu kod parçacığı nedir?
 
  // Sayfa ilk yüklendiği yani ilk render olduğunu zaman fetch api isteği gönderilir ve sonra herhangi
  // bir state değişkiliği olduğunda tekrar render edilmez.





  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>

      <input type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <input type="text"
        onChange={(e) => setLastName(e.target.value)}
      />

    </div>
  )
}

export default App

# useEffect 

React'ta, `useEffect` Hook'u, fonksiyon bileşenlerinde yan etkileri (side effects) ele almak için kullanılır. Yan etkiler, genellikle ağ istekleri, abonelikler, zamanlayıcılar veya DOM manipülasyonları gibi işlemleri içerir. Bu belge, `useEffect`'in ne olduğunu, hangi durumlarda faydalı olduğunu ve dikkat edilmesi gereken püf noktaları açıklar.

## useEffect Nedir?

`useEffect`, React bileşenlerinin yaşam döngüsüne entegre edilen bir Hook'tur. Bu, bileşenin monte edilmesi, güncellenmesi veya demonte edilmesi gibi yaşam döngüsü aşamalarında belirli işlemleri gerçekleştirmek için kullanılır.

```jsx
useEffect(() => {
  // Yan etkileri burada ele al
  return () => {
    // Temizleme işlemlerini burada gerçekleştir (opsiyonel)
  };
}, [dependencies]);

```
- useEffect fonksiyonu iki parametre alır: birinci parametre, yan etkileri içeren bir fonksiyondur; ikinci parametre ise bir bağımlılık dizisidir.
- Yan etkilerin gerçekleştirildiği fonksiyon, her render sonrasında çalışır.
- Bağımlılık dizisi, belirli bir değişken veya prop değiştiğinde useEffect'in çalışmasını sağlar. Eğer boş bırakılırsa, useEffect her render sonrasında çalışır.

## Ne Zaman Kullanılır?

- Ağ İstekleri: Veri getirme, API istekleri gibi asenkron işlemler için.
- Abonelik Yönetimi: Harici bir kaynağa olan abonelikleri başlatma ve sonlandırma işlemleri için.
- Zamanlayıcılar: Belirli aralıklarla veya belirli bir süre sonra tekrarlanan işlemler için.
- DOM Manipülasyonları: React uygulamasının DOM ile etkileşimde bulunması gereken durumlar için.

## Dikkat Edilmesi Gereken Noktalar
Temizleme İşlemleri: useEffect içinde temizleme işlemleri yapılacaksa, bu temizleme fonksiyonunu döndüren bir fonksiyon sağlamak önemlidir. Bu, özellikle component demonte edildiğinde bellek sızıntılarını önlemek için önemlidir.

```javascript
useEffect(() => {
  // Yan etkileri burada ele al
  return () => {
    // Temizleme işlemlerini burada gerçekleştir (opsiyonel)
  };
}, [dependencies]);
```
Bağımlılık Dizisi: useEffect'in ikinci parametresi olan bağımlılık dizisi, değişken veya prop değiştiğinde useEffect'in çalışmasını sağlar. Bağımlılık dizisi boş bırakılırsa, useEffect yalnızca component monte edildiğinde ve demonte edildiğinde çalışır.

## Kullanım Şekilleri

```javascript
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
```

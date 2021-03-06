## 什麼是 DOM？

文件物件模型（Document Object Model, DOM），可將文件轉為結構樹表示法，透過獲取結構中的節點，可以讓程式存取、改變文件架構、內容。
例如 JavaScript 可透過選擇某個元素節點後，再去修改該節點原有的屬性、在原節點前後新增內容，或透過節點再往上或往下抓取其他節點...等等。
DOM 是 HTML 與 JavaScript 之間的橋樑，JavaScript 可以透過 DOM 改變文件內容並在畫面上呈現出來。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

捕獲 -> target -> 冒泡

到事件傳到 target 本身的過程為捕獲，target 之後向上層回傳的過程為冒泡。

## 什麼是 event delegation，為什麼我們需要它？

事件委派，當程式中有過多重複的監聽，可以直接透過監聽父節點，省去一一針對子節點做監聽的動作，未來子節點有數量調整也不用再去修改監聽。
同時，當頁面中需要被監聽的節點是動態產生時，使用 event delegation 可以確保事件正確被監聽、沒有遺漏。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

#### event.preventDefault()：阻止瀏覽器預設行為
與事件傳遞無關，主要作用是阻止瀏覽器預設行為，像是超連結跳轉及表單送出等預設動作。阻止預設行為後事件依然會繼續傳遞，像是表單驗證的應用上就可以先使用 event.preventDefault() 阻止送出表單，待確認驗證內容無誤再送出。

#### event.stopPropagation()：取消事件傳遞
事件傳遞到 target 本身後，不會再繼續傳遞事件。當預期事件只觸發到 target 本身，不希望事件繼續傳遞、觸發到其他元素時可以使用。



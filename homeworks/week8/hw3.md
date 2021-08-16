## 什麼是 Ajax？
Ajax，「Asynchronous JavaScript and XML」，非同步的 JavaScript 與 XML 技術。
在瀏覽器發送 Request 時需要應用到的一種技術，由於是非同步，所以程式不需等待 Response 回傳便可繼續往下執行，待 Response 回來後再透過 Callback Function 將結果送回。

## 用 Ajax 與我們用表單送出資料的差別在哪？
1. 如使用表單送出資料，當收到 Response 時，頁面會直接轉換，將結果渲染呈現在瀏覽器上。
2. 透過 Ajax 傳送資料時，當瀏覽器收到 Response 後會將資料交給 JavaScript，頁面不會直接有變動。

## JSONP 是什麼？
JSONP，「JSON with Padding」，資料格式 JSON 的一種「使用模式」，可透過它控管部分不受同源政策控管的標籤，達到跨來源資源共享。

## 要如何存取跨網域的 API？
CORS，「Cross-Origin Resource Sharing」，跨來源資源共享。當符合 CORS 規範時就能存取跨網域的 API。

CORS 規範中說明，如果欲開啟跨來源 HTTP 請求的話，Server 得在 Response 的 Header 加上「Access-Control-Allow-Origin」或「Access-Control-Allow-Headers」或「Access-Control-Allow-Methods」，當其內容為允許，則檢驗通過，即可接收跨來源請求的回應。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週沒有透過瀏覽器發出 Request。當中間程序多了瀏覽器就會有較多規範，其中包含跨網域問題。
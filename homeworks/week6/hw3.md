## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. `<hr />` 產生分隔線

2. `<sup>` 上標籤、`<sub>` 下標籤

3. `<a href="mailto:sk70885@hotmail.com">Email Vera</a>` 點選頁面超連結可直接觸發電子郵件軟體。

## 請問什麼是盒模型（box modal）

元素的「內容」、「寬高」以及「上下左右的距離」，整體可以構成像一個盒子，用於規劃版面配置。
盒模型由四個部分組成，分別是「content」、「padding」、「border」、「margin」。一般在設定 box-sizing 時預設為 content-box，以內容為基準延伸向外計算整個盒模型的尺寸。但這種方法在運用上較不靈活，在規劃版面時需要經過較多計算。一般建議將 box-sizing 設定為 border-box，會以整個盒模型的邊線為基準，再往內扣除內邊距及邊線，最後回推出內容的長寬。

![](https://static.coderbridge.com/img/verakang/d1eaee6d3d17494ea6b30f6bee466b22.png)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

1. display: inline 行元素

元素可以穿插出現在同一行當中，像是 `<a>`、`<span>`等標籤。又因為需要在同一行裡呈現，為確保不讓元素的位置互相影響，因此沒有辦法隨意更動元素的高度與上下邊距。元素的預設寬度隨內容長度而訂，故無法另外設定寬度，在調整 margin 和 padding 的值時，左右邊距可以改變、上下則無法。

2. display: block 區塊元素

元素單獨佔滿整行，可以隨意調整寬高以及上下左右的邊距。

3. display: inline-block 行內區塊

對外帶有行元素的特性，對內則是區塊元素。因此行內區塊可以並排顯示於同一行中，同時也可以調整寬高及上下左右的邊距。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

1. static

預設樣式，依循正常排版方式，不會被特別定位在某個位置。

2. relative

相對定位，可以以自身原本所在位置為基準，設定上下左右距離，調整定位點，但不會影響到其他元素所在位置。

3. absolute

絕對定位，以上層屬性不是 static 的父元素為基準調整定位。當元素設定為 absolute 屬性後，該元素會跳脫原訂排版，原本在後的元素會因此往前遞補。

4. fixed

固定定位，以瀏覽器為基準，將元素固定在某個點，當元素設定為 fixed 屬性後，該元素會跳脫原訂排版，原本在後的元素會因此往前遞補。


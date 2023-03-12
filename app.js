const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright">트레이딩뷰 제공 <a href="https://kr.tradingview.com/symbols/JPYKRW/?exchange=FX_IDC" rel="noopener" target="_blank"><span class="blue-text">JPY KRW 환율</span></a></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js" async>
  {
  "symbol": "FX_IDC:JPYKRW",
  "width": 350,
  "colorTheme": "light",
  "isTransparent": false,
  "locale": "kr"
}
  </script>
</div>`);
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});

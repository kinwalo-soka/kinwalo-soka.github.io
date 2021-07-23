const clock = () => {
    //現在の日時情報を取得
    const d = new Date();
  
    //年
    let year = d.getFullYear();
    //月
    let month = d.getMonth() + 1;
    //日
    let date = d.getDate();
    //曜日
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
  
    //1桁を足す
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;

    //日付の文字列を作成
    let today = `${year}.${month}.${date}（${day}）　`;
  
    //文字列を出力
    document.querySelector(".clock-date").innerText = today;
};
  
    //1秒ごとにclock関数を呼び出す
    setInterval(clock, 1000);
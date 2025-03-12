document.addEventListener("DOMContentLoaded", function() {
    showFortune();
    loadDiaries();
    loadZodiacs();
    loadRanking();
});

/* 🔮 今日の運勢（ラッキーアイテム付き） */
const fortunes = [
    { type: "大吉", item: "赤い靴", reason: "行動力がアップする！" },
    { type: "中吉", item: "カフェラテ", reason: "リラックスすると運気が上がる！" },
    { type: "小吉", item: "青いハンカチ", reason: "幸運を呼び込むアイテム！" },
    { type: "凶", item: "帽子", reason: "頭を守ると運気が安定する！" }
];

function showFortune() {
    let lucky = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById("fortune").textContent = `運勢：${lucky.type} 🎉`;
    document.getElementById("luckyItem").textContent = `ラッキーアイテム：${lucky.item}`;
    document.getElementById("reason").textContent = `理由：${lucky.reason}`;
}

/* 🏆 星座ランキング（投票数付き） */
function loadRanking() {
    let ranking = [
        "牡羊座", "双子座", "射手座", "獅子座", "水瓶座", "天秤座", "山羊座", "乙女座", "蟹座", "蠍座", "魚座", "牡牛座"
    ];
    ranking.sort(() => Math.random() - 0.5);
    
    let list = document.getElementById("rankingList");
    list.innerHTML = "";
    
    ranking.slice(0, 5).forEach(sign => {
        let votes = Math.floor(Math.random() * 90000) + 10000; // 1万～10万のランダム票数
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `${sign} <span class="badge bg-warning">${votes.toLocaleString()}票</span>`;
        list.appendChild(li);
    });
}

/* 📖 日誌投稿・削除機能 */
function addDiary() {
    let text = document.getElementById("diaryInput").value.trim();
    if (text === "") return;

    let list = document.getElementById("diaryList");
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `${text} <button class="btn btn-danger btn-sm float-end" onclick="removeDiary(this)">❌</button>`;
    list.appendChild(li);

    saveData("diaryData", list.innerHTML);
    document.getElementById("diaryInput").value = "";
}

function removeDiary(button) {
    button.parentElement.remove();
    saveData("diaryData", document.getElementById("diaryList").innerHTML);
}

/* 🌟 星座記録 */
function addZodiac() {
    let text = document.getElementById("zodiacInput").value.trim();
    if (text === "") return;

    let list = document.getElementById("zodiacList");
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `${text} <button class="btn btn-danger btn-sm float-end" onclick="removeZodiac(this)">❌</button>`;
    list.appendChild(li);

    saveData("zodiacData", list.innerHTML);
    document.getElementById("zodiacInput").value = "";
}

function removeZodiac(button) {
    button.parentElement.remove();
    saveData("zodiacData", document.getElementById("zodiacList").innerHTML);
}

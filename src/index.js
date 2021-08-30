import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // pタグ生成
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = text;

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // console.log(addTarget);
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // console.log(text);

    // div以下を初期化
    addTarget.textContent = null;
    // console.log(addTarget);

    // divタグ生成
    const p = document.createElement("p");
    p.innerText = text;
    // console.log(p);

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      // console.log(text);
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    // console.log(addTarget);

    // liタグ生成
    const li = document.createElement("li");
    li.appendChild(addTarget);
    // console.log(li);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
    // const deleteTarget = deleteButton.parentNode.parentNode;
    // console.log(deleteTarget);
    // console.log(document.getElementById("incomplete-list"));
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグ生成
  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

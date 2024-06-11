/**
 * let ●●● = [];
 * $("●●●")
 * 
$("#●●●").on("click", function () {

});

for (let i = 0; i < ●●●; i++) {

}
 *
 *
 *
 *
 */

//localStorage.setItem('301','コスゲ');

//更新
//localStorage.setItem('301','いわした');

//取得
//const todo = localStorage.getItem('todoText');
//console.log(todo);

//消去
//localStorage.clear();

//const taskList =['シャンプーを買う','そうじをする','洗濯をする']
//consoke.log(taskList);



let taskList = [];
//ローカルストレージからとってきて文字→配列に変換
const task = localStorage.getItem('todoText');



console.log(taskList);

if (task !== null) {
    taskList = JSON.parse(task);


    for (let i = 0; i < taskList.length; i++) {
        $("#todoList").append(`<li>${taskList[i]}<button class="doneBtn">done</button></li>`);
    }


}


//追加ボタン
$('#addTodoBtn').on('click', function () {

    const todoText = $("#todoText").val();
    taskList.push(todoText);

    //空の場合入力不可
    if (todoText !== "") {



        //if ([checkbox].isSelected()) {
        // チェックボックスが選択されている場合
        //    localStorage.setItem("todoText", JSON.stringify(taskList));

        //const index = taskList.length ; 
        //$("#todoList").append(`<li>必須:${todoText}<button class="doneBtn" "${index}">done</button></li>`);

        //console.log(todoText);

        //$("#todoText").val("");

        //}// else {
        // チェックボックスが選択されていない場合
        localStorage.setItem("todoText", JSON.stringify(taskList));

        const index = taskList.length;
        $("#todoList").append(`<li>${todoText}<button class="doneBtn" "${index}">done</button></li>`);

        console.log(todoText);

        $("#todoText").val("");

        //}



    }

});




//$('#doneBtn').on('click', function (){
//    remove.todoText();  // TODOデータを一旦削除
//
//});



//削除ボタン
$('#deleteTodoBtn').on('click', function () {

    localStorage.clear();

    $("#todoList").empty();
    taskList = [];
});

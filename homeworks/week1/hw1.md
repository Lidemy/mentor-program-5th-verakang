## 交作業流程

1. 先將專案下載到本機：git clone <專案網址>

2. 新建一個分支：git branch week01

3. 切換到新建的分支：git checkout week01

4. 確認自己已切換到分支，查詢版本控制狀態：git status

5. 在分支完成作業並存檔後，提交給 git 控管：git add <檔名>

   或使用 git add . 將所有異動的檔案一次提交。

6. 新建一個版本：git commit -m "week01 done"

> 步驟 5 及 6 可合併指令（用原已有檔案修改的情況下）：git commit -am "week01 done"

6. 檢視提交的歷史記錄：git log

7. 將新版本推上 GitHub：git push origin week01

8. 到 GitHub 頁面提出 pull request 請求

9. 在學習系統的作業列表頁面新增作業，並將 PR 網址附上。

10. 待助教將 week01 merge 到 master 後，重新同步遠端的 master 到本地。
    git pull origin master

11. 再將本地的 week01 刪除：git branch -d week01
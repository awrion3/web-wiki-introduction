function submitComment() {
        const commentText = document.querySelector("textarea").value;

        if (commentText.trim() !== "") {
            const newComment = document.createElement("li");

            newComment.innerHTML = `
                <div class="comment-item">
                <div class="comment-author">
                <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
                <span>방문자</span>
                </div>
                <div class="comment-content">${commentText}</div>
                </div>
            `;

            document.querySelector(".comment-list").appendChild(newComment);
            document.querySelector("textarea").value = "";

            alert("댓글이 등록되었습니다.");
        } else {
            alert("댓글을 입력해주세요.");
        }
}

function submitComment() {
    const commentText = document.querySelector("textarea").value;
    const isKorean = window.location.pathname.includes("index.html");

    const authorName = isKorean ? "방문자" : "Visitor";
    const successMessage = isKorean ? "댓글이 등록되었습니다." : "Your comment has been posted.";
    const errorMessage = isKorean ? "댓글을 입력해주세요." : "Please enter a comment.";

    if (commentText.trim() !== "") {
        const newComment = document.createElement("li");

        newComment.innerHTML = `
            <div class="comment-item">
                <div class="comment-author">
                    <img src="./images/comment-author-icon.png" alt="User Profile Image" />
                    <span>${authorName}</span>
                </div>
                <div class="comment-content">${commentText}</div>
            </div>
        `;

        document.querySelector(".comment-list").appendChild(newComment);
        document.querySelector("textarea").value = "";

        alert(successMessage);
    } else {
        alert(errorMessage);
    }
}

function translateContent() {
    const languageButton = document.getElementById("translator");
    const isKorean = window.location.pathname.includes("index.html");

    languageButton.addEventListener("click", () => {
        window.location.href = isKorean ? "english.html" : "index.html";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    translateContent();
});

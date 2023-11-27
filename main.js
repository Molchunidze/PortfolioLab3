var body = document.querySelector ('body')
// Создание элемента iframe
var videoContainer = document.createElement("iframe");

// Установка атрибутов для воспроизведения видео с YouTube
videoContainer.setAttribute("src", "https://www.youtube.com/watch?v=4RASvwUIoQs");
videoContainer.setAttribute("width", "560");
videoContainer.setAttribute("height", "315");
videoContainer.setAttribute("frameborder", "0");
videoContainer.setAttribute("allowfullscreen", "");

// Добавление элемента iframe в HTML-код
document.getElementById("video-container").appendChild(videoContainer);


document.getElementById('addNews').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const image = document.getElementById('imge').value;
  const description = document.getElementById('content').value;

  if (title && image && description) {
    const newsDetails = {
      title,
      image,
      description
    };

    const news = JSON.parse(localStorage.getItem('news')) || [];
    news.push(newsDetails);
    localStorage.setItem('news', JSON.stringify(news));

    window.location.href = '/Exam/Exam_9/index.html';
  } else {
    alert('Please fill out all fields.');
  }
});
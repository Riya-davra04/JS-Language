const newsList = document.querySelector('.newslist');
const news = JSON.parse(localStorage.getItem('news')) || [];

news.forEach((newsItem) => {
  const title = document.createElement('h3');
  title.textContent = newsItem.title;

  const image = document.createElement('img');
  image.src = newsItem.image;
  image.alt = newsItem.title;

  const description = document.createElement('p');
  description.textContent = newsItem.description;

  const div = document.createElement('div');
  div.append(title, image, description);

  newsList.append(div);
});
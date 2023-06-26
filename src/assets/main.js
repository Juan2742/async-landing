const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC-Gh7ndBnNZvGRjCzlt2Ecw&part=snippet%2Cid&order=date&maxResults=6';
const content = null || document.getElementById('content');
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c7e5e53065mshf0112e1309c9e6fp150155jsn7161b87f6604',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    const view = `
      ${videos.items.map(video => `
        <div class="group relative" style="padding: 5px; border: 2px solid rgb(255, 166, 0); border-radius: 4px; margin: 5px; background: rgb(255, 216, 203);">
          <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
      `).slice(0, 4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
    alert('No se pueden presentar los videos de Canserbero de Youtube, le pedimos paciencia.');
  }
})();

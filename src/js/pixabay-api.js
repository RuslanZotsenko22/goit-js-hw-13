import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '44449535-a1df9548b4e4ca826019364d7',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearсh: true,
  },
});

export async function getImage(imgName) {
  const res = await axios.get('', {
    params: {
      q: imgName,
    },
  });

  return res.data;
}

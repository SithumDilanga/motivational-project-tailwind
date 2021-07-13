import img1 from './assets/img1.jpg';
import img2 from './assets/img2.png';

const postData = [
    {
      username: 'Steve Hawl',
      date: '28 jun 2020',
      userProfilePic: {img1},
      postDesc: 'This is post description',
      postImages: [
        'https://live.staticflickr.com/65535/51289414298_52b007f540_h.jpg', 
        'https://live.staticflickr.com/65535/51294202574_2bfe8c0cdb_h.jpg'
      ],
      postReactions: {
          good: '15',
          awesome: '7',
          excellent: '5',
          bad: '1'
        }
      ,
    },
    {
      username: 'Jack Mori',
      date: '25 jun 2020',
      userProfilePic: {img2},
      postDesc: 'This is post description of Jack',
      postImages: [
        'https://live.staticflickr.com/65535/51294202574_2bfe8c0cdb_h.jpg', 
      ],
      postReactions: {
          good: '15',
          awesome: '7',
          excellent: '5',
          bad: '1'
        }
      ,
    },
    {
      username: 'Jane Oni',
      date: '24 jun 2020',
      userProfilePic: {img2},
      postDesc: 'This is post description of Jane',
      postImages: [
        "https://live.staticflickr.com/65535/51304260849_d30f211689_h.jpg",
        "https://live.staticflickr.com/65535/51295760866_c10e777459_h.jpg", 
      ],
      postReactions: {
          good: '25',
          awesome: '15',
          excellent: '9',
          bad: '5'
        }
      ,
    },
    {
      username: 'Niko Belic',
      date: '20 jun 2020',
      userProfilePic: {img2},
      postDesc: 'This is post description of Niko Belic',
      postImages: [
        "https://live.staticflickr.com/65535/51300730820_9c3eb95cac_k.jpg", 
      ],
      postReactions: {
          good: '35',
          awesome: '15',
          excellent: '14',
          bad: '1'
        },
    },
  ];

  export default postData;
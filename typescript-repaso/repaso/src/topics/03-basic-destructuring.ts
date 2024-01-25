interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 12,
  songDuration: 4,
  song: 'Perfect',
  details: {
    author: 'Ed Sheeran',
    year: 2016,
  },
};

// const { song, details } = audioPlayer;
// const { audioVolume = 12 } = audioPlayer;

// const [f1, f2, f3, f4 = 'Uvas']: string[] = ['Manzana', 'Banana', 'Sandia'];
// console.log(f4);

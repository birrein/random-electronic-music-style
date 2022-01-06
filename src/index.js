const styles = [
  'IDM',
  'Techno',
  'House',
  'Ambient',
  'Trance',
  'Drum & Bass',
  'Glitch',
  'Dubstep',
  'Breakcore',
  'Acid',
  'Minimal',
  'Trip Hop',
  'Ambient Dub',
  'Electro',
  'Deep House',
  'Minimal Glitch',
  'Psy-Trance',
  'Footwork',
  'Vaporwave',
  'Hardcore',
  'Chillout',
  'Big Beat',
];

const randomStyle = () => {
  const style = styles[Math.floor(Math.random() * styles.length)];
  console.log(style);
};

module.exports = { randomStyle };

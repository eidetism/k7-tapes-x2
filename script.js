/* Все тексты сайта. Правь здесь, остальной код трогать не нужно. */
const TEXTS = {
  street: 'дверь приоткрыта', // новое
  doorNote: 'на двери записка: где мы гуляли в первый раз?', // вопрос с сайта, начало новое
  doorAnswers: ['европолис', 'europolis'],
  doorHint: 'не-а. подсказка: там много магазинов и мало воздуха (название)',
  doorOk: 'ок',
  idle: 'возьми книгу с любой полки', // новое
  done: 'что-то упало на стол', // новое
  putBack: 'поставить на место', // новое
  openEnvelope: 'вскрыть', // новое
  soundOn: 'звук: вкл', // новое
  soundOff: 'звук: выкл', // новое
  volumes: [
    {
      title: 'первая встреча',
      date: '12.10.2026',
      text: 'европолис. ходили, говорили, я старался выглядеть спокойным',
    },
    {
      title: 'сквер ахматовой',
      date: '24.10.2026',
      question: 'куда мы пошли после сквера?',
      options: [
        { text: 'пошли подслушивать разговоры сельских мальчиков', reply: 'жаль, что нихуя толком и не услышали', right: true },
        { text: 'пошли за фудкортовскими', reply: 'зря ты отказалась от этого предложения' },
        { text: 'поход в бифри за шмотками с человеком пауком', reply: 'максимум, которые там нашли это каблучки васио и то только на твой размер' },
        { text: 'по домам', reply: 'нет, сначала мы почивали в маке' },
      ],
    },
    {
      title: 'сумерки',
      date: '27.10.2026',
      question: 'сколько частей этого мяса ты еще готова посмотреть со мной?',
      options: [
        { text: 'еще одну, из вежливости', reply: 'поху, все равно билеты не оч дорогие' },
        { text: 'две, дальше по настроению', reply: 'с меня ягермейстер и мы идем на 3' },
        { text: 'оставшиеся 4', reply: 'здраво, говори когда свободна и за день идем на каждый', right: true },
        { text: 'ни одной', reply: 'бебебе' },
      ],
    },
    {
      title: 'домашний кинотеатр',
      date: '28.10.2026',
      question: 'что из этого мы НЕ смотрели вместе?',
      options: [
        { text: 'репортаж', reply: 'смотрели. ты ещё вздрагивала (или это я)' },
        { text: 'каникулы', reply: 'смотрели. семейная комедия, всё по канону' },
        { text: 'слабый герой', reply: 'я должен буду узнать, почему ты так любишь своего нердика', right: true },
        { text: 'черная весна', reply: 'видимо тот нердик тя не особо зацепил раз ты забыла, что это мы смотрели' },
      ],
    },
    {
      title: 'детектор лжи',
      date: '03.11.2026',
      question: 'какой фильм тебе вообще не понравился?',
      mustPickRight: true,
      options: [
        { text: 'сумерки', reply: 'врёшь. запись не обманешь' },
        { text: 'репортаж', reply: 'врёшь. запись не обманешь' },
        { text: 'синистер', reply: 'скоро закину все отзывы европейцев, чтобы ты их хуями покрыла', right: true },
        { text: 'каникулы', reply: 'врёшь. запись не обманешь' },
      ],
    },
  ],
  letter: `ксюш

уже за первую неделю я понял, что мы оч похожи: баллы за егэ, смотрим почти одно и то же, ужастики, от которых я как тварь брыкаюсь. и каждый раз, когда мы рассказываем истории из жизни, оказывается, что мы прожили их по-разному, но будто по одному сценарию

проявлять свои чувства я не особо умею, потому решил сделать такую крошечную игрульку с опросом по местам где мы с тобой были

в общем, ты мне очень нравишься, это я никак не утаю, да и не особо старался. ну это собственно и причина почему я рядом с тобой туплю по страшному

вживую я бы хуй че нормально сказал, великий и могучий русский язык меня мальца подводит.

так что дай мне ответ взаимно ли это, чтобы я не сидел и не ждал у моря погоды`,
  closeLetter: 'закрыть письмо', // новое
  myLine: '...?', // новое
  answerNote: 'кнопка откроет телеграм, сообщение можно поменять перед отправкой',
  telegram: 'eidetism',
  answers: [
    { text: 'давай в океанариуме обсудим', message: 'прочитала письмо. давай в океанариуме обсудим' }, // новое начало
    { text: 'мне надо подумать', message: 'прочитала письмо. мне надо немного подумать' }, // новое начало
  ],
};

/* Файлы, которые появятся позже: положи рядом с этой страницей */
const SONG_FILE = 'song.mp3';
const MASCOT_FILE = 'mascot.png';
const PORTRAIT_FILE = 'portrait.png';
const SONG_VOLUME = 0.35;
const SONG_FADE_MS = 1500;
const SONG_FADE_OUT_S = 4;
const BLIP_PITCH = 520;
const BLIP_VOLUME = 0.035;
const BLIP_VOLUME_LETTER = 0.012;
const CLICK_VOLUME = 0.07;

const SCENE_W = 88;
const SCENE_H = 140;
const TYPE_MS = 24;
const OUTLINE = '#2c1608';

/* Полки в зале: x и цвет книг */
const SHELVES = [
  { x: 7, c: ['#e0492c', '#a52f1b'] },
  { x: 22, c: ['#3f96d6', '#2a6a9e'] },
  { x: 37, c: ['#ecc72f', '#b28f15'] },
  { x: 52, c: ['#e8953a', '#ad6a20'] },
  { x: 67, c: ['#8fc75a', '#5f9338'] },
];
const SHELF_W = 14;
const SHELF_TOP = 12;
const SHELF_H = 30;
const MASCOT = { w: 18, h: 27, top: SHELF_TOP + SHELF_H + 2 };
/* Финал: где стоят герои и где лежат облачка, в пикселях сцены */
const ME_FILE = 'me-walk.png';
const FINALE = {
  her: { x: 8, top: 56 },
  me: { x: 35, top: 56, doorTop: SCENE_H - MASCOT.h },
  herBubble: { x: 1, w: 40 },
  meBubble: { x: 42, w: 30 },
};
const FINALE_LINE_DELAY_MS = 350;
const FINALE_CHOICE_DELAY_MS = 1500;
/* Ряды листа спрайтов mascot.png: 4 кадра в каждом */
const FACING = { down: 0, left: 1, right: 2, up: 3 };
const WALK_MS_PER_PIXEL = 45;
const WALK_FRAME_MS = 130;
const TABLE_ENVELOPE = { x: 59, bottom: 102, w: 22, h: 14 };

const scene = document.getElementById('scene');
const box = document.getElementById('box');
const curtain = document.getElementById('curtain');
const mail = document.getElementById('mail');
const bigEnvelope = document.getElementById('bigEnvelope');
const openEnvelope = document.getElementById('openEnvelope');
const letter = document.getElementById('letter');
const soundToggle = document.getElementById('sound');

const background = pixelCanvas(SCENE_W, SCENE_H);
const backgroundCtx = background.getContext('2d');
scene.append(background);

let scale = 4;
let sprites = [];
let activeBook = null;
let mascotNode = null;
const readBooks = new Set();

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function button(text, className, onClick) {
  const node = el('button', className, text);
  node.type = 'button';
  node.addEventListener('click', onClick);
  return node;
}

function pixelCanvas(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  return canvas;
}

function rect(ctx, x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

/* Рисунок улицы */

const SIGN_LETTERS = {
  К: ['1001', '1010', '1100', '1010', '1001'],
  Н: ['1001', '1001', '1111', '1001', '1001'],
  И: ['1001', '1011', '1101', '1001', '1001'],
  Г: ['1111', '1000', '1000', '1000', '1000'],
};

function drawSign(ctx, word, x, y, color) {
  [...word].forEach((char, index) => {
    SIGN_LETTERS[char].forEach((row, dy) => {
      [...row].forEach((bit, dx) => {
        if (bit === '1') rect(ctx, x + index * 5 + dx, y + dy, 1, 1, color);
      });
    });
  });
}

function drawTree(ctx, cx, top) {
  const blobs = [[-9, 10, 18, 8], [-11, 16, 22, 12], [-9, 26, 18, 10], [-6, 34, 12, 6]];
  rect(ctx, cx - 2, top + 38, 4, 8, '#5a3414');
  blobs.forEach(([dx, dy, w, h]) => rect(ctx, cx + dx, top + dy, w, h, '#f7a80f'));
  [[-7, 12, 6, 2], [2, 18, 7, 2], [-9, 23, 8, 2], [0, 30, 6, 2]].forEach(([dx, dy, w, h]) => {
    rect(ctx, cx + dx, top + dy, w, h, '#ee4d1c');
  });
}

function drawStreet(ctx) {
  rect(ctx, 0, 0, SCENE_W, SCENE_H, '#6f6a2d');

  /* крыша и стены */
  rect(ctx, 9, 0, 70, 18, '#7f9f6a');
  rect(ctx, 7, 16, 74, 8, '#4d463d');
  rect(ctx, 11, 24, 66, 26, '#c58b6c');
  rect(ctx, 37, 40, 40, 10, '#b4553a');
  for (let y = 41; y < 50; y += 3) rect(ctx, 37, y, 40, 1, '#8e3c28');

  /* вывеска */
  rect(ctx, 41, 26, 34, 11, '#3f2a20');
  rect(ctx, 42, 27, 32, 9, '#eba98c');
  drawSign(ctx, 'КНИГИ', 46, 29, '#2c1608');

  /* окна */
  [40, 53, 66].forEach((x) => {
    rect(ctx, x - 1, 38, 11, 9, '#3f2a20');
    rect(ctx, x, 39, 9, 7, '#f0c9a8');
    rect(ctx, x + 1, 40, 7, 5, '#5c1f22');
    rect(ctx, x + 1, 42, 7, 1, '#f0c9a8');
  });

  /* крыльцо с дверью */
  rect(ctx, 13, 26, 22, 24, '#7a3b28');
  rect(ctx, 17, 27, 14, 23, OUTLINE);
  rect(ctx, 18, 28, 12, 22, '#a89a70');
  rect(ctx, 26, 38, 2, 3, '#5a3414');
  rect(ctx, 11, 26, 4, 24, '#a8c98c');
  rect(ctx, 33, 26, 4, 24, '#a8c98c');
  for (let i = 0; i < 14; i += 1) {
    rect(ctx, 24 - i - 1, 16 + i / 1.4, 2, 3, '#a8c98c');
    rect(ctx, 24 + i - 1, 16 + i / 1.4, 2, 3, '#a8c98c');
  }

  /* трава, тротуар, дорога */
  rect(ctx, 0, 50, SCENE_W, 7, '#b5ad4c');
  for (let x = 1; x < SCENE_W; x += 3) rect(ctx, x, 50 - (x % 2), 1, 2, '#8f8a33');
  rect(ctx, 0, 57, SCENE_W, 1, '#3f2f4a');
  rect(ctx, 0, 58, SCENE_W, 11, '#ddcdd6');
  for (let x = 6; x < SCENE_W; x += 14) rect(ctx, x, 58, 1, 11, '#a99aa8');
  rect(ctx, 0, 69, SCENE_W, 1, '#3f2f4a');
  rect(ctx, 0, 70, SCENE_W, 36, '#6e578c');
  for (let x = 3; x < SCENE_W; x += 18) rect(ctx, x, 87, 9, 2, '#f1c40f');
  rect(ctx, 0, 106, SCENE_W, 1, '#3f2f4a');
  rect(ctx, 0, 107, SCENE_W, 10, '#ddcdd6');
  for (let x = 12; x < SCENE_W; x += 14) rect(ctx, x, 107, 1, 10, '#a99aa8');

  /* листва снизу */
  rect(ctx, 0, 117, SCENE_W, 23, '#f7a80f');
  for (let x = -2; x < SCENE_W; x += 13) {
    rect(ctx, x + 2, 114, 9, 3, '#f7a80f');
    rect(ctx, x + 4, 118, 6, 2, '#ee4d1c');
    rect(ctx, x + 9, 127, 6, 2, '#ee4d1c');
  }

  drawTree(ctx, 2, 2);
  drawTree(ctx, 86, 4);
}

/* Рисунок зала, вид сверху */

function drawHall(ctx) {
  rect(ctx, 0, 0, SCENE_W, SCENE_H, '#000');
  rect(ctx, 1, 1, SCENE_W - 2, SCENE_H - 14, '#7a3d16');
  rect(ctx, 2, 2, SCENE_W - 4, SCENE_H - 16, '#f07d24');
  rect(ctx, 4, 4, SCENE_W - 8, SCENE_H - 20, '#f8d9ab');
  rect(ctx, 5, 44, SCENE_W - 10, SCENE_H - 62, '#f0bd80');
  [[14, 8], [30, 6], [60, 9]].forEach(([x, w]) => rect(ctx, x, 7, w, 1, '#eba95c'));
  [[12, 60], [40, 74], [68, 58], [24, 96], [74, 110], [46, 112]].forEach(([x, y]) => {
    rect(ctx, x, y, 2, 1, '#d69a57');
  });

  /* стойка, цветок */
  rect(ctx, 5, 90, 25, 14, OUTLINE);
  rect(ctx, 6, 90, 23, 9, '#f07d24');
  rect(ctx, 6, 99, 23, 4, '#7a3d16');
  rect(ctx, 21, 92, 6, 3, '#f3e7c0');
  rect(ctx, 9, 111, 6, 6, '#c9423f');
  rect(ctx, 10, 104, 4, 7, '#8fc75a');
  rect(ctx, 8, 106, 8, 3, '#5f9338');

  /* ковёр и стол */
  rect(ctx, 55, 88, 29, 34, '#b2384b');
  rect(ctx, 57, 90, 25, 30, '#d76176');
  for (let x = 59; x < 80; x += 5) rect(ctx, x, 114, 3, 3, '#b2384b');
  rect(ctx, 58, 92, 23, 14, OUTLINE);
  rect(ctx, 59, 92, 21, 10, '#f07d24');
  rect(ctx, 59, 102, 21, 3, '#7a3d16');
  rect(ctx, 60, 105, 3, 3, OUTLINE);
  rect(ctx, 76, 105, 3, 3, OUTLINE);

  /* выход внизу */
  rect(ctx, 34, SCENE_H - 18, 20, 18, '#f0bd80');
  rect(ctx, 34, SCENE_H - 2, 20, 2, '#8fb3e8');
  rect(ctx, 32, SCENE_H - 16, 2, 16, '#7a3d16');
  rect(ctx, 54, SCENE_H - 16, 2, 16, '#7a3d16');
}

function drawShelf(ctx, shelf, isRead) {
  const [base, dark] = shelf.c;
  const w = SHELF_W;
  rect(ctx, 0, 0, w, SHELF_H, OUTLINE);
  rect(ctx, 1, 1, w - 2, 5, '#f07d24');
  [8, 19].forEach((rowY) => {
    rect(ctx, 1, rowY, w - 2, 9, '#3d200e');
    for (let x = 2; x < w - 2; x += 2) {
      rect(ctx, x, rowY + 1, 1, 8, x % 4 === 0 ? dark : base);
    }
  });
  if (isRead) rect(ctx, 6, 19, 3, 9, '#3d200e');
}

/* Пока нет настоящего рисунка: условная фигурка */
function drawPlaceholderMascot(ctx) {
  rect(ctx, 5, 2, 8, 9, '#2b1a14');
  rect(ctx, 6, 4, 6, 6, '#f6c9a4');
  rect(ctx, 7, 7, 1, 1, '#000');
  rect(ctx, 10, 7, 1, 1, '#000');
  rect(ctx, 4, 4, 2, 9, '#2b1a14');
  rect(ctx, 12, 4, 2, 9, '#2b1a14');
  rect(ctx, 6, 11, 6, 8, '#4f6bd8');
  rect(ctx, 5, 12, 1, 6, '#f6c9a4');
  rect(ctx, 12, 12, 1, 6, '#f6c9a4');
  rect(ctx, 6, 19, 6, 5, '#2b2b3a');
  rect(ctx, 6, 24, 2, 2, '#fff');
  rect(ctx, 10, 24, 2, 2, '#fff');
}

function drawSmallEnvelope(ctx) {
  rect(ctx, 0, 0, 22, 14, OUTLINE);
  rect(ctx, 1, 1, 20, 12, '#efe3bd');
  for (let i = 0; i < 10; i += 1) {
    rect(ctx, 1 + i, 2 + Math.floor(i * 0.7), 1, 1, '#a8976a');
    rect(ctx, 20 - i, 2 + Math.floor(i * 0.7), 1, 1, '#a8976a');
  }
  rect(ctx, 9, 7, 2, 1, '#ff2020');
  rect(ctx, 12, 7, 2, 1, '#ff2020');
  rect(ctx, 9, 8, 5, 1, '#ff2020');
  rect(ctx, 10, 9, 3, 1, '#ff2020');
  rect(ctx, 11, 10, 1, 1, '#ff2020');
}

/* Кадры вскрытия: 0 закрыт, 1 клапан поднимается, 2 открыт, 3 письмо выходит */
function drawBigEnvelope(ctx, frame) {
  ctx.clearRect(0, 0, 34, 36);
  const bodyTop = 14;

  if (frame >= 2) {
    for (let i = 0; i <= 16; i += 1) {
      const y = bodyTop - Math.round((16 - Math.abs(16 - i)) * 0.72);
      rect(ctx, i, y, 1, bodyTop - y, '#cdbb88');
      rect(ctx, 33 - i, y, 1, bodyTop - y, '#cdbb88');
      rect(ctx, i, y, 1, 1, OUTLINE);
      rect(ctx, 33 - i, y, 1, 1, OUTLINE);
    }
    const lift = frame === 3 ? 12 : 3;
    rect(ctx, 4, bodyTop - lift, 26, 18, OUTLINE);
    rect(ctx, 5, bodyTop - lift + 1, 24, 17, '#ffffff');
    for (let y = bodyTop - lift + 3; y < bodyTop + 4; y += 2) {
      rect(ctx, 7, y, 20, 1, '#9fb0d8');
    }
  }

  rect(ctx, 0, bodyTop, 34, 22, OUTLINE);
  rect(ctx, 1, bodyTop + 1, 32, 20, '#efe3bd');

  if (frame === 0) {
    for (let i = 0; i < 16; i += 1) {
      const y = bodyTop + 1 + Math.floor(i * 0.72);
      rect(ctx, 1 + i, y, 1, 1, '#a8976a');
      rect(ctx, 32 - i, y, 1, 1, '#a8976a');
    }
    rect(ctx, 14, bodyTop + 10, 2, 1, '#ff2020');
    rect(ctx, 18, bodyTop + 10, 2, 1, '#ff2020');
    rect(ctx, 14, bodyTop + 11, 6, 2, '#ff2020');
    rect(ctx, 15, bodyTop + 13, 4, 1, '#ff2020');
    rect(ctx, 16, bodyTop + 14, 2, 1, '#ff2020');
  } else if (frame === 1) {
    rect(ctx, 1, bodyTop + 1, 32, 2, '#cdbb88');
    rect(ctx, 1, bodyTop + 3, 32, 1, '#a8976a');
  } else {
    for (let i = 0; i < 16; i += 1) {
      const y = bodyTop + 11 - Math.floor(i * 0.62);
      rect(ctx, 16 - i, y, 1, 1, '#a8976a');
      rect(ctx, 17 + i, y, 1, 1, '#a8976a');
    }
  }
}

/* Целые множители, чтобы пиксели оставались чёткими */

function place(sprite) {
  const { node, x, top, w, h } = sprite;
  node.style.left = `${x * scale}px`;
  node.style.top = `${top * scale}px`;
  node.style.width = `${w * scale}px`;
  node.style.height = `${h * scale}px`;
}

function layout() {
  const byWidth = Math.floor(window.innerWidth / SCENE_W);
  const byHeight = Math.floor(window.innerHeight / SCENE_H);
  scale = Math.max(2, Math.min(byWidth, byHeight, 6));
  scene.style.width = `${SCENE_W * scale}px`;
  scene.style.height = `${SCENE_H * scale}px`;
  sprites.forEach(place);
  if (placeBubbles) placeBubbles();
  const big = Math.max(4, Math.floor(Math.min(window.innerWidth - 32, 400) / 34));
  bigEnvelope.style.width = `${34 * big}px`;
  bigEnvelope.style.height = `${36 * big}px`;
}

function addSprite(sprite) {
  sprites.push(sprite);
  scene.append(sprite.node);
  place(sprite);
  return sprite;
}

function clearSprites() {
  sprites.forEach((sprite) => sprite.node.remove());
  sprites = [];
}

/* Звуки рождаются прямо в браузере, файлы не нужны.
   Телефон разрешает звук только после первого нажатия. */

let soundMuted = false;
let audioContext = null;
let blipCount = 0;

function unlockSound() {
  if (!audioContext) {
    const AudioEngine = window.AudioContext || window.webkitAudioContext;
    if (AudioEngine) audioContext = new AudioEngine();
  }
  if (audioContext && audioContext.state === 'suspended') audioContext.resume();
}

function beep(from, to, ms, volume) {
  if (soundMuted || !audioContext || audioContext.state !== 'running') return;
  const now = audioContext.currentTime;
  const end = now + ms / 1000;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(from, now);
  oscillator.frequency.linearRampToValueAtTime(to, end);
  gain.gain.setValueAtTime(volume, now);
  gain.gain.linearRampToValueAtTime(0, end);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(end);
}

/* Звук буквы: через одну, на пробелах тишина */
function blip(char, volume = BLIP_VOLUME) {
  if (/\s/.test(char)) return;
  blipCount += 1;
  if (blipCount % 2) return;
  beep(BLIP_PITCH, BLIP_PITCH, 34, volume);
}

function playClick() {
  beep(620, 980, 70, CLICK_VOLUME);
}

function playWrong() {
  beep(190, 90, 220, CLICK_VOLUME);
}

document.addEventListener('pointerdown', unlockSound, true);
document.addEventListener('keydown', unlockSound, true);
document.addEventListener('click', (event) => {
  unlockSound();
  if (event.target.closest('button, a')) playClick();
}, true);

/* Печать текста: скрытый хвост держит вёрстку на месте */

let skipTyping = null;

function typeInto(node, text, onDone) {
  if (skipTyping) skipTyping();
  const typed = el('span');
  const rest = el('span', 'rest', text);
  node.replaceChildren(typed, rest);
  let position = 0;
  let timer = null;

  function finish() {
    clearTimeout(timer);
    node.textContent = text;
    skipTyping = null;
    if (onDone) onDone();
  }

  function step() {
    position += 1;
    typed.textContent = text.slice(0, position);
    rest.textContent = text.slice(position);
    blip(text[position - 1]);
    if (position >= text.length) finish();
    else timer = setTimeout(step, TYPE_MS);
  }

  skipTyping = finish;
  timer = setTimeout(step, TYPE_MS);
}

box.addEventListener('click', (event) => {
  if (skipTyping && !event.target.closest('button, input')) skipTyping();
});

function showLine(text) {
  const line = el('p', 'box__text');
  box.replaceChildren(line);
  typeInto(line, `* ${text}`);
}

/* Заставка: улица */

function showStreet() {
  drawStreet(backgroundCtx);
  clearSprites();

  const pointer = el('div', 'pointer');
  addSprite({ node: pointer, x: 19, top: 18, w: 10, h: 8 });

  const door = el('button', 'sprite door');
  door.type = 'button';
  door.setAttribute('aria-label', 'дверь');
  door.addEventListener('click', askPassword);
  addSprite({ node: door, x: 13, top: 20, w: 22, h: 32 });

  showLine(TEXTS.street);
}

function normalizeAnswer(value) {
  return value.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, '');
}

function askPassword() {
  if (box.querySelector('input')) return;
  const line = el('p', 'box__text');
  const form = el('form', 'password');
  const input = el('input');
  Object.assign(input, {
    type: 'text',
    autocomplete: 'off',
    autocapitalize: 'off',
    spellcheck: false,
    enterKeyHint: 'go',
  });
  input.setAttribute('aria-label', 'ответ');
  const ok = el('button', 'action', TEXTS.doorOk);
  ok.type = 'submit';
  form.append(input, ok);
  const hint = el('p', 'box__text');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (TEXTS.doorAnswers.includes(normalizeAnswer(input.value))) {
      if (skipTyping) skipTyping();
      enterHall();
    } else {
      typeInto(hint, `* ${TEXTS.doorHint}`);
    }
  });

  box.replaceChildren(line, form, hint);
  typeInto(line, `* ${TEXTS.doorNote}`);
  input.focus({ preventScroll: true });
}

function enterHall() {
  curtain.classList.add('is-down');
  setTimeout(() => {
    showHall();
    curtain.classList.remove('is-down');
  }, 330);
}

/* Зал */

function showHall() {
  drawHall(backgroundCtx);
  clearSprites();

  SHELVES.forEach((shelf, index) => {
    const canvas = pixelCanvas(SHELF_W, SHELF_H);
    drawShelf(canvas.getContext('2d'), shelf, false);
    const node = el('button', 'sprite shelf');
    node.type = 'button';
    node.setAttribute('aria-label', `полка ${index + 1}: ${TEXTS.volumes[index].title}`);
    node.append(canvas, el('span', 'sparkle'));
    node.addEventListener('click', () => openBook(index));
    shelf.sprite = addSprite({ node, x: shelf.x, top: SHELF_TOP, w: SHELF_W, h: SHELF_H });
  });

  const canvas = pixelCanvas(MASCOT.w, MASCOT.h);
  drawPlaceholderMascot(canvas.getContext('2d'));
  mascotNode = el('div', 'mascot');
  mascotNode.append(canvas);
  addSprite({ node: mascotNode, x: 34, top: MASCOT.top, w: MASCOT.w, h: MASCOT.h });

  const picture = new Image();
  picture.onload = () => {
    mascotNode.replaceChildren();
    mascotNode.style.backgroundImage = `url(${MASCOT_FILE})`;
    setMascotFrame(FACING.down, 0);
  };
  picture.src = MASCOT_FILE;

  const envelopeCanvas = pixelCanvas(TABLE_ENVELOPE.w, TABLE_ENVELOPE.h);
  drawSmallEnvelope(envelopeCanvas.getContext('2d'));
  const envelopeNode = el('button', 'sprite drop');
  envelopeNode.type = 'button';
  envelopeNode.setAttribute('aria-label', 'конверт');
  envelopeNode.append(envelopeCanvas);
  envelopeNode.addEventListener('click', () => {
    mail.hidden = false;
    drawBigEnvelope(bigEnvelope.getContext('2d'), 0);
    openEnvelope.focus({ preventScroll: true });
  });
  TABLE_ENVELOPE.sprite = addSprite({
    node: envelopeNode,
    x: TABLE_ENVELOPE.x,
    top: TABLE_ENVELOPE.bottom - TABLE_ENVELOPE.h,
    w: TABLE_ENVELOPE.w,
    h: TABLE_ENVELOPE.h,
  });

  showLine(TEXTS.idle);
}

function setSpriteFrame(node, row, column) {
  node.style.backgroundPosition = `${(column / 3) * 100}% ${(row / 3) * 100}%`;
}

function setMascotFrame(row, column) {
  setSpriteFrame(mascotNode, row, column);
}

let walkTimer = null;

/* Идёт к полке, по дороге перебирая кадры, и поворачивается к книгам */
function moveMascotTo(shelf) {
  const sprite = sprites.find((item) => item.node === mascotNode);
  const target = shelf.x + Math.floor((SHELF_W - MASCOT.w) / 2);
  const distance = target - sprite.x;
  clearInterval(walkTimer);

  if (distance === 0) {
    setMascotFrame(FACING.up, 0);
    return;
  }

  const duration = Math.abs(distance) * WALK_MS_PER_PIXEL;
  const row = distance < 0 ? FACING.left : FACING.right;
  let column = 0;
  setMascotFrame(row, column);
  walkTimer = setInterval(() => {
    column = (column + 1) % 4;
    setMascotFrame(row, column);
  }, WALK_FRAME_MS);
  setTimeout(() => {
    clearInterval(walkTimer);
    setMascotFrame(FACING.up, 0);
  }, duration);

  mascotNode.style.transitionDuration = `${duration}ms`;
  sprite.x = target;
  place(sprite);
}

function openBook(index) {
  if (activeBook !== null) return;
  activeBook = index;
  const item = TEXTS.volumes[index];
  moveMascotTo(SHELVES[index]);

  const head = el('div', 'box__head');
  head.append(el('span', '', item.title), el('span', '', item.date));
  const line = el('p', 'box__text');
  const putBack = button(TEXTS.putBack, 'action is-hidden', closeBook);
  const talk = el('div', 'talk');
  const herPortrait = portraitReady ? 'portrait is-ready' : 'portrait';
  /* Вопросы рядом с её портретом, твой текст рядом с твоим */
  talk.append(el('div', item.options ? herPortrait : 'portrait portrait--me'), line);
  box.replaceChildren(head, talk);

  if (!item.options) {
    box.append(putBack);
    typeInto(line, `* ${item.text}`, () => putBack.classList.remove('is-hidden'));
    return;
  }

  const options = el('div', 'options');
  const reply = el('p', 'box__text');
  item.options.forEach((option) => {
    const node = button(option.text, 'option', () => choose(item, option, node, options, reply, putBack));
    node.dataset.right = option.right ? 'true' : '';
    options.append(node);
  });
  const replyRow = el('div', 'talk');
  replyRow.hidden = true;
  replyRow.append(el('div', 'portrait portrait--me'), reply);
  box.append(options, replyRow, putBack);
  typeInto(line, `* ${item.question}`);
}

function choose(item, option, node, options, reply, putBack) {
  reply.parentElement.hidden = false;
  if (item.mustPickRight && !option.right) {
    node.classList.add('is-wrong');
    playWrong();
    box.classList.remove('is-shaking');
    void box.offsetWidth;
    box.classList.add('is-shaking');
    shuffle(options);
    typeInto(reply, `* ${option.reply}`);
    return;
  }
  [...options.children].forEach((other) => {
    other.disabled = true;
    other.classList.remove('is-wrong');
    if (other.dataset.right) other.classList.add('is-right');
  });
  if (!option.right) node.classList.add('is-wrong');
  node.classList.add('is-picked');
  typeInto(reply, `* ${option.reply}`, () => {
    putBack.classList.remove('is-hidden');
    putBack.scrollIntoView({ block: 'nearest' });
  });
}

function shuffle(container) {
  const items = [...container.children];
  const order = items.slice();
  do {
    for (let i = order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  } while (order.every((item, i) => item === items[i]));
  container.append(...order);
}

function closeBook() {
  const index = activeBook;
  activeBook = null;
  readBooks.add(index);
  const shelf = SHELVES[index];
  shelf.sprite.node.classList.add('is-read');
  const ctx = shelf.sprite.node.querySelector('canvas').getContext('2d');
  drawShelf(ctx, shelf, true);
  setMascotFrame(FACING.down, 0);

  if (readBooks.size === SHELVES.length) {
    dropEnvelope();
    showLine(TEXTS.done);
  } else {
    showLine(TEXTS.idle);
  }
}

function dropEnvelope() {
  const node = TABLE_ENVELOPE.sprite.node;
  node.classList.add('is-here');
  node.animate(
    [
      { transform: `translateY(${-40 * scale}px)` },
      { transform: 'translateY(0)', offset: 0.6 },
      { transform: `translateY(${-3 * scale}px)`, offset: 0.8 },
      { transform: 'translateY(0)' },
    ],
    { duration: 700, easing: 'steps(4)' }
  );
  node.focus({ preventScroll: true });
}

/* Письмо */

function openLetter() {
  startSong();
  openEnvelope.style.visibility = 'hidden';
  const ctx = bigEnvelope.getContext('2d');
  [1, 2, 3].forEach((frame, i) => {
    setTimeout(() => drawBigEnvelope(ctx, frame), 190 * (i + 1));
  });
  setTimeout(() => {
    letter.hidden = false;
    letter.focus({ preventScroll: true });
    typeLetter();
  }, 1250);
}

/* Финал: письмо закрыто, появляешься ты, над её головой выбор */

let placeBubbles = null;

function makeBubble(className, spot, speakerX) {
  const node = el('div', `bubble ${className}`);
  node.dataset.x = spot.x;
  node.dataset.w = spot.w;
  node.dataset.tail = speakerX;
  scene.append(node);
  return node;
}

function showFinale() {
  letter.hidden = true;
  mail.hidden = true;
  box.hidden = true;
  activeBook = -1; /* полки больше не открываются */
  TABLE_ENVELOPE.sprite.node.classList.remove('is-here');

  const her = sprites.find((item) => item.node === mascotNode);
  clearInterval(walkTimer);
  mascotNode.style.transitionDuration = '0ms';
  her.x = FINALE.her.x;
  her.top = FINALE.her.top;
  place(her);
  setMascotFrame(FACING.right, 0);

  /* Ты входишь в дверь, идёшь вверх по залу и поворачиваешься к ней */
  const meNode = el('div', 'me');
  meNode.style.backgroundImage = `url(${ME_FILE})`;
  const me = addSprite({ node: meNode, x: FINALE.me.x, top: FINALE.me.doorTop, w: MASCOT.w, h: MASCOT.h });
  const walkMs = (FINALE.me.doorTop - FINALE.me.top) * WALK_MS_PER_PIXEL;
  let column = 0;
  setSpriteFrame(meNode, FACING.up, column);
  const steps = setInterval(() => {
    column = (column + 1) % 4;
    setSpriteFrame(meNode, FACING.up, column);
  }, WALK_FRAME_MS);
  void meNode.offsetWidth;
  meNode.style.transitionDuration = `${walkMs}ms`;
  me.top = FINALE.me.top;
  place(me);
  setTimeout(() => {
    clearInterval(steps);
    setSpriteFrame(meNode, FACING.left, 0);
  }, walkMs);

  const bubbles = [];
  placeBubbles = () => {
    bubbles.forEach(({ node, top }) => {
      node.style.left = `${node.dataset.x * scale}px`;
      node.style.width = `${node.dataset.w * scale}px`;
      node.style.bottom = `${(SCENE_H - top) * scale + 14}px`;
      node.style.setProperty('--tail', `${(node.dataset.tail - node.dataset.x) * scale}px`);
    });
  };

  setTimeout(() => {
    const line = makeBubble('bubble--me', FINALE.meBubble, FINALE.me.x + MASCOT.w / 2);
    bubbles.push({ node: line, top: FINALE.me.top });
    placeBubbles();
    typeInto(line, TEXTS.myLine);
  }, walkMs + FINALE_LINE_DELAY_MS);

  setTimeout(() => {
    const choice = makeBubble('bubble--her', FINALE.herBubble, FINALE.her.x + MASCOT.w / 2);
    const answers = el('div', 'answers');
    TEXTS.answers.forEach((item) => {
      const link = el('a', 'action', item.text);
      link.href = `https://t.me/${TEXTS.telegram}?text=${encodeURIComponent(item.message)}`;
      link.target = '_blank';
      link.rel = 'noopener';
      answers.append(link);
    });
    choice.append(answers);
    bubbles.push({ node: choice, top: FINALE.her.top });
    placeBubbles();
    box.hidden = false;
    showLine(TEXTS.answerNote);
  }, walkMs + FINALE_LINE_DELAY_MS + FINALE_CHOICE_DELAY_MS);
}

function typeLetter() {
  const typed = document.getElementById('typed');
  const rest = document.getElementById('rest');
  const letterEnd = document.getElementById('letterEnd');
  const text = TEXTS.letter;
  rest.textContent = text;
  let position = 0;
  let timer = null;
  let follow = true;

  function stopFollowing() {
    follow = false;
  }

  function finish() {
    clearTimeout(timer);
    typed.textContent = text;
    rest.textContent = '';
    letterEnd.classList.remove('is-pending');
    letter.removeEventListener('click', revealAll);
    letter.removeEventListener('touchmove', stopFollowing);
    letter.removeEventListener('wheel', stopFollowing);
    if (follow) letter.scrollTop = letter.scrollHeight;
  }

  function revealAll() {
    follow = false;
    finish();
  }

  function step() {
    position += 1;
    typed.textContent = text.slice(0, position);
    rest.textContent = text.slice(position);
    blip(text[position - 1], BLIP_VOLUME_LETTER);
    if (position >= text.length) {
      finish();
      return;
    }
    if (follow) {
      const bottom = typed.getBoundingClientRect().bottom;
      if (bottom > window.innerHeight - 40) letter.scrollTop += bottom - window.innerHeight + 90;
    }
    const char = text[position - 1];
    let delay = TYPE_MS;
    if (char === '\n') delay = 240;
    else if (char === '.' || char === ':') delay = 160;
    else if (char === ',') delay = 80;
    timer = setTimeout(step, delay);
  }

  letter.addEventListener('click', revealAll);
  letter.addEventListener('touchmove', stopFollowing, { passive: true });
  letter.addEventListener('wheel', stopFollowing, { passive: true });
  timer = setTimeout(step, 400);
}

/* Песня стартует от нажатия на «вскрыть», иначе телефон её заблокирует */

let song = null;

function startSong() {
  song = new Audio(SONG_FILE);
  song.volume = 0;
  song.muted = soundMuted;
  const playing = song.play();
  if (playing) playing.catch(() => {});

  const started = performance.now();
  const fade = setInterval(() => {
    const progress = Math.min(1, (performance.now() - started) / SONG_FADE_MS);
    song.volume = progress * SONG_VOLUME;
    if (progress === 1) clearInterval(fade);
  }, 60);

  /* Один проигрыш: в конце затихает */
  song.addEventListener('timeupdate', () => {
    const left = song.duration - song.currentTime;
    if (left < SONG_FADE_OUT_S) song.volume = Math.max(0, (left / SONG_FADE_OUT_S) * SONG_VOLUME);
  });
}

soundToggle.textContent = TEXTS.soundOn;
soundToggle.hidden = false;
soundToggle.addEventListener('click', () => {
  soundMuted = !soundMuted;
  if (song) song.muted = soundMuted;
  soundToggle.textContent = soundMuted ? TEXTS.soundOff : TEXTS.soundOn;
});

/* Сборка */

let portraitReady = false;
const portraitPicture = new Image();
portraitPicture.onload = () => {
  portraitReady = true;
  document.documentElement.style.setProperty('--portrait', `url(${PORTRAIT_FILE})`);
};
portraitPicture.src = PORTRAIT_FILE;

openEnvelope.textContent = TEXTS.openEnvelope;
openEnvelope.addEventListener('click', openLetter);
document.getElementById('letterEnd').append(button(TEXTS.closeLetter, 'action', showFinale));
new Image().src = ME_FILE; /* заранее, чтобы фигурка не мигнула при появлении */

window.addEventListener('resize', layout);
layout();
showStreet();

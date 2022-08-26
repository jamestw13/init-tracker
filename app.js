const playerList = [
  // // Player Model
  // {
  //   name: '',
  //   initiative: '',
  //   hp: null,
  //   ac: null,
  //   statuses: [
  //     {
  //       name: '',
  //       duration: '',
  //     },
  //   ],
  // },
  {
    name: 'Joan',
    initiative: '12',
    hp: 10,
    ac: 11,
    status: [
      {
        name: 'flat-footed',
        start: 2,
        duration: 1,
      },
    ],
  },
  {
    name: 'River',
    initiative: '11',
    hp: 15,
    ac: 6,
    status: [
      {
        name: 'Enrage',
        start: 3,
        duration: 2,
      },
      {
        name: 'Entangled',
        start: 1,
        duration: 4,
      },
    ],
  },
  {
    name: 'Billiam',
    initiative: '13',
    hp: 12,
    ac: 66,
    status: [],
  },
  {
    name: 'Smithers',
    initiative: '6',
    hp: 44,
    ac: 12,
    status: [
      {
        name: 'Blessed',
        start: 7,
        duration: 4,
      },
    ],
  },
];

const sortedPlyrList = playerList.sort((a, b) => b.initiative - a.initiative);
const ROUNDS = 12;

const list = document.getElementById('list');

const roundHeader = document.createElement('h2');
roundHeader.innerHTML = 'Round';
roundHeader.style.gridColumnStart = 1;
roundHeader.style.gridColumnEnd = 2;
roundHeader.style.gridRowStart = 1;
roundHeader.style.gridRowEnd = 2;
list.appendChild(roundHeader);

const initHeader = document.createElement('h2');
initHeader.innerHTML = 'Initiative';
initHeader.style.gridColumnStart = 2;
initHeader.style.gridColumnEnd = 3;
initHeader.style.gridRowStart = 1;
initHeader.style.gridRowEnd = 2;
list.appendChild(initHeader);

const nameHeader = document.createElement('h2');
nameHeader.innerHTML = 'Character';
nameHeader.style.gridColumnStart = 3;
nameHeader.style.gridColumnEnd = 4;
nameHeader.style.gridRowStart = 1;
nameHeader.style.gridRowEnd = 2;
list.appendChild(nameHeader);

const hpHeader = document.createElement('h2');
hpHeader.innerHTML = 'HP';
hpHeader.style.gridColumnStart = 4;
hpHeader.style.gridColumnEnd = 5;
hpHeader.style.gridRowStart = 1;
hpHeader.style.gridRowEnd = 2;
list.appendChild(hpHeader);

const acHeader = document.createElement('h2');
acHeader.innerHTML = 'AC';
acHeader.style.gridColumnStart = 5;
acHeader.style.gridColumnEnd = 6;
acHeader.style.gridRowStart = 1;
acHeader.style.gridRowEnd = 2;
list.appendChild(acHeader);

const statusHeader = document.createElement('h2');
statusHeader.innerHTML = 'Statuses';
statusHeader.style.gridColumnStart = 6;
statusHeader.style.gridColumnEnd = 'auto';
statusHeader.style.gridRowStart = 1;
statusHeader.style.gridRowEnd = 2;
list.appendChild(statusHeader);

for (x = 0; x < ROUNDS; x++) {
  const roundNumber = document.createElement('h4');
  roundNumber.innerHTML = x + 1;
  roundNumber.style.gridColumnStart = 1;
  roundNumber.style.gridColumnEnd = 2;
  roundNumber.style.gridRowStart = 2 + x * sortedPlyrList.length;
  roundNumber.style.gridRowEnd = 2 + x * sortedPlyrList.length + sortedPlyrList.length;
  list.appendChild(roundNumber);

  sortedPlyrList.forEach((plyr, index) => {
    const plyrInit = document.createElement('h4');
    plyrInit.innerHTML = plyr.initiative;
    plyrInit.style.gridColumnStart = 2;
    plyrInit.style.gridColumnEnd = 3;
    plyrInit.style.gridRowStart = 2 + x * sortedPlyrList.length + index;
    plyrInit.style.gridRowEnd = 3 + x * sortedPlyrList.length + index;
    list.appendChild(plyrInit);

    const plyrName = document.createElement('h4');
    plyrName.innerHTML = plyr.name;
    plyrName.style.gridColumnStart = 3;
    plyrName.style.gridColumnEnd = 4;
    plyrName.style.gridRowStart = 2 + x * sortedPlyrList.length + index;
    plyrName.style.gridRowEnd = 3 + x * sortedPlyrList.length + index;
    list.appendChild(plyrName);

    const plyrHP = document.createElement('h4');
    plyrHP.innerHTML = plyr.hp;
    plyrHP.style.gridColumnStart = 4;
    plyrHP.style.gridColumnEnd = 5;
    plyrHP.style.gridRowStart = 2 + x * sortedPlyrList.length + index;
    plyrHP.style.gridRowEnd = 3 + x * sortedPlyrList.length + index;
    list.appendChild(plyrHP);

    const plyrAC = document.createElement('h4');
    plyrAC.innerHTML = plyr.ac;
    plyrAC.style.gridColumnStart = 5;
    plyrAC.style.gridColumnEnd = 6;
    plyrAC.style.gridRowStart = 2 + x * sortedPlyrList.length + index;
    plyrAC.style.gridRowEnd = 3 + x * sortedPlyrList.length + index;
    list.appendChild(plyrAC);
  });
}

sortedPlyrList.forEach((plyr, x) => {
  if (!!plyr.status) {
    plyr.status.forEach((status, y) => {
      const plyrStatus = document.createElement('h4');
      plyrStatus.innerHTML = status.name;
      plyrStatus.style.gridColumnStart = 'auto';
      plyrStatus.style.gridColumnEnd = 'auto';
      plyrStatus.style.gridRowStart = 2 + x + sortedPlyrList.length * (status.start - 1);
      plyrStatus.style.gridRowEnd =
        2 + x + sortedPlyrList.length * (status.start - 1) + status.duration * sortedPlyrList.length;
      plyrStatus.style.backgroundColor = 'red';
      list.appendChild(plyrStatus);
    });
  }
});

list.addEventListener('click', e => {
  console.log(e.target);
});

const editor = document.getElementById('editor');

const plyrUL = document.createElement('ul');
editor.appendChild(plyrUL);

playerList.forEach((plyr, index) => {
  const plyrLI = document.createElement('li');
  plyrLI.innerText = plyr.name;
  plyrUL.appendChild(plyrLI);
});

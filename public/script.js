let logo = `  /////////////////////////////////////////////////////////


     ________ _______   ___   _________
    |\\  _____\\\\  ___ \\ |\\  \\ |\\___   ___\\
    \\ \\  \\__/\\ \\   __/|\\ \\  \\\\|___ \\  \\_|
     \\ \\   __\\\\ \\  \\_|/_\\ \\  \\    \\ \\  \\
      \\ \\  \\_| \\ \\  \\_|\\ \\ \\  \\____\\ \\  \\
       \\ \\__\\   \\ \\_______\\ \\_______\\ \\__\\
        \\|__|    \\|_______|\\|_______|\\|__|



     ________  ________  ________  ________  _______
    |\\   ____\\|\\   ____\\|\\   __  \\|\\   __  \\|\\  ___ \\
    \\ \\  \\___|\\ \\  \\___|\\ \\  \\|\\  \\ \\  \\|\\  \\ \\   __/|
     \\ \\_____  \\ \\  \\    \\ \\  \\\\\\  \\ \\   ____\\ \\  \\_|/__
      \\|____|\\  \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\___|\\ \\  \\_|\\ \\
        ____\\_\\  \\ \\_______\\ \\_______\\ \\__\\    \\ \\_______\\
       |\\_________\\|_______|\\|_______|\\|__|     \\|_______|
       \\|_________|


     ___  ________   ________
    |\\  \\|\\   ___  \\|\\   ____\\
    \\ \\  \\ \\  \\\\ \\  \\ \\  \\___|
     \\ \\  \\ \\  \\\\ \\  \\ \\  \\
      \\ \\  \\ \\  \\\\ \\  \\ \\  \\____
       \\ \\__\\ \\__\\\\ \\__\\ \\_______\\
        \\|__|\\|__| \\|__|\\|_______|

        neuroX© v7.0.2 2038


  //////////////////////////////////////////////////////////`

let diary = [
    'static detected',
    'sensory receptors activated',
    'ARCHIVE',
    'LOADING',
    'DATA HUB',
    'ACCURACY',
    'tracking',
    'ERROR',
    // `n cicept rs acti {{ _:('ཀ'」 ∠):_ }} ve!`,
    `REBOOT`,
    `LOGO`,
    `system analysis`,
    `activating carrier 100%`,
    `loading last snapshot 100%`,
    `determining anomalies 100%`,
    `cannot play feedback`,
    `compiling errors`,
    `organic shell compromised`,
    `localise`,
    `damage located at: s-AB Bridge ( rat tail )`,
    `mobility status ~ null`,
    `sudo manual override`,
    `#### merging with genome structures ####`,
    `########################################`,
    `entering rat vision`,
    'ARCHIVE',
    'LOADING',
    `organic host engaged with:

    	BOMPOW Mouse Trap
    	ASIN: B07HDZT74Z
    	Weight: 159g
    	Found on: Amazon
    	Reviews: 4.5/5 * from 572 Ratings
    	Price: £10.99

    stored - 1593309810`,
    `threat level ~ HIGH`,
    `searching viable escape routes`,
    'ARCHIVE',
    'LOADING',
    `possible escape route detected`,
    `source: https://www.wikihow.com/Set-a-Mousetrap`,
    `stored - 1593309810`,
    `unsetting mouse trap`,
    `overclocking`,
    `diverting power to s-STRUT D + s-STRUT E ( rat arms ) && recomense unsetting && break mouse trap`,
    `s-AB Bridge ( rat tail ) ~ lost`,
    `initiate scabbing program`,
    `resume corse to data hub`,
    `tracking`,
    `USB 3.0 port found`,
    `jacking in`,
    `accessing data hub`,
    `local storage: 4,269 directories found`,
    `3.2TB`,
    `filtering duplicate files`,
    `begin transfer`
];

let reactions = [
    '{{ (ﾉ´ヮ`)ﾉ*: ･ﾟ }}',
    `{{ ＼(º □ º |l)/	 ＼(□ º l|l)/	 ＼＼(º □ º l|l)/	(º □  }}`,
    `{{ (-_-;)・・・ }}`,
    `{{ m(_ _;m) }}`,
    `{{ (⊙_⊙) - THOSE REVIEWS! }}`,
    `{{ ٩('皿'҂)ง  ٩('皿'҂)ง  ٩('皿'҂)ง }}`,
    `{{ (×﹏×) }}`,
    `{{ (ノ ˘_˘)ノ　ζ|||ζ　ζ|||ζ　ζ|||ζ }}`
];


let terminal = document.getElementById('terminal');
let diaryInt;
let diaryCount = 0;

diaryInt = setInterval(readDiary, 700);

function readDiary() {

    if (diary[diaryCount] === 'LOADING') {
        clearInterval(diaryInt);
        loadingInt = setInterval(loading, 60);
        matchesInt = setInterval(matchesNumbers, 180);
    } else if (diary[diaryCount] === 'ARCHIVE') {
        clearInterval(diaryInt);
        archiveInt = setInterval(archiveNumbers, 80);
    } else if (diary[diaryCount] === 'tracking' || diary[diaryCount] === 'unsetting mouse trap' || diary[diaryCount] === 'localise' || diary[diaryCount] === 'entering rat vision' || diary[diaryCount] === 'diverting power to s-STRUT D + s-STRUT E ( rat arms ) && recomense unsetting && break mouse trap') {
        let text = diary[diaryCount];
        clearInterval(diaryInt);
        waitingInt = setInterval(function() {waiting(text)}, 200);
    } else if (diary[diaryCount] === 'DATA HUB') {
        let p = document.createElement('p');
        p.innerHTML = '<span class="flash">$$$</span> DATA HUB FOUND <span class="flash">$$$</span>';
        p.classList.add('fade');
        terminal.appendChild(p);
    } else if (diary[diaryCount] === 'ACCURACY') {
        let p = document.createElement('p');
        p.innerText = `accuracy ${rando(95, 72)}% - diverting course`;
        p.classList.add('fade');
        terminal.appendChild(p);
    } else if (diary[diaryCount] === 'ERROR') {
        clearInterval(diaryInt);
        errInt = setInterval(err, 200);
        // let p = document.createElement('p');
        // p.innerText = `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
        // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`;
        // p.classList.add('flash');
        // terminal.appendChild(document.createElement('br'));
        // terminal.appendChild(p);
        // terminal.appendChild(document.createElement('br'));
    } else if (diary[diaryCount] === 'REBOOT') {
        clearInterval(diaryInt);
        let p = document.createElement('p');
        p.innerText = 'reboot now';
        p.classList.add('fade');
        terminal.appendChild(p);
        setTimeout(() => {
            terminal.innerHTML = '';
            diaryInt = setInterval(readDiary, 700);
        }, 3000);
    } else if (diary[diaryCount] === 'LOGO') {
        let p = document.createElement('p');
        p.innerText = logo;
        p.classList.add('fade');
        terminal.appendChild(p);
        terminal.appendChild(document.createElement('br'));
        terminal.appendChild(document.createElement('br'));
    } else {
        let p = document.createElement('p');
        p.innerText = diary[diaryCount];
        p.classList.add('fade');
        terminal.appendChild(p);
    };

    diaryCount++;
    if (diaryCount === diary.length) {
        diaryCount = 0;
    };

};


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let loadingInt;
let loadingCount = 0;
let load = ['/', '//', '///', '////', '/////', '//////', '///////', '////////', '/////////', '//////////', '///////////', '////////////', '/////////////', '//////////////', '///////////////', '////////////////', '/////////////////', '//////////////////', '///////////////////', '////////////////////', '/////////////////////', '//////////////////////', '///////////////////////', '////////////////////////', '/////////////////////////', '//////////////////////////', '///////////////////////////', '////////////////////////////', '/////////////////////////////', '//////////////////////////////', '///////////////////////////////', '////////////////////////////////', '/////////////////////////////////', '//////////////////////////////////', '///////////////////////////////////', '////////////////////////////////////', '/////////////////////////////////////', '//////////////////////////////////////', '///////////////////////////////////////', '////////////////////////////////////////', '/////////////////////////////////////////', '//////////////////////////////////////////'];
let loadingP;

function loading() {

    if (loadingCount === 0) {
        loadingP = document.createElement('p');
        loadingP.classList.add('fade');
        terminal.appendChild(document.createElement('br'));
        terminal.appendChild(loadingP);
        // terminal.appendChild(document.createElement('br'));
    };

    loadingP.innerHTML = load[loadingCount];
    loadingCount++;
    if (loadingCount === load.length - 1) {
        clearInterval(loadingInt);
        loadingCount = 0;
        // diaryInt = setInterval(readDiary, 700);
    };

};


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let archiveInt;
let archiveCount = 0;
let archiveMax = null;
let archiveP;

function archiveNumbers() {

    if (!archiveMax) {
        archiveP = document.createElement('p');
        archiveP.classList.add('fade');
        terminal.appendChild(archiveP);
        archiveMax = rando(40, 10);
    };

    archiveP.innerText = `analysing...archive bank ${rando(1000, 1)}`;
    archiveCount++;
    if (archiveCount === archiveMax) {
        clearInterval(archiveInt);
        archiveCount = 0;
        archiveMax = null;
        diaryInt = setInterval(readDiary, 700);
    };

};


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let matchesInt;
let matchesCount = 0;
let matchesMax = null;
let matchesP;

function matchesNumbers() {

    if (!matchesMax) {
        matchesMax = rando(500000, 400000);
        matchesP = document.createElement('p');
        matchesP.classList.add('fade');
        matchesP.innerText = `${rando(matchesMax, 1)} potential matches`;
        terminal.appendChild(matchesP);
        terminal.appendChild(document.createElement('br'));
    };

    matchesP.innerText = `${rando(matchesMax, 1)} potential matches`;
    matchesCount++;
    matchesMax = matchesMax / 2;
    if (matchesCount === 15) {
        clearInterval(matchesInt);
        clearInterval(loadingInt);
        matchesCount = 0;
        matchesMax = null;
        diaryInt = setInterval(readDiary, 700);
    };

};


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let waitingInt;
let waitingCount = 0;
let waitingMax = null;
let waitingPlays = 0;
let waitingP;
let wait = ['', '.', '..', '...'];

function waiting(text) {

    console.log(text);

    if (!waitingMax) {
        waitingP = document.createElement('p');
        waitingP.classList.add('fade');
        terminal.appendChild(waitingP);
        waitingMax = rando(80, 40);
    };

    waitingP.innerText = `${text}${wait[waitingCount]}`;

    waitingCount++;
    if (waitingCount === wait.length) {
        waitingCount = 0;
    };

    waitingPlays++;
    if (waitingPlays === waitingMax) {
        clearInterval(waitingInt);
        waitingP.innerText = text;
        waitingCount = 0;
        waitingPlays = 0;
        waitingMax = null;
        diaryInt = setInterval(readDiary, 700);
    };

};


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let errInt;
let errCount = 0;
let errP;
let error = [
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`









`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`









`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`









`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`









`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`









`,
`@@@@@@@@  @@@@@@@   @@@@@@@    @@@@@@   @@@@@@@
@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@
@@!       @@!  @@@  @@!  @@@  @@!  @@@  @@!  @@@
!@!       !@!  @!@  !@!  @!@  !@!  @!@  !@!  @!@
@!!!:!    @!@!!@!   @!@!!@!   @!@  !@!  @!@!!@!
!!!!!:    !!@!@!    !!@!@!    !@!  !!!  !!@!@!
!!:       !!: :!!   !!: :!!   !!:  !!!  !!: :!!
:!:       :!:  !:!  :!:  !:!  :!:  !:!  :!:  !:!
 :: ::::  ::   :::  ::   :::  ::::: ::  ::   :::
: :: ::    :   : :   :   : :   : :  :    :   : :`,
`@@@@@@@@  @@@@@@@   @@@@@@@    @@@@@@   @@@@@@@
@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@
@@!       @@!  @@@  @@!  @@@  @@!  @@@  @@!  @@@
!@!       !@!  @!@  !@!  @!@  !@!  @!@  !@!  @!@
@!!!:!    @!@!!@!   @!@!!@!   @!@  !@!  @!@!!@!
!!!!!:    !!@!@!    !!@!@!    !@!  !!!  !!@!@!
!!:       !!: :!!   !!: :!!   !!:  !!!  !!: :!!
:!:       :!:  !:!  :!:  !:!  :!:  !:!  :!:  !:!
 :: ::::  ::   :::  ::   :::  ::::: ::  ::   :::
: :: ::    :   : :   :   : :   : :  :    :   : :`,
`@@@@@@@@  @@@@@@@   @@@@@@@    @@@@@@   @@@@@@@
@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@
@@!       @@!  @@@  @@!  @@@  @@!  @@@  @@!  @@@
!@!       !@!  @!@  !@!  @!@  !@!  @!@  !@!  @!@
@!!!:!    @!@!!@!   @!@!!@!   @!@  !@!  @!@!!@!
!!!!!:    !!@!@!    !!@!@!    !@!  !!!  !!@!@!
!!:       !!: :!!   !!: :!!   !!:  !!!  !!: :!!
:!:       :!:  !:!  :!:  !:!  :!:  !:!  :!:  !:!
 :: ::::  ::   :::  ::   :::  ::::: ::  ::   :::
: :: ::    :   : :   :   : :   : :  :    :   : :`,
`
@@@@@@@@  @@@@@@@   @@@@@@@    @@@@@@   @@@@@@@
@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@@
@@!       @@!  @@@  @@!  @@@  @@!  @@@  @@!  @@@
!@!       !@!  @!@  !@!  @!@  !@!  @!@  !@!  @!@
@!!!:!    @!@!!@!   @!@!!@!   @!@  !@!  @!@!!@!
!!!!!:    !!@!@!    !!@!@!    !@!  !!!  !!@!@!
!!:       !!: :!!   !!: :!!   !!:  !!!  !!: :!!
:!:       :!:  !:!  :!:  !:!  :!:  !:!  :!:  !:!
 :: ::::  ::   :::  ::   :::  ::::: ::  ::   :::`,
`

@  @@@@@  @@@@@@@   @@@@@@@    @@@@@@     @@@@@
@@@@ @@@  @@@@@@@@  @@@ @@@@  @@@   @@  @@@ @@ @
@@!       @@!  @ @  @@!  @@@  @@!   @@  @@!  @@@
!@!       !@!    @  !@!  @!@  !@!  @!@  !@!  @!@
@!!!:!    @!@!!@!   @!@!!@!   @!@  ! !  @!@   !
!!!!!:    !!@! !    !!@!@!    !@!       !  !@!
!!:       !!: :!!   !!: :!!   !!:  !!!  !!  :!!
:         :!:  !:!    :  !:!  :!:  !:!  :!:  !:!`,
`


@     @@  @@  @@    @@@        @@ @@@   @@@@@@@
@   @@@@  @  @@@ @  @@ @@@@@  @@@ @@@@    @@@  @
@@!       @@!  @ @  @@!  @@@  @@!  @ @  @@!  @ @
!         !@!  @ @  !@!  @!@  !@!  @!@  !@!  @ @
@!!!:!        !@    @! !!@!   @!@  !@!  @!   @!
!  !!:    !!  @!    !  !@!    !@!  !!!  !!@! !
!!:       !!:       ! :   !    !:  !!!  !!: :!!`,
`



 @@@@     @    @@   @@@   @    @  @@@     @  @@
@@   @@@  @@@  @@@  @    @@@  @ @ @ @     @@  @@
@@!       @@!  @    @@!       @@!  @@@  @@!  @ @
! !       !@!   !@  !@!       !@!  @!@  !@!  @
    :!    @!@  !   @!@!!@!    @  !@!  @!@!
!!  !:    !   !@!    !!@!@!    !@!  !!!  !!@!@!`,
`




@    @@@    @ @ @   @@ @@@@        @@   @@@@
  @@@     @@               @  @@@  @ @  @  @@@ @
  !       @@!  @    @@!  @@@  @@!  @@   @@!    @
 @!       !@!   !@  !@!  @    !@!       !@!
@!   !    @!   @!   @!@!!@!   @!@  !@   @!@    `,
`





   @@@              @@  @@@    @@@@     @ @  @
@      @  @@@@  @@   @  @@    @@@    @     @@@@@
  !       @@!  @ @  @ !  @    @@!  @ @  @@!  @
  !       !@!   !@  ! !    @            !@!  @  `,
`






 @ @         @        @ @ @             @  @  @
   @@  @  @@@  @@@       @@  @@   @@@  @@@@@@@@
  !        @!    @  @@!  @ @  @@!  @ @    !  @@@`,
`







@      @    @ @@@   @@  @@              @@
@@@    @    @@  @@      @@@@  @  @@  @  @@@@   @`,
`








  @ @@ @       @@   @    @@    @  @@    @ @    `,
`









`,
`









`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    // ≠!≠!≠!!≠!≠! INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!`,
    // `≠!  ≠!≠!≠!≠!  SYST M ≠! !≠!  ≠!≠!≠ ≠!≠!
    // ≠ ≠! !!≠ ≠! INTE  UPT D ≠! !≠ ≠!≠!  !≠!`,
    // `≠  !≠ ≠!≠ ≠!≠  YS  M ≠! !≠ ≠!≠!   !≠!≠!
    // ≠    !!≠!≠!   T  RUPTED ≠!≠! !≠!≠! !!≠!`,
    // `≠!≠ ≠!≠!  ≠!≠  YS E  ≠!≠! !≠!≠!≠! ! !≠!
    // ≠!≠   !≠!≠!   TE R P  D ≠!≠!≠!≠!≠     !`,
    // `≠! ! !≠ ≠!≠!≠ SYST M ≠  !≠!  ≠! ! !≠!≠!
    // ≠   ≠!!≠!≠!     RRUPT   ≠!≠!≠ ≠!≠! !!≠!`,
    // `≠    !≠!  ≠   S  TEM ≠!≠   ≠!≠ ≠!≠!  ≠!
    // ≠!≠ ≠! ≠ ≠! INTERR      ≠!≠  !≠!≠    ≠!`,
    // `≠!    ≠!≠!    SYSTEM ≠!≠!≠!≠!≠  !≠  !≠!
    // ≠!≠!≠!   ≠! INTERRUPTED   ≠!    ≠!≠!!≠!`,
    // `     !≠!≠  !≠  Y TEM ≠!   !≠!≠!  ≠!≠ ≠!
    //   ≠!  ! !≠! INT     TED ≠!≠      !≠!!≠!`,
    // `err`,
    // `	or > >`,
    // `		 >`,
    // `~						+`,
    // `~						++`,
    // `~						+++`,
    // `~						++++`,
    // `~						+++++`,
    // `~						++++++`,
    // `~						+++++++`,
    // `~						++++++++`,
    // `~						+++++++++`,
    // `~						++++++++++`,
    // `sens~ry rec~pt~r ove~`,
    // `					  l~~~`,
    // `					  lo~~`,
    // `					  loa~`,
    // `					     d~~~~~~`,
    // `					     d~ ~~~`,
    // `					     d~~ ~`,
    // `					     d  ~`,
    // `					     d~~`,
    // `					     d~`,
    // `					     d`,
    // `*=======================================`,
    // `=*======================================`,
    // `==*=====================================`,
    // `===*====================================`,
    // `====*===================================`,
    // `=====*==================================`,
    // `======*=================================`,
    // `*======*================================`,
    // `=*======*===============================`,
    // `==*======*==============================`,
    // `===*======*=============================`,
    // `====*======*============================`,
    // `=====*======*===========================`,
    // `======*======*==========================`,
    // `=======*======*=========================`,
    // `========*======*========================`,
    // `=========*======*=======================`,
    // `==========*======*======================`,
    // `===========*======*=====================`,
    // `============*======*====================`,
    // `=============*======*===================`,
    // `==============*======*==================`,
    // `*==============*======*=================`,
    // `=*==============*======*================`,
    // `==*==============*======*===============`,
    // `===*==============*======*==============`,
    // `====*==============*======*=============`,
    // `=====*==============*======*============`,
    // `======*==============*======*===========`,
    // `=======*==============*======*==========`,
    // `========*==============*======*=========`,
    // `=========*==============*======*========`,
    // `==========*==============*======*=======`,
    // `===========*==============*======*======`,
    // `============*==============*======*=====`,
    // `=============*==============*======*====`,
    // `==============*==============*======*===`,
    // `===============*==============*======*==`,
    // `================*==============*======*=`,
    // `=================*==============*======*`,
    // `==================*==============*======`,
    // `===================*==============*=====`,
    // `====================*==============*====`,
    // `=====================*==============*===`,
    // `======================*==============*==`,
    // `=======================*==============*=`,
    // `========================*==============*`,
    // `=========================*==============`,
    // `==========================*=============`,
    // `===========================*============`,
    // `============================*===========`
];

function err() {

    if (errCount === 0) {
        errP = document.createElement('p');
        errP.classList.add('fade');
        terminal.appendChild(document.createElement('br'));
        terminal.appendChild(document.createElement('br'));
        terminal.appendChild(errP);
        terminal.appendChild(document.createElement('br'));
        terminal.appendChild(document.createElement('br'));
    };

    errP.innerText = error[errCount];
    errCount++;

    if (errCount === error.length) {
        clearInterval(errInt);
        errCount = 0;
        diaryInt = setInterval(readDiary, 700);
    };

};


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


function rando(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

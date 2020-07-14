// T E R M I N A L ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let logo = `____________________________________________________________


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


       ________  ________
      |\\   __  \\|\\   ____\\
      \\ \\  \\|\\  \\ \\  \\___|_
       \\ \\  \\\\\\  \\ \\_____  \\
        \\ \\  \\\\\\  \\|____|\\  \\
         \\ \\_______\\____\\_\\  \\
          \\|_______|\\_________\\
                   \\|_________|

        NeuBi Solutions© v13.3.7 2038


____________________________________________________________


`

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
    `DAMAGE`,
    `mobility status ~ null`,
    `sudo manual override`,
    `MERGE`,
    'ARCHIVE',
    'LOADING',
    `organic host engaged with:

	BOMPOW Mouse Trap
	ASIN: B07HDZT74Z
	Weight: 159g
	Found on: Amazon
	Reviews: 4.5/5 * from 572 Ratings
	Price: £10.99

stored - 1593309810

`,
    `threat level ~ HIGH`,
    `searching viable escape routes`,
    'ARCHIVE',
    'LOADING',
    `possible escape route detected`,
    `source: https://www.wikihow.com/Set-a-Mousetrap`,
    `stored - 1593309810`,
    `unsetting mouse trap`,
    `overclocking`,
    `diverting power to s-STRUT D + s-STRUT E ( rat arms ) && recommence unsetting && break mouse trap`,
    `s-AB Bridge ( rat tail ) ~ lost

             ..----.._    _
            .' .--.    "-.(O)_
X X X X"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
    `initiate scabbing program`,
    `resume course to data hub`,
    `tracking`,
    `USB`,
    `jacking in`,
    `accessing data hub`,
    `local storage: 4,269 directories found`,
    `3.2TB`,
    `filtering duplicate files`,
    `begin transfer`
];

let terminal = document.getElementById('terminal');
let reaction = document.getElementById('reaction');
let diaryInt;
let diaryCount = 0;

setTimeout(() => {
    clearInterval(sleepInt);
    sleepCount = 0;
    emoticons[0].children[0].innerText = '';
    diaryInt = setInterval(readDiary, 700);
}, 5000);

function readDiary() {

    if (diary[diaryCount] === 'LOADING') {
        clearInterval(diaryInt);
        loadingInt = setInterval(loading, 60);
        matchesInt = setInterval(matchesNumbers, 180);
    } else if (diary[diaryCount] === 'ARCHIVE') {
        clearInterval(diaryInt);
        archiveInt = setInterval(archiveNumbers, 80);
    } else if (diary[diaryCount] === 'tracking') {
        let text = diary[diaryCount];
        clearInterval(diaryInt);
        waitingInt = setInterval(function() {waiting(text)}, 200);
        runInt = setInterval(run, 250);
    } else if (diary[diaryCount] === 'unsetting mouse trap' || diary[diaryCount] === 'localise' || diary[diaryCount] === 'entering rat vision' || diary[diaryCount] === 'diverting power to s-STRUT D + s-STRUT E ( rat arms ) && recomense unsetting && break mouse trap') {
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
        p.innerText = `${rando(95, 72)}% certainty - diverting course`;
        p.classList.add('fade');
        terminal.appendChild(p);
    } else if (diary[diaryCount] === 'ERROR') {
        clearInterval(diaryInt);
        clearInterval(runInt);
        emoticons[1].children[0].innerText = '';
        shockInt = setInterval(shock, 100);
        painInt = setInterval(pain, 250);
        errInt = setInterval(err, 200);
    } else if (diary[diaryCount] === 'DAMAGE') {
        clearInterval(diaryInt);
        damageInt = setInterval(ouch, 400);
    } else if (diary[diaryCount] === 'MERGE') {
        clearInterval(diaryInt);
        mergeInt = setInterval(merge, 100);
    } else if (diary[diaryCount] === 'REBOOT') {
        clearInterval(diaryInt);
        let p = document.createElement('p');
        p.innerText = 'reboot now';
        p.classList.add('fade');
        terminal.appendChild(p);
        setTimeout(() => {
            clearInterval(painInt);
            clearInterval(shockInt);
            terminal.innerHTML = '';
            emoticons[0].children[0].innerText = '';
            emoticons[1].children[0].innerText = '';
            diaryInt = setInterval(readDiary, 700);
        }, 3000);
    } else if (diary[diaryCount] === 'LOGO') {
        let p = document.createElement('p');
        p.innerText = logo;
        p.classList.add('fade');
        terminal.appendChild(p);
    } else if (diary[diaryCount] === 'USB') {
        clearInterval(runInt);
        emoticons[1].children[0].innerText = '';
        let p = document.createElement('p');
        p.innerText = 'USB 3.0 port found';
        p.classList.add('fade');
        terminal.appendChild(p);
    } else {
        let p = document.createElement('p');
        p.innerText = diary[diaryCount];
        p.classList.add('fade');
        terminal.appendChild(p);
    };

    diaryCount++;
    if (diaryCount === diary.length) {
        clearInterval(diaryInt);
        diaryCount = 0;
        setTimeout(() => {
            terminal.style.opacity = '0';
            reaction.style.opacity = '0';
            setTimeout(() => {
                terminal.innerHTML = '';
                terminal.style.opacity = '1';
                reaction.style.opacity = '1';
                sleepInt = setInterval(sleep, 250);
                setTimeout(() => {
                    clearInterval(sleepInt);
                    sleepCount = 0;
                    emoticons[0].children[0].innerText = '';
                    diaryInt = setInterval(readDiary, 700);
                }, 5000);
            }, 10000);
        }, 5000);
    };

};


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let loadingInt;
let loadingCount = 0;
let load = [
`
/`,
`
//`,
`
///`,
`
////`,
`
/////`,
`
//////`,
`
///////`,
`
////////`,
`
/////////`,
`
//////////`,
`
///////////`,
`
////////////`,
`
/////////////`,
`
//////////////`,
`
///////////////`,
`
////////////////`,
`
/////////////////`,
`
//////////////////`,
`
///////////////////`,
`
////////////////////`,
`
/////////////////////`,
`
//////////////////////`,
`
///////////////////////`,
`
////////////////////////`,
`
/////////////////////////`,
`
//////////////////////////`,
`
///////////////////////////`,
`
////////////////////////////`,
`
/////////////////////////////`,
`
//////////////////////////////`,
`
///////////////////////////////`,
`
////////////////////////////////`,
`
/////////////////////////////////`,
`
//////////////////////////////////`,
`
///////////////////////////////////`,
`
////////////////////////////////////`,
`
/////////////////////////////////////`,
`
//////////////////////////////////////`,
`
///////////////////////////////////////`,
`
////////////////////////////////////////`,
`
/////////////////////////////////////////`,
`
//////////////////////////////////////////`
];
let loadingP;

function loading() {

    if (loadingCount === 0) {
        loadingP = document.createElement('p');
        loadingP.classList.add('fade');
        terminal.appendChild(loadingP);
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
        matchesP.innerText = `${rando(matchesMax, 1)} potential matches
        `;
        terminal.appendChild(matchesP);
    };

    matchesP.innerText = `${rando(matchesMax, 1)} potential matches
    `;
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
    ≠!≠!≠!≠!≠!≠ INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!≠!≠!≠ INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!≠!≠!≠ INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!≠!≠!≠ INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!≠!≠!≠ INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`



                  SYSTEM
                INTERRUPTED




`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!≠!≠!≠ INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`



                  SYSTEM
                INTERRUPTED




`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!≠!≠!≠ INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




`,
`



                  SYSTEM
                INTERRUPTED




`,
`



    ≠!≠!≠!≠!≠!≠!≠ SYSTEM ≠!≠!≠!≠!≠!≠!≠!≠!≠!
    ≠!≠!≠!≠!≠!≠ INTERRUPTED ≠!≠!≠!≠!≠!≠!!≠!




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









`
];

function err() {

    if (errCount === 0) {
        errP = document.createElement('p');
        errP.classList.add('fade');
        terminal.appendChild(errP);
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

let damageInt;
let damageCount = 0;
let damageP;
let damage = [
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
'-.__.-'"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
`damage located at: s-AB Bridge ( rat tail )

             ..----.._    _
            .' .--.    "-.(O)_
       '"'=:|  ,  _)_ \__ . c\'-..
             ''------'---''---'-"

`,
];

function ouch() {

    if (damageCount === 0) {
        damageP = document.createElement('p');
        damageP.classList.add('fade');
        terminal.appendChild(damageP);
    };

    damageP.innerText = damage[damageCount];
    damageCount++;

    if (damageCount === damage.length) {
        clearInterval(damageInt);
        damageCount = 0;
        diaryInt = setInterval(readDiary, 700);
    };

};


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠

let mergeInt;
let mergeCount = 0;
let mergeP;
let merging = [
`     merging with genome structures
                                        `,
`     merging with genome structures
                                        `,
`
                   ##                   `,
`
                  ####                  `,
`     merging with genome structures
                 ######                 `,
`     merging with genome structures
                ########                `,
`
               ##########               `,
`
              ############              `,
`     merging with genome structures
             ##############             `,
`     merging with genome structures
            ################            `,
`
           ##################           `,
`
          ####################          `,
`     merging with genome structures
         ######################         `,
`     merging with genome structures
        ########################        `,
`
       ##########################       `,
`
      ############################      `,
`     merging with genome structures
     ##############################     `,
`     merging with genome structures
    ################################    `,
`
   ##################################   `,
`
  ####################################  `,
`     merging with genome structures
 ###################################### `,
`     merging with genome structures
########################################`,
`#                                      #
########################################`,
`##                                    ##
########################################`,
`###  merging with genome structures  ###
########################################`,
`#### merging with genome structures ####
########################################`,
`####                                ####
###################  ###################`,
`####                                ####
##################    ##################`,
`#### merging with genome structures ####
#################      #################`,
`#### merging with genome structures ####
################        ################`,
`####                                ####
###############          ###############`,
`####                                ####
##############            ##############`,
`#### merging with genome structures ####
#############              #############`,
`#### merging with genome structures ####
############                ############`,
`####                                ####
###########                  ###########`,
`####                                ####
##########                    ##########`,
`#### merging with genome structures ####
#########                      #########`,
`#### merging with genome structures ####
########                        ########`,
`####                                ####
#######                          #######`,
`####                                ####
######                            ######`,
`#### merging with genome structures ####
#####                              #####`,
`#### merging with genome structures ####
####                                ####`,
`####                                ####
###                                  ###`,
`####                                ####
##                                    ##`,
`#### merging with genome structures ####
#                                      #`,
`#### merging with genome structures ####
                                        `,
` ###                                ###
                                        `,
`  ##                                ##
                                        `,
`  ## merging with genome structures ##
                                        `,
`   # merging with genome structures #
                                        `,
`
                   ##                   `,
`
                  ####                  `,
`     merging with genome structures
                 ######                 `,
`     merging with genome structures
                ########                `,
`
               ##########               `,
`
              ############              `,
`     merging with genome structures
             ##############             `,
`     merging with genome structures
            ################            `,
`
           ##################           `,
`
          ####################          `,
`     merging with genome structures
         ######################         `,
`     merging with genome structures
        ########################        `,
`
       ##########################       `,
`
      ############################      `,
`     merging with genome structures
     ##############################     `,
`     merging with genome structures
    ################################    `,
`
   ##################################   `,
`
  ####################################  `,
`     merging with genome structures
 ###################################### `,
`     merging with genome structures
########################################`,
`#                                      #
########################################`,
`##                                    ##
########################################`,
`###  merging with genome structures  ###
########################################`,
`#### merging with genome structures ####
########################################`,
`####                                ####
###################  ###################`,
`####                                ####
##################    ##################`,
`####        enter rat vision        ####
#################      #################`,
`####        enter rat vision        ####
################        ################`,
`####                                ####
###############          ###############`,
`####                                ####
##############            ##############`,
`####        enter rat vision        ####
#############              #############`,
`####        enter rat vision        ####
############                ############`,
`####                                ####
###########                  ###########`,
`####                                ####
##########                    ##########`,
`####        enter rat vision        ####
#########                      #########`,
`####        enter rat vision        ####
########                        ########`,
`####                                ####
#######                          #######`,
`####                                ####
######                            ######`,
`####        enter rat vision        ####
#####                              #####`,
`####        enter rat vision        ####
####                                ####`,
`####                                ####
###                                  ###`,
`####                                ####
##                                    ##`,
`####        enter rat vision        ####
#                                      #`,
`####        enter rat vision        ####
                                        `,
` ###                                ###
                                        `,
`  ##                                ##
                                        `,
`   #      locating pain source      #
                                        `,
`          locating pain source
                                        `,
`
                   ##                   `,
`
                  ####                  `,
`          locating pain source
                 ######                 `,
`          locating pain source
                ########                `,
`
               ##########               `,
`
              ############              `,
`          locating pain source
             ##############             `,
`          locating pain source
            ################            `,
`
           ##################           `,
`
          ####################          `,
`          locating pain source
         ######################         `,
`          locating pain source
        ########################        `,
`
       ##########################       `,
`
      ############################      `,
`          locating pain source
     ##############################     `,
`          locating pain source
    ################################    `,
`
   ##################################   `,
`
  ####################################  `,
`          locating pain source
 ###################################### `,
`          locating pain source
########################################`,
`#                                      #
########################################`,
`##                                    ##
########################################`,
`###           source found           ###
########################################`,
`####          source found          ####
########################################`
];

function merge() {
    if (mergeCount === 0) {
        mergeP = document.createElement('p');
        mergeP.classList.add('fade');
        terminal.appendChild(mergeP);
    };

    mergeP.innerText = merging[mergeCount];
    mergeCount++;

    if (mergeCount === merging.length) {
        clearInterval(mergeInt);
        mergeCount = 0;
        diaryInt = setInterval(readDiary, 700);
    };
};


// R E A C T I O N ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let aiContainer = document.getElementById('ai');
let ratContainer = document.getElementById('rat');
let emoticons = document.getElementsByClassName('emoticon');

let ai = `
       /////=================================/
      ////                                 //
     ///                                 ///
    //                                 ////
   /=================================/////`;

let aiReaction = document.createElement('p');
aiReaction.innerText = ai;
aiContainer.appendChild(aiReaction);

let rat = `
    /////=================================/
   ////                                 //
  ///                                 ///
 //                                 ////
/=================================/////`;

let ratReaction = document.createElement('p');
ratReaction.innerText = rat;
ratContainer.appendChild(ratReaction);


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let sleepInt;
let sleepCount = 0;

let sleeping = [
`               (︶｡︶✽)      `,
`               (︶｡︶✽) ✽    `,
`               (︶｡︶✽) ✽ ✽  `,
`               (︶｡︶✽) ✽ ✽ ✽`
];

function sleep() {

    emoticons[0].children[0].innerText = sleeping[sleepCount];
    sleepCount++;
    if (sleepCount === sleeping.length) {
        sleepCount = 0;
    };

};

sleepInt = setInterval(sleep, 250);


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let runInt;
let runCount = 0;

let running = [
`                三┏( ^o^)┛`,
`               三 ┗( ^o^)┓`
];

function run() {

    emoticons[1].children[0].innerText = running[runCount];
    runCount++;
    if (runCount === running.length) {
        runCount = 0;
    };

};


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let painInt;
let painCount = 0;

let hurting = [
`               ＼(〇_ｏ)／`,
`               ＼(ｏ_〇)／`,
`               ＼(〇_ｏ)／`,
`               ＼(ｏ_〇)／`,
`               ＼(〇_ｏ)／`,
`               ＼(ｏ_〇)／`,
`               ＼(〇_ｏ)／`,
`               ＼(ｏ_〇)／`,
`             x ＼(〇_ｏ)／ x`,
`           x x ＼(ｏ_〇)／ x x`,
`         x x x ＼(〇_ｏ)／ x x x`,
`       x x x   ＼(ｏ_〇)／   x x x`,
`               ＼(〇_ｏ)／        `,
`       x x x   ＼(ｏ_〇)／   x x x`,
`               ＼(〇_ｏ)／        `,
`       x x x   ＼(ｏ_〇)／   x x x`,
`               ＼(〇_ｏ)／        `,
`       x x x   ＼(ｏ_〇)／   x x x`,
`               ＼(〇_ｏ)／        `,
`       x x x   ＼(ｏ_〇)／   x x x`
];

function pain() {

    emoticons[1].children[0].innerText = hurting[painCount];
    painCount++;
    if (painCount === hurting.length) {
        painCount = 0;
    };

};


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let shockInt;
let shockCount = 0;

let shocking = [
`               (⊙＿⊙)`,
`                       ɾ◉⊆◉ɹ`,
`                          (╬ಠ益ಠ)`,
`                   (ʘдʘ╬)`,
`                   。。。(ノ＿　＿)ノ`,
`                   （＞μ＜＃）`,
`              ԅ(♡﹃♡ԅ)`,
`              ԅ(¯﹃¯ԅ)`,
`              ԅ(♡﹃♡ԅ)`,
`              ԅ(¯﹃¯ԅ)`,
`                   (-@Д@)`,
`            ¯\_( ͠° ͟ʖ °͠ )_/¯`,
`                   ༼;´༎ຶ ༎ຶ༽`,
`                   ＼('◓Д◔')／`,
`                   ＼('◓Д◔')／`,
`               （0ー0）`,
`                   ＼('◓Д◔')／`
];

function shock() {

    emoticons[0].children[0].innerText = shocking[shockCount];
    shockCount++;
    if (shockCount === shocking.length) {
        shockCount = 0;
    };

};


// M I S C ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


function rando(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

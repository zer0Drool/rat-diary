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
    `activating carrier`,
    `loading last snapshot`,
    `determining anomalies`,
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
	Reviews: 5/5 * from 572 Ratings
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
    `TRANSFER`
];

let terminal = document.getElementById('terminal');
let reaction = document.getElementById('reaction');
let yeet = document.getElementsByClassName('yeet');
let vid = document.getElementsByTagName('video')[0];
let coorpOuter = document.getElementById('coorp-outer');
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
        thinkInt = setInterval(think, 250);
    } else if (diary[diaryCount] === 'static detected') {
        senseInt = setInterval(sense, 80);
        let p = document.createElement('p');
        p.innerText = diary[diaryCount];
        p.classList.add('fade');
        terminal.appendChild(p);
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
        clearInterval(thinkInt);
        thinkCount = 0;
        let p = document.createElement('p');
        p.innerHTML = '<span class="flash">$$$</span> DATA HUB FOUND <span class="flash">$$$</span>';
        p.classList.add('fade');
        terminal.appendChild(p);
        excitedInt = setInterval(excited, 200);
    } else if (diary[diaryCount] === 'ACCURACY') {
        let p = document.createElement('p');
        p.innerText = `${rando(95, 72)}% certainty - diverting course`;
        p.classList.add('fade');
        terminal.appendChild(p);
    } else if (diary[diaryCount] === 'ERROR') {
        clearInterval(diaryInt);
        clearInterval(runInt);
        clearInterval(excitedInt);
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
            reaction.style.display = 'none';
            coorpWrap.style.display = 'none';
            reaction.style.opacity = '0';
            coorpWrap.style.opacity = '0';
            // vid.pause();
            // vid.classList.add('invert');
            setTimeout(() => {
                diaryInt = setInterval(readDiary, 700);
                reaction.style.display = 'flex';
                coorpWrap.style.display = 'block';
            }, 2000);
            setTimeout(() => {
                reaction.style.opacity = '1';
                coorpWrap.style.opacity = '1';
                // vid.play();
                // vid.classList.remove('invert');
            }, 3800);
        }, 3000);
    } else if (diary[diaryCount] === 'LOGO') {
        let p = document.createElement('p');
        p.innerText = logo;
        p.classList.add('fade');
        terminal.appendChild(p);
        confusedInt = setInterval(confused, 100);
    } else if (diary[diaryCount] === 'activating carrier' || diary[diaryCount] === 'loading last snapshot' || diary[diaryCount] === 'determining anomalies') {
        let text = diary[diaryCount];
        clearInterval(diaryInt);
        percentInt = setInterval(function() {percent(text)}, 200);
    } else if (diary[diaryCount] === 'USB') {
        clearInterval(runInt);
        emoticons[1].children[0].innerText = '';
        let p = document.createElement('p');
        p.innerText = 'USB 3.0 port found';
        p.classList.add('fade');
        terminal.appendChild(p);
    } else if (diary[diaryCount] === 'TRANSFER') {
        transferInt = setInterval(transfer, 100);
        emoticons[0].children[0].innerText = '';
        let p = document.createElement('p');
        p.innerText = 'begin transfer';
        p.classList.add('fade');
        terminal.appendChild(p);
    } else if (diary[diaryCount] === 'possible escape route detected') {
        clearInterval(thinkInt);
        emoticons[0].children[0].innerText = '';
        thinkCount = 0;
        let p = document.createElement('p');
        p.innerText = diary[diaryCount];
        p.classList.add('fade');
        terminal.appendChild(p);
    } else if (diary[diaryCount].indexOf('organic host engaged with:') != -1) {
        clearInterval(thinkInt);
        emoticons[0].children[0].innerText = '';
        thinkCount = 0;
        let p = document.createElement('p');
        p.innerText = diary[diaryCount];
        p.classList.add('fade');
        terminal.appendChild(p);
        reviewInt = setInterval(review, 130);
    } else if (diary[diaryCount] === 'organic shell compromised') {
        clearInterval(confusedInt);
        emoticons[0].children[0].innerText = '';
        confusedCount = 0;
        let p = document.createElement('p');
        p.innerText = diary[diaryCount];
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
                coorpOuter.classList.add('coorp-full-screen');
            }, 2000);
            // document.styleSheets[1].rules[2].style.fontSize = '8px';
            setTimeout(() => {
                coorpOuter.classList.remove('coorp-full-screen');
                clearInterval(transferInt);
                emoticons[0].children[0].innerText = '';
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
            }, 20000);
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


    let percentInt;
    let percentFirst = true;
    let percentage = 1;
    let percentP;

    function percent(text) {
        if (percentFirst) {
            percentage = 1;
            percentP = document.createElement('p');
            percentP.classList.add('fade');
            terminal.appendChild(percentP);
            percentFirst = false;
        };

        // percentage = percentage * 1.8;
        percentage += rando(10, 0);
        if (percentage > 100) {
            percentage = 100;
            clearInterval(percentInt);
            diaryInt = setInterval(readDiary, 700);
            // percentage = 1;
            percentFirst = true;
        };
        percentP.innerText = `{${text} ${Math.floor(percentage)}%}`;
    }


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
       /////=AI==============================/
      ////                                 //
     ///                                 ///
    //                                 ////
   /=================================/////`;

let aiReaction = document.createElement('p');
aiReaction.innerText = ai;
aiContainer.appendChild(aiReaction);

let rat = `
    /////=RAT=============================/
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
`                 ＼(〇_ｏ)／`,
`                 ＼(ｏ_〇)／`,
`                 ＼(〇_ｏ)／`,
`                 ＼(ｏ_〇)／`,
`                 ＼(〇_ｏ)／`,
`                 ＼(ｏ_〇)／`,
`                 ＼(〇_ｏ)／`,
`                 ＼(ｏ_〇)／`,
`               x ＼(〇_ｏ)／ x`,
`             x x ＼(ｏ_〇)／ x x`,
`           x x x ＼(〇_ｏ)／ x x x`,
`         x x x   ＼(ｏ_〇)／   x x x`,
`                 ＼(〇_ｏ)／        `,
`         x x x   ＼(ｏ_〇)／   x x x`,
`                 ＼(〇_ｏ)／        `,
`         x x x   ＼(ｏ_〇)／   x x x`,
`                 ＼(〇_ｏ)／        `,
`         x x x   ＼(ｏ_〇)／   x x x`,
`                 ＼(〇_ｏ)／        `,
`         x x x   ＼(ｏ_〇)／   x x x`
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


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let transferInt;
let transferCount = 0;

let transfering = [
`                  ♡（＾ω＾）♡`,
`                 ♡ （＾ω＾） ♡`,
`                ♡  （＾ω＾）  ♡`,
`               ♡   （＾ω＾）   ♡`
];

function transfer() {

    emoticons[0].children[0].innerText = transfering[transferCount];
    transferCount++;
    if (transferCount === transfering.length) {
        transferCount = 0;
    };

};


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let excitedInt;
let excitedCount = 0;

let exciting = [
`                ╲(｡◕‿◕｡)╱ ⁎: ✰ ﾟ✧`,
`                ╲(｡◕‿◕｡)╱  : ✰ ﾟ✧`,
`                ╲(｡◕‿◕｡)╱ ⁎  ✰ ﾟ✧`,
`                ╲(｡◕‿◕｡)╱ ⁎:   ﾟ✧`,
`                ╲(｡◕‿◕｡)╱ ⁎: ✰  ✧`,
`                ╲(｡◕‿◕｡)╱ ⁎: ✰ ﾟ `
];

function excited() {

    emoticons[0].children[0].innerText = exciting[excitedCount];
    excitedCount++;
    if (excitedCount === exciting.length) {
        excitedCount = 0;
    };

};


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let thinkInt;
let thinkCount = 0;

let thinking = [
`                  （^-^）`,
`                  （^-^）.`,
`                  （^-^）.｡`,
`                  （^-^）.｡o`,
`                  （^-^）.｡oO`,
`                  （^-^）.｡oO（?）`,
`                  （'-'）.｡oO（?）`,
`                  （^-^）.｡oO（?）`,
`                  （'-'）.｡oO（?）`,
];

function think() {

    emoticons[0].children[0].innerText = thinking[thinkCount];
    thinkCount++;
    if (thinkCount === thinking.length) {
        thinkCount = 0;
    };

};


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let confusedInt;
let confusedCount = 0;

let confusion = [
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(-_-；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`,
`                 ∑(O_O；)`
];

function confused() {

    emoticons[0].children[0].innerText = confusion[confusedCount];
    confusedCount++;
    if (confusedCount === confusion.length) {
        confusedCount = 0;
    };

};


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let reviewInt;
let reviewCount = 0;

let reviews = [
`            ✯         (－‸－)`,
`            ✯ ✯       (－‸－)`,
`            ✯ ✯ ✯     (－‸－)`,
`            ✯ ✯ ✯ ✯   (－‸－)`,
`            ✯ ✯ ✯ ✯ ✯ (－‸－)`,
`                      (－‸－)`,
`            ✯ ✯ ✯ ✯ ✯ (－‸－)`,
`                      (－‸－)`,
`            ✯ ✯ ✯ ✯ ✯ (－‸ლ )`
];

function review() {

    emoticons[0].children[0].innerText = reviews[reviewCount];
    reviewCount++;
    if (reviewCount === reviews.length) {
        clearInterval(reviewInt);
        reviewCount = 0;
    };

};


//≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


let senseInt;
let senseCount = 0;

let sensing = [
`                     ( ͠° ͟ʖ °͠ ) `,
`                   ! ( ͠° ͟ʖ °͠ ) !`,
`                  !! ( ͠° ͟ʖ °͠ ) !!`,
`                 !!! ( ͠° ͟ʖ °͠ ) !!!`,
`                !!!  ( ͠° ͟ʖ °͠ )  !!!`,
`               !!!   ( ͠° ͟ʖ °͠ )   !!!`,
`              !!!    ( ͠° ͟ʖ °͠ )    !!!`,
`             !!!     ( ͠° ͟ʖ °͠ )     !!!`,
`            !!!      ( ͠° ͟ʖ °͠ )      !!!`,
`           !!!       ( ͠° ͟ʖ °͠ )       !!!`,
`          !!!        ( ͠° ͟ʖ °͠ )        !!!`,
`          !!         ( ͠° ͟ʖ °͠ )         !!`,
`          !          ( ͠° ͟ʖ °͠ )          !`,
`                     ( ͠° ͟ʖ °͠ )           `
];

function sense() {

    emoticons[0].children[0].innerText = sensing[senseCount];
    senseCount++;
    if (senseCount === sensing.length) {
        clearInterval(senseInt);
        senseCount = 0;
    };

};


// M I S C ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠


function rando(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

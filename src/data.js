//image imports
import peter from './img/peter.jpg';
import stewie from './img/stewie.png';
import quag from './img/quag.png';
import brian from './img/brian.png';
import lois from './img/lois.png';
import meg from './img/meg.png';
import chris from './img/chris.png';
import joe from './img/joe.png';
import consuella from './img/consuella.png';
import death from './img/death.png';
import cleve from './img/cleve.png';
import herbert from './img/hebert.jpg';

//peter sounds
import idea from './sounds/peter/an_idea.mp3';
import crazy from './sounds/peter/areyou_crazy.mp3';
import arh from './sounds/peter/arhh_peter.mp3';
import beat from './sounds/peter/beatyou.mp3';
import fine from './sounds/peter/fine.mp3';
import bird from './sounds/peter/bird_peter.mp3';
import crying from './sounds/peter/peter_crying.mp3'

//consuela sounds
import afuera from './sounds/consuella/afuera.mp3';
import broken from './sounds/consuella/broken.mp3';
import mo_lemon from './sounds/consuella/mo_lemon.mp3';
import no from './sounds/consuella/no-4.mp3';
import ok from './sounds/consuella/ok.mp3';
import rain from './sounds/consuella/rain.mp3';

//herbert sounds
import convo_starter from './sounds/herbert/convo_starter.mp3';
import excuse_me from './sounds/herbert/excuse_me.mp3';
import little_man from './sounds/herbert/little_man.mp3'

//quagmire sounds
import arhh from './sounds/quag/arhh.mp3';
import fatchicks from './sounds/quag/fatchicks.mp3';
import giggidy from './sounds/quag/giggidy.mp3';
import lookatme from './sounds/quag/lookatme.mp3';
import no_prob from './sounds/quag/no_prob.mp3';

//lois sounds
import fuck_you from './sounds/lois/fu.mp3';
import gotosleep from './sounds/lois/gotosleep.mp3';
import hello from './sounds/lois/hello.mp3';
import lost_mind from './sounds/lois/lost_mind.mp3';
import ohno from './sounds/lois/ohno.mp3';

//stewie sounds
import brian_shout from './sounds/stewie/brian.mp3';
import donottellme from './sounds/stewie/donottellme.mp3';
import im_stewie from './sounds/stewie/im_stewie.mp3';
import puke from './sounds/stewie/puke.mp3';
import you_suck from './sounds/stewie/you_suck.mp3';

//chris sounds
import wow from './sounds/chris/wow.mp3'
import am_not from './sounds/chris/am_not.mp3'
import bye from './sounds/chris/bye.mp3'
import chris_crying from './sounds/chris/crying.mp3'
import fart from './sounds/chris/fart.mp3'
import ha from './sounds/chris/ha.mp3'
import kiss from './sounds/chris/kiss.mp3'
import marry from './sounds/chris/marry.mp3'


//brian sounds
import yep from './sounds/brian/yep.mp3'
import omg from './sounds/brian/omg.mp3'
import pleasure from './sounds/brian/pleasure.mp3'
import laugh from './sounds/brian/laugh.mp3'
import stupid from './sounds/brian/stupid.mp3'
import flirt from './sounds/brian/flirt.mp3'
import its_me from './sounds/brian/its_me.mp3'



//joe sounds
import alright from './sounds/joe/alright.mp3'
import brian_2 from './sounds/joe/brian.mp3'
import joe_crying from './sounds/joe/crying.mp3'
import feel  from'./sounds/joe/feel.mp3'
import hahaha from './sounds/joe/hahaha.mp3'
import shot from './sounds/joe/shot.mp3'
import joe_laugh from './sounds/joe/laugh.mp3'


//cleve sounds
import doing from './sounds/cleve/doing.mp3'
import food from './sounds/cleve/food.mp3'
import power from './sounds/cleve/power.mp3'
import sorry from './sounds/cleve/sorry.mp3'
import witch from './sounds/cleve/witch.mp3'
import women from './sounds/cleve/women.mp3'


//death sounds
import alcohol from  './sounds/death/alcohol.mp3'
import come from  './sounds/death/come.mp3'
import kill from  './sounds/death/kill.mp3'
import late from  './sounds/death/late.mp3'
import marriage from  './sounds/death/marriage.mp3'
import night from  './sounds/death/night.mp3'


//meg sounds
import help from './sounds/meg/help.mp3'
import kidding from './sounds/meg/kidding.mp3'
import love_dad from './sounds/meg/love_dad.mp3'
import kill_meg from './sounds/meg/kill.mp3'
import monster from './sounds/meg/monster.mp3'
import peanuts from './sounds/meg/peanuts.mp3'
import thanks from './sounds/meg/thanks.mp3'




const data = [
        {
            id: 1,
            name: 'Peter',
            image: peter,
            sounds: [idea, crazy, arh, beat, fine, bird, crying],
            soundNames: ['an idea', 'are you crazy', 'arhh', 'beat you', 'fine', 'bird', 'peter crying']
        },
        {
            id: 2,
            name: 'Stewie',
            image: stewie,
            sounds: [brian_shout, donottellme, im_stewie, puke, you_suck],
            soundNames: ['brian', 'dont tell me', 'im stewie', 'puke', 'you suck']
        },
        {
            id: 3,
            name: 'Quagmire',
            image: quag,
            sounds: [arhh, fatchicks, giggidy, lookatme, no_prob],
            soundNames: ['arhh', 'fat chicks', 'giggidy', 'dont look at me like that', 'no problem']
        },
        {
            id: 4,
            name: 'Lois',
            image: lois,
            sounds: [fuck_you, gotosleep, hello, lost_mind, ohno],
            soundNames: ['fuck you', 'go to sleep', 'hello', 'lost my mind', 'oh no']
        },
        {
            id: 5,
            name: 'Herbert',
            image: herbert,
            sounds: [convo_starter, excuse_me, little_man],
            soundNames: ['convo starter','excuse me','little man']
        },
        {
            id: 6,
            name: 'Consuella',
            image: consuella,
            sounds: [afuera,broken,mo_lemon,no,ok,rain],
            soundNames: ['afuera','broken','mo lemon','no','ok','rain']
        },
        {
            id: 7,
            name: 'Meg',
            image: meg,
            sounds: [help,kidding,love_dad,kill_meg,monster,peanuts,thanks],
            soundNames: ['help','kidding','love','kill','monster','peanuts','thanks']
        },
        {
            id: 8,
            name: 'Chris',
            image: chris,
            sounds: [wow,am_not,chris_crying,fart,ha,kiss,marry,bye],
            soundNames: ['wow','am not','crying','fart','hahha','bye','kiss','marry']
        },
        {
            id: 9,
            name: 'Brian',
            image: brian,
            sounds: [yep,omg,pleasure,laugh,flirt,its_me,stupid],
            soundNames: ['yep','omg','pleasure','laugh','flirt','its_me','stop']
        },
        {
            id: 10,
            name: 'Joe',
            image: joe,
            sounds: [alright,brian_2,joe_crying,feel,shot,hahaha,joe_laugh],
            soundNames: ['alright','brian','crying','feel','shot','hahaha','laugh']
        },
        {
            id: 11,
            name: 'Death',
            image: death,
            sounds: [alcohol,come,kill,late,marriage,night],
            soundNames: ['alcohol','come','kill','late','marriage','night']
        },
        {
            id: 12,
            name: 'Cleve',
            image: cleve,
            sounds: [doing,food,power,sorry,witch,women],
            soundNames: ['doing','food','power','sorry','witch','women']
        },
]

export default data;
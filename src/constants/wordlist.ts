import { CONFIG } from './config'

export const WORDS = [
'rédze',
'ostîa',
'tróta',
'fromi',
'ridzó', 
'wefra',
'blâga',
'amòra',
'dótâa',
'wèkye',
'fonda',
'saete',
'ródzé',
'etiwa',
'clóou',
'bouja',
'ódjye',
'verya',
'tróse',
'vwida',
'dèjai',
'tróse',
'têrmó',
'caâda',
'ódjya',
'pécló',
'óouwe',
'grijé',
'amina',
'ronda',
'weson',
'crópa',
'motën',
'antse',
'cowêe',
'coman',
'pechó',
'adjya',
'ronye',
'wevré',
'mewën',
'nyese',
'abéra',
'pwéea',
'tócâe',
'sinle',
'bócon',
'cajën',
'waséi',
'fótré',
'róché',
'tapou',
'tardé',
'mâcwè',
'broné',
'patsó',
'chóna',
'brota',
'caréi',
'corta',
'demye',
'rondò',
'terya',
'ryéba',
'còrbó',
'fyèró',
'tókyé',
'torcó',
'déjêe',
'fidéi',
'terle',
'vêcha',
'fevri',
'bròon',
'tōrta',
'tsara',
'batré',
'melon',
'châra',
'mowën',
'bloji',
'verin',
'tchyè',
'racró',
'nirâa',
'tsase',
'éstra',
'pawën',
'clópé',
'nétée',
'ënpli',
'ranpa',
'prija',
'tópon',
'tanpa',
'tsêré',
'tsóou',
'venye',
'owiva',
'tsaré',
'rison',
'minta',
'favra',
'tsaōo',
'troca',
'borla',
'chopa',
'óchya',
'tardi',
'vitéé',
'cóbla',
'dzâno',
'zoupa',
'atepi',
'infan',
'frâre',
'rijon',
'tabéé',
'têrna',
'canpó',
'crapa',
'forni',
'trópa',
'sinlo',
'cōrna',
'afida',
'tsàta',
'écóta',
'pòrpé',
'trati',
'afana',
'mótéi',
'pobló',
'tréga',
'pouta',
'rocan',
'trèêe',
'piton',
'dzapa',
'barma',
'tebâe',
'vaéta',
'manpa',
'drité',
'pétâé',
'bwata',
'ranma',
'chara',
'tērla',
'afére',
'béton',
'omele',
'chócò',
'onati',
'bóton',
'fèrma',
'péinó',
'maadó',
'detri',
'tónâe',
'agóta',
'nyówa',
'bonōo',
'foméi',
'wétra',
'râtsó',
'wâtse',
'coplé',
'reele',
'chéna',
'dzaou',
'wijyé',
'ryeca',
'bléca',
'seryé',
'dzóta',
'wibró',
'afewa',
'mómón',
'âdjyó',
'ochya',
'acóou',
'verye',
'waona',
'nowéi',
'wârje',
'téita',
'câkyé',
'chiba',
'aréta',
'dibló',
'péiwa',
'rècha',
'pyoca',
'réélé',
'wivra',
'wanda',
'dëntò',
'dêrye',
'afena',
'vwesa',
'déman',
'bonye',
'forbi',
'cavwa',
'ëntin',
'nójwe',
'bofon',
'dapâa',
'donta',
'tâbló',
'tandi',
'chónó',
'apele',
'epeta',
'cócha',
'aseou',
'tópló',
'mazîe',
'favōo',
'danye',
'trétó',
'grava',
'chóou',
'crere',
'dzefa',
'róché',
'tèrgó',
'rwidó',
'afówa',
'penéi',
'Prire',
'tetse',
'rejën',
'vaeon',
'còrné',
'rlwin',
'mótra',
'râcló',
'nafla',
'manta',
'ronye',
'tsarfi',
'colôo',
'échôo',
'foura',
'pleji',
'chéwa',
'nenën',
'éivwe',
'clòte',
'vwéró',
'gróou',
'foche',
'pebló',
'mojou',
'gwâle',
'calon',
'adjyo',
'mawan',
'braji',
'borgó',
'terin',
'fonsa',
'étópa',
'tsoca',
'vwete',
'wanda',
'stecó',
'tonna',
'fetou',
'chaba',
'pousa',
'gróbó',
'piche',
'catró',
'éwévé',
'goléi',
'favre',
'wivró',
'douse',
'flapó',
'crowi',
'banye',
'vanōo',
'invwa',
'bonye',
'péjan',
'berni',
'gyéta',
'déója',
'tsana',
'raton',
'panté',
'craea',
'flana',
'janpi',
'joupa',
'cochi',
'cómin',
'corin',
'detse',
'lache',
'dzeta',
'bogan',
'bótsa',
'frâte',
'mawën',
'déwéi',
'otele',
'arari',
'promi',
'bârma',
'rowéi',
'stéca',
'tsowa',
'crapa',
'witre',
'gochó',
'eriti',
'vyówé',
'aréna',
'firin',
'vwari',
'flota',
'moche',
'éivwe',
'arpâé',
'módze',
'rójéi',
'porta',
'patse',
'weeon',
'mergó',
'bechi',
'tavwa',
'chate',
'vyele',
'arója',
'târpa',
'óouwa',
'chóta',
'pivra',
'kyèle',
'vârin',
'ordzò',
'móman',
'abita',
'intsó',
'bouló',
'dobli',
'brâja',
'paeou',
'choōo',
'pënte',
'orlâe',
'noura',
'élije',
'matën',
'médze',
'aryon',
'tókyé',
'flóré',
'davwé',
'afron',
'onbra',
'todri',
'tôrtò',
'bòrló',
'péjéi',
'chêra',
'ègawé',
'pënta',
'maadi',
'béchó',
'chóna',
'forba',
'tarpa',
'wanye',
'èpana',
'apele',
'parin',
'mèrla',
'tetou',
'pinna',
'trepé',
'derën',
'mâmōo',
'grâda',
'riban',
'mótsé',
'atópa',
'mijon',
'ponpa',
'mwire',
'créta',
'torco',
'gordó',
'minsó',
'dólon',
'faeâa',
'jésté',
'peowa',
'pidze',
'oscōo',
'óónye',
'amódó',
'dzoné',
'pèrtó',
'chowé',
'bléta',
'mowën',
'écówa',
'garse',
'oubla',
'rafla',
'véréi',
'deoun',
'repli',
'nyare',
'ontou',
'rousa',
'tsamò',
'tsâda',
'pétâa',
'cotêe',
'ecore',
'chópé',
'rósâe',
'tséja',
'vwéea',
'gyele',
'bonyé',
'pëngi',
'tòrné',
'mótéi',
'demâa',
'cówéi',
'tsani',
'wanye',
'vwese',
'redii',
'tëncó',
'motse',
'peòta',
'fâche',
'ârtse',
'berdé',
'ripâe',
'conba',
'boton',
'rapën',
'trâle',
'frija',
'dzâna',
'vioné',
'youwa',
'gyela',
'tósin',
'motsó',
'adóra',
'obêje',
'déjêe',
'cómin',
'bróca',
'trafi',
'conta',
'sinla',
'parin',
'plânó',
'chain',
'ënkye',
'tanbo',
'pwire',
'jaméi',
'tatse',
'côrba',
'ouron',
'chobe',
'rotse',
'winga',
'wënma',
'dzoun',
'insya',
'redui',
'peowe',
'màche',
'chîwa',
'châva',
'carma',
'bosou',
'cowin',
'mécla',
'pedri',
'chowe',
'patën',
'còrbé',
'chyin',
'aoule',
'wakye',
'dromi',
'blâma',
'éitró',
'tsocó',
'forda',
'crwéi',
'terya',
'breca',
'ënréé',
'tóson',
'cwire',
'janpé',
'aveja',
'saowa',
'mòrta',
'clóca',
'mâfya',
'vòrta',
'antan',
'potan',
'acoli',
'ratéi',
'outon',
'rënma',
'garéé',
'fòrma',
'wâfra',
'placa',
'wééta',
'tsacrou',
'nyona',
'myówa',
'râtse',
'petró',
'chowe',
'tòrna',
'crapó',
'avowa',
'chiwa',
'bwite',
'metse',
'bowîa',
'sócâé',
'vipêe',
'fédzó',
'mijōo',
'dreti',
'pétse',
'atori',
'mécha',
'minon',
'valin',
'bókyé',
'close',
'étawa',
'melâa',
'óoule',
'ronca',
'dajon',
'dódze',
'ëncan',
'fléma',
'frite',
'mâvra',
'mawën',
'éékye',
'sinla',
'ponya',
'abówa',
'catâa',
'sebōo',
'chadó',
'kyesa',
'rémwa',
'gróbó',
'wetse',
'groma',
'bijye',
'ranma',
'chóte',
'plané',
'mitin',
'antou',
'petéi',
'flota',
'norën',
'tâmin',
'omele',
'éivwa',
'forbi',
'cwéna',
'vêrna',
'grépa',
'botse',
'bidon',
'waséi',
'flócó',
'onéta',
'trafè',
'ënséi',
'mécló',
'doura',
'racâa',
'jostó',
'fréja',
'bewën',
'tsena',
'roupa',
'nâréi',
'bacon',
'cwite',
'cowin',
'rêcha',
'dzéró',
'canéé',
'bócla',
'rijin',
'nyire',
'tinte',
'tsêre',
'vinse',
'chitó',
'pyese',
'ródzó',
'damou',
'cócon',
'redze',
'masca',
'wacôo',
'tâbla',
'acrou',
'retsó',
'beeon',
'briló',
'caféi',
'ouncó',
'pêcha',
'béida',
'batéé',
'tórin',
'cóton',
'fanwé',
'tsàse',
'fejōo',
'aplin',
'pekye',
'déean',
'ploma',
'gârbé',
'fèrmó',
'óoura',
'pétéi',
'cōrda',
'tawan',
'bèkye',
'rënga',
'ateni',
'tsawi',
'tevâe',
'orele',
'ocopa',
'griwé',
'onyon',
'infya',
'féméi',
'vêrda',
'pêrda',
'décló',
'bóche',
'ecofi',
'bòrda',
'youwa',
'kyele',
'astou',
'tënté',
'mêrda',
'pòrpa',
'corta',
'cawën',
'cwife',
'éréta',
'frépa',
'cojën',
'wanya',
'coméi',
'vejën',
'tsâsé',
'roudó',
'mënma',
'trapa',
'grile',
'trapó',
'ródze',
'adoba',
'penyó',
'vitri',
'caeon',
'pewën',
'bójéi',
'vwata',
'trepi',
'ëngri',
'folou',
'mwitó',
'techó',
'vyèje',
'cótse',
'patwé',
'pólin',
'pedou',
'cotën',
'cóson',
'vwésó',
'gorda',
'bonta',
'joyou',
'crefa',
'óouló',
'verën',
'borgó',
'baché',
'radze',
'kyeri',
'córâe',
'jestó',
'fróta',
'mâcló',
'afrou',
'faéta',
'dobën',
'chópa',
'priwé',
'fibló',
'póson',
'mowin',
'nyócó',
'forni',
'belon',
'maron',
'epena',
'groma',
'óouta',
'talin',
'dalōo',
'fatōo',
'cówéi',
'coudó',
'flóta',
'fonda',
'mâtin',
'rééla',
'tanōo',
'nyóca',
'tsati',
'ónóra',
'marca',
'còrné',
'écolè',
'tsawé',
'tórin',
'wéstó',
'bróta',
'lapën',
'chawa',
'wanpa',
'carmó',
'pâkye',
'gawan',
'daoun',
'sigâa',
'cōrba',
'ponya',
'taona',
'vêche',
'borne',
'ramâe',
'tacon',
'vwidó',
'bléca',
'gaóna',
'brivó',
'blóca',
'fóréi',
'akita',
'féita',
'tsóou',
'rócha',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}

const set = [
  'sagaz',
  'negro',
  'âmago',
  'mexer',
  'êxito',
  'algoz',
  'termo',
  'senso',
  'nobre',
  'plena',
  'afeto',
  'mútua',
  'sutil',
  'audaz',
  'inato',
  'vigor',
  'seção',
  'ética',
  'desde',
  'porém',
  'aquém',
  'sanar',
  'fazer',
  'cerne',
  'ideia',
  'tênue',
  'torpe',
  'anexo',
  'moral',
  'poder',
  'assim',
  'fosse',
  'justo',
  'fútil',
  'honra',
  'muito',
  'razão',
  'mútuo',
  'ícone',
  'lapso',
  'égide',
  'corja',
  'expor',
  'tange',
  'hábil',
  'gozar',
  'posse',
  'haver',
  'detém',
  'ardil',
  'quiçá',
  'gleba',
  'prole',
  'pesar',
  'coser',
  'digno',
  'ávido',
  'genro',
  'ânsia',
  'brado',
  'tenaz',
  'causa',
  'dizer',
  'atroz',
  'sobre',
  'então',
  'ceder',
  'casal',
  'denso',
  'assaz',
  'seara',
  'cozer',
  'dever',
  'crivo',
  'óbice',
  'ânimo',
  'ápice',
  'censo',
  'comum',
  'dengo',
  'saber',
  'etnia',
  'culto',
  'tempo',
  'fugaz',
  'revés',
  'vício',
  'sonho',
  'valha',
  'sendo',
  'pífio',
  'temor',
  'amigo',
  'neném',
  'mundo',
  'regra',
  'clava',
  'forte',
  'pudor',
  'tenro',
  'louco',
  'ímpio',
  'desse',
  'impor',
  'manso',
  'pauta',
  'criar',
  'boçal',
  'ainda',
  'estar',
  'afago',
  'fluir',
  'ébrio',
  'jeito',
  'ontem',
  'graça',
  'pedir',
  'sério',
  'atrás',
  'viril',
  'pleno',
  'pária',
  'sábio',
  'servo',
  'apraz',
  'cisma',
  'ordem',
  'bruma',
  'devir',
  'usura',
  'prosa',
  'temer',
  'falar',
  'banal',
  'guisa',
  'gerar',
  'vendo',
  'juízo',
  'forma',
  'reaça',
  'visar',
  'óbvio',
  'obter',
  'dogma',
  'enfim',
  'senil',
  'cunho',
  'saúde',
  'havia',
  'matiz',
  'platô',
  'meiga',
  'coisa',
  'reter',
  'presa',
  'round',
  'crise',
  'álibi',
  'praxe',
  'favor',
  'vênia',
  'grato',
  'tédio',
  'pulha',
  'puder',
  'feliz',
  'vivaz',
  'acaso',
  'orgia',
  'garbo',
  'fluxo',
  'êxodo',
  'parvo',
  'ameno',
  'vital',
  'mágoa',
  'anelo',
  'lugar',
  'óbito',
  'adiar',
  'parco',
  'prime',
  'citar',
  'fator',
  'sinto',
  'tomar',
  'herói',
  'reles',
  'rogar',
  'mercê',
  'afins',
  'certo',
  'farsa',
  'valia',
  'valor',
  'prumo',
  'selar',
  'laico',
  'lavra',
  'bravo',
  'visão',
  'exato',
  'mesmo',
  'cisão',
  'possa',
  'coeso',
  'gesto',
  'façam',
  'homem',
  'revel',
  'achar',
  'amplo',
  'posso',
  'labor',
  'haste',
  'limbo',
  'união',
  'vulgo',
  'deter',
  'feixe',
  'tecer',
  'fácil',
  'imune',
  'olhar',
  'atuar',
];

function getPalavraDoDia() {
  const objetoPalavra = {
    palavraNatural: set[parseInt(Math.random() * 225 + 1, 10)],
    palavraParseada: '',
  };
  objetoPalavra.palavraParseada = objetoPalavra.palavraNatural.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  return objetoPalavra;
}

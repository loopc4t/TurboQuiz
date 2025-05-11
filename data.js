const quizData = [
  {
    question: "Quem foi o primeiro imperador do Brasil?",
    options: [
      "Dom Pedro II",
      "Dom João VI",
      "Dom Pedro I",
      "Getúlio Vargas",
      "Juscelino Kubitschek",
    ],
    answer: "Dom Pedro I",
  },
  {
    question: "Em que ano o Brasil se tornou uma república?",
    options: ["1888", "1889", "1900", "1930", "1945"],
    answer: "1889",
  },
  {
    question: "Qual foi a principal luta durante a Inconfidência Mineira?",
    options: [
      "A luta contra os invasores espanhóis",
      "A luta pela independência do Brasil",
      "A luta pela abolição da escravatura",
      "A luta contra o domínio português",
      "A luta pela reforma agrária",
    ],
    answer: "A luta contra o domínio português",
  },
  {
    question: "Qual destes é um famoso cantor de samba?",
    options: [
      "Tom Jobim",
      "Chico Buarque",
      "Cazuza",
      "Zeca Pagodinho",
      "Sinhô",
    ],
    answer: "Zeca Pagodinho",
  },
  {
    question:
      "Qual foi o nome do primeiro álbum de Roberto Carlos, lançado em 1961?",
    options: [
      "Em Pleno Verão",
      "Louco Por Você",
      "Roberto Carlos",
      "Canta para a Juventude",
      "A Volta",
    ],
    answer: "Louco Por Você",
  },
  {
    question:
      "Quem foi o autor do livro 'Grande Sertão: Veredas', uma das obras mais importantes da literatura brasileira?",
    options: [
      "Clarice Lispector",
      "Carlos Drummond de Andrade",
      "Mário de Andrade",
      "Guimarães Rosa",
      "Machado de Assis",
    ],
    answer: "Guimarães Rosa",
  },
  {
    question:
      "Qual série juvenil brasileira, exibida nos anos 90, tinha personagens como Héricles (Dado), Duda e Isabella (Mocó)?",
    options: [
      "Os Normais",
      "Chaves",
      "Malhação",
      "Confissões de Adolescente",
      "Barriga de Aluguel",
    ],
    answer: "Malhação",
  },
  {
    question:
      "Quem foi o ator brasileiro que se tornou mundialmente conhecido por seu papel em 'O Auto da Compadecida'?",
    options: [
      "Wagner Moura",
      "Antônio Fagundes",
      "Lázaro Ramos",
      "Matheus Nachtergaele",
      "José Wilker",
    ],
    answer: "Matheus Nachtergaele",
  },
  {
    question:
      "Em qual cidade brasileira nasceu o cantor e compositor Gilberto Gil?",
    options: ["Salvador", "Recife", "Fortaleza", "São Paulo", "Rio de Janeiro"],
    answer: "Salvador",
  },
  {
    question:
      "Qual desses filmes brasileiros foi indicado ao Oscar de Melhor Filme Internacional em 1999?",
    options: [
      "Central do Brasil",
      "Cidade de Deus",
      "O Pagador de Promessas",
      "Que Horas Ela Volta?",
      "Tropa de Elite",
    ],
    answer: "Central do Brasil",
  },
  {
    question: "Quem foi o responsável pela abolição da escravatura no Brasil?",
    options: [
      "Dom Pedro II",
      "Juscelino Kubitschek",
      "Princesa Isabel",
      "Getúlio Vargas",
      "Zumbi dos Palmares",
    ],
    answer: "Princesa Isabel",
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    options: [
      "Deodoro da Fonseca",
      "Washington Luís",
      "Getúlio Vargas",
      "Juscelino Kubitschek",
      "Floriano Peixoto",
    ],
    answer: "Deodoro da Fonseca",
  },
  {
    question:
      "Em qual evento histórico a independência do Brasil foi proclamada?",
    options: [
      "Revolução Farroupilha",
      "Golpe da Maioridade",
      "Proclamação da República",
      "Dia do Fico",
      "Grito do Ipiranga",
    ],
    answer: "Grito do Ipiranga",
  },
  {
    question:
      "Qual famoso cantor brasileiro é conhecido como 'O Rei do Baião'?",
    options: [
      "Gilberto Gil",
      "Luiz Gonzaga",
      "Caetano Veloso",
      "Chico Buarque",
      "Roberto Carlos",
    ],
    answer: "Luiz Gonzaga",
  },
  {
    question:
      "Qual artista brasileiro ficou conhecido mundialmente por suas pinturas de figuras com grande distorção, como 'A Noiva'?",
    options: [
      "Tarsila do Amaral",
      "Candido Portinari",
      "Emiliano Di Cavalcanti",
      "Anita Malfatti",
      "Di Cavalcanti",
    ],
    answer: "Emiliano Di Cavalcanti",
  },
  {
    question:
      "Qual personagem interpretado por Will Smith no filme 'Homens de Preto' se tornou um ícone da cultura pop?",
    options: ["Agent J", "Agent K", "Captain America", "Neo", "Morpheus"],
    answer: "Agent J",
  },
  {
    question:
      "Qual banda britânica foi responsável pelo álbum icônico 'Sgt. Pepper's Lonely Hearts Club Band'?",
    options: [
      "The Rolling Stones",
      "The Beatles",
      "Pink Floyd",
      "Led Zeppelin",
      "The Who",
    ],
    answer: "The Beatles",
  },
  {
    question:
      "Qual famosa série de TV norte-americana se passa na cidade fictícia de 'Sunnydale'?",
    options: [
      "Friends",
      "The X-Files",
      "Buffy, A Caça-Vampiros",
      "The Office",
      "Breaking Bad",
    ],
    answer: "Buffy, A Caça-Vampiros",
  },
  {
    question:
      "Quem foi o diretor do aclamado filme brasileiro 'Cidade de Deus', de 2002?",
    options: [
      "Fernando Meirelles",
      "José Padilha",
      "Walter Salles",
      "Gustavo Pizzi",
      "Cláudio Assis",
    ],
    answer: "Fernando Meirelles",
  },
  {
    question:
      "Qual é o nome da famosa festa popular que ocorre em Salvador, Bahia, durante o mês de fevereiro?",
    options: [
      "Carnaval de Ouro",
      "Festa de São João",
      "Carnaval de Salvador",
      "Festa do Peão de Barretos",
      "Festival de Parintins",
    ],
    answer: "Carnaval de Salvador",
  },
  {
    question:
      "Qual é o nome do estilo musical brasileiro que mistura samba, jazz e bossa nova, e foi popularizado por artistas como João Gilberto e Stan Getz?",
    options: ["Sertanejo", "Axé", "MPB", "Bossa Nova", "Forró"],
    answer: "Bossa Nova",
  },
  {
    question:
      "Quem é o autor do livro 'O Primo Basílio', uma das maiores obras do realismo lusófono?",
    options: [
      "Machado de Assis",
      "Eça de Queirós",
      "Aluísio Azevedo",
      "Raul Pompeia",
      "Joaquim Maria Machado de Assis",
    ],
    answer: "Eça de Queirós",
  },
  {
    question:
      "Qual famoso escritor brasileiro é autor de 'Memórias Póstumas de Brás Cubas'?",
    options: [
      "Clarice Lispector",
      "Carlos Drummond de Andrade",
      "Machado de Assis",
      "Rubem Fonseca",
      "Mário de Andrade",
    ],
    answer: "Machado de Assis",
  },
  {
    question:
      "Qual famoso artista brasileiro é conhecido por suas esculturas barrocas, como 'Os Profetas', e considerado um mestre do barroco?",
    options: [
      "Cândido Portinari",
      "Tarsila do Amaral",
      "Vicente do Rego Monteiro",
      "Pedro Américo",
      "Aleijadinho",
    ],
    answer: "Aleijadinho",
  },
  {
    question:
      "Qual é o nome do grupo musical brasileiro de samba que ficou famoso nos anos 90 e é conhecido por músicas como 'Tempos Modernos' e 'Nosso Sonho'?",
    options: [
      "Raça Negra",
      "Sorriso Maroto",
      "Zeca Pagodinho",
      "Os Mutantes",
      "Exaltasamba",
    ],
    answer: "Exaltasamba",
  },
  {
    question:
      "Quem foi o cantor brasileiro que popularizou o gênero musical chamado 'forró' e é conhecido como o 'Rei do Forró'?",
    options: [
      "Luiz Gonzaga",
      "Chico Buarque",
      "Dominguinhos",
      "Fagner",
      "Zé Ramalho",
    ],
    answer: "Luiz Gonzaga",
  },
  {
    question:
      "Qual famoso arquétipo cultural brasileiro está associado a figuras folclóricas e heroicas, como o representado em histórias como 'Sítio do Picapau Amarelo'?",
    options: ["Jeca Tatu", "Zé Carioca", "Saci", "Lampião", "Matuto"],
    answer: "Saci",
  },
  {
    question:
      "Quem foi o engenheiro brasileiro que colaborou no projeto do 'Cristo Redentor' no Rio de Janeiro, com a escultura desenhada por Paul Landowski?",
    options: [
      "Tarsila do Amaral",
      "Heitor da Silva Costa",
      "Afonso Eduardo Reidy",
      "Carlos Drummond de Andrade",
      "Heitor Villa-Lobos",
    ],
    answer: "Heitor da Silva Costa",
  },
  {
    question:
      "Qual é o nome do movimento artístico brasileiro do qual Tarsila do Amaral foi uma das principais figuras, sendo uma das mais influentes?",
    options: [
      "Barroco Brasileiro",
      "Modernismo",
      "Realismo",
      "Impressionismo",
      "Expressionismo",
    ],
    answer: "Modernismo",
  },
  {
    question:
      "Em que ano ocorreu a queda do Muro de Berlim, que simbolizou o fim da Guerra Fria?",
    options: ["1989", "1991", "1975", "1985"],
    answer: "1989",
  },
  {
    question: "Quem foi o líder da Revolução Russa de 1917?",
    options: [
      "Joseph Stalin",
      "Vladimir Lenin",
      "Leon Trotsky",
      "Mikhail Gorbachev",
    ],
    answer: "Vladimir Lenin",
  },
  {
    question: "Em que ano começou a Primeira Guerra Mundial?",
    options: ["1912", "1914", "1920", "1939"],
    answer: "1914",
  },
  {
    question: "Qual evento deu início à Segunda Guerra Mundial?",
    options: [
      "A invasão da Polônia pela Alemanha",
      "O ataque a Pearl Harbor",
      "A assinatura do Tratado de Versalhes",
      "A queda de Paris",
    ],
    answer: "A invasão da Polônia pela Alemanha",
  },
  {
    question:
      "Quem foi o líder da Alemanha Nazista durante a Segunda Guerra Mundial?",
    options: [
      "Benito Mussolini",
      "Adolf Hitler",
      "Joseph Stalin",
      "Winston Churchill",
    ],
    answer: "Adolf Hitler",
  },
  {
    question: "Em que ano foi lançada a primeira bomba atômica em Hiroshima?",
    options: ["1943", "1945", "1950", "1941"],
    answer: "1945",
  },
  {
    question:
      "Em que ano aconteceu o atentado terrorista de 11 de setembro nos Estados Unidos?",
    options: ["2001", "1995", "1989", "2005"],
    answer: "2001",
  },
  {
    question: "Qual foi o nome da primeira missão tripulada que chegou à Lua?",
    options: ["Apollo 11", "Apollo 13", "Gemini 4", "Vostok 1"],
    answer: "Apollo 11",
  },
  {
    question:
      "Qual evento estabeleceu as bases para a divisão da Alemanha em zonas de ocupação após a Segunda Guerra Mundial?",
    options: [
      "A Conferência de Yalta",
      "A divisão de Berlim",
      "A Batalha de Stalingrado",
      "A Conferência de Potsdam",
    ],
    answer: "A Conferência de Yalta",
  },
  {
    question: "Em que ano foi fundada a Organização das Nações Unidas (ONU)?",
    options: ["1945", "1950", "1939", "1960"],
    answer: "1945",
  },
  {
    question: "Qual filme ganhou o Oscar de Melhor Filme em 2020?",
    options: [
      "Parasite",
      "1917",
      "Once Upon a Time in Hollywood",
      "The Irishman",
    ],
    answer: "Parasite",
  },
  {
    question: "Quem é o autor da famosa série de mangá 'One Piece'?",
    options: ["Masashi Kishimoto", "Eiichiro Oda", "Hiro Mashima", "Tite Kubo"],
    answer: "Eiichiro Oda",
  },
  {
    question:
      "Qual série de TV de fantasia, baseada nos livros de George R.R. Martin, foi um grande sucesso mundial?",
    options: [
      "Game of Thrones",
      "The Witcher",
      "Stranger Things",
      "The Mandalorian",
    ],
    answer: "Game of Thrones",
  },
  {
    question: "Qual artista pop lançou o álbum 'Future Nostalgia' em 2020?",
    options: ["Billie Eilish", "Dua Lipa", "Ariana Grande", "Lady Gaga"],
    answer: "Dua Lipa",
  },
  {
    question:
      "Quem cantou a música tema do filme 'Titanic' chamada 'My Heart Will Go On'?",
    options: ["Celine Dion", "Elton John", "Whitney Houston", "Adele"],
    answer: "Celine Dion",
  },
  {
    question:
      "Qual jogo da franquia 'The Legend of Zelda' foi lançado originalmente para o Nintendo 64 em 1998?",
    options: [
      "Ocarina of Time",
      "Breath of the Wild",
      "A Link to the Past",
      "Majora's Mask",
    ],
    answer: "Ocarina of Time",
  },
  {
    question:
      "Em qual série de TV o personagem principal, Walter White, assume uma nova identidade como Heisenberg?",
    options: ["Breaking Bad", "Narcos", "Better Call Saul", "Ozark"],
    answer: "Breaking Bad",
  },
  {
    question:
      "Quem é o cantor conhecido como o 'Rei do Pop', famoso por músicas como 'Thriller' e 'Billie Jean'?",
    options: ["Prince", "Michael Jackson", "Elvis Presley", "David Bowie"],
    answer: "Michael Jackson",
  },
  {
    question:
      "Qual filme de 1994, estrelado por Tom Hanks, apresenta o icônico personagem Forrest Gump?",
    options: [
      "Forrest Gump",
      "The Shawshank Redemption",
      "The Green Mile",
      "Cast Away",
    ],
    answer: "Forrest Gump",
  },
  {
    question:
      "Qual jogo de 1996, desenvolvido pela Nintendo, se tornou um clássico da plataforma e apresenta um encanador chamado Mario?",
    options: [
      "Super Mario 64",
      "Super Mario Bros.",
      "Donkey Kong",
      "The Legend of Zelda: Ocarina of Time",
    ],
    answer: "Super Mario 64",
  },
  {
    question:
      "Quem interpretou o personagem 'Iron Man' (Homem de Ferro) no Universo Cinematográfico Marvel?",
    options: [
      "Chris Hemsworth",
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
    ],
    answer: "Robert Downey Jr.",
  },
  {
    question: "Qual música de Nirvana se tornou um hino do grunge nos anos 90?",
    options: [
      "Smells Like Teen Spirit",
      "Come As You Are",
      "Heart-Shaped Box",
      "Lithium",
    ],
    answer: "Smells Like Teen Spirit",
  },
  {
    question:
      "Em qual filme de 1985, Michael J. Fox interpreta Marty McFly, um adolescente que viaja no tempo?",
    options: [
      "Back to the Future",
      "The Terminator",
      "Ghostbusters",
      "E.T. the Extra-Terrestrial",
    ],
    answer: "Back to the Future",
  },
  {
    question: "Qual cantor famoso lançou o álbum 'Lover' em 2019?",
    options: ["Ariana Grande", "Billie Eilish", "Taylor Swift", "Ed Sheeran"],
    answer: "Taylor Swift",
  },
  {
    question:
      "Qual é o nome do universo compartilhado de filmes da Marvel, que inclui heróis como Homem de Ferro e Capitão América?",
    options: [
      "DC Extended Universe",
      "Marvel Cinematic Universe",
      "X-Men Universe",
      "Spider-Verse",
    ],
    answer: "Marvel Cinematic Universe",
  },
  {
    question:
      "Quem é o autor da famosa série de mangá 'Attack on Titan' (Shingeki no Kyojin)?",
    options: [
      "Masashi Kishimoto",
      "Hajime Isayama",
      "Eiichiro Oda",
      "Tite Kubo",
    ],
    answer: "Hajime Isayama",
  },
  {
    question:
      "Qual jogo popular da franquia 'Pokémon' foi lançado para o Nintendo Switch em 2019?",
    options: [
      "Pokémon Sword and Shield",
      "Pokémon Sun and Moon",
      "Pokémon Go",
      "Pokémon Let's Go Pikachu and Eevee",
    ],
    answer: "Pokémon Sword and Shield",
  },
  {
    question:
      "Qual filme de 2019, dirigido por Quentin Tarantino, se passa em Hollywood nos anos 60 e apresenta Leonardo DiCaprio e Brad Pitt?",
    options: [
      "Once Upon a Time in Hollywood",
      "Inglourious Basterds",
      "The Hateful Eight",
      "Django Unchained",
    ],
    answer: "Once Upon a Time in Hollywood",
  },
  {
    question: "Qual é o nome do protagonista do jogo 'The Legend of Zelda'?",
    options: ["Zelda", "Ganondorf", "Link", "Ganon"],
    answer: "Link",
  },
  {
    question:
      "Quem dirigiu o clássico filme 'Casablanca' de 1942, estrelado por Humphrey Bogart e Ingrid Bergman?",
    options: [
      "Alfred Hitchcock",
      "Orson Welles",
      "Michael Curtiz",
      "Billy Wilder",
    ],
    answer: "Michael Curtiz",
  },
  {
    question:
      "Qual foi o primeiro longa-metragem de animação da história do cinema, lançado em 1937 pela Disney?",
    options: [
      "Cinderela",
      "Branca de Neve e os Sete Anões",
      "Fantasia",
      "A Bela Adormecida",
    ],
    answer: "Branca de Neve e os Sete Anões",
  },
  {
    question:
      "Em que ano foi lançada a primeira animação do personagem Mickey Mouse, 'Steamboat Willie'?",
    options: ["1928", "1930", "1932", "1925"],
    answer: "1928",
  },
  {
    question:
      "Quem é o criador do famoso estúdio de animação japonês Studio Ghibli?",
    options: [
      "Isao Takahata",
      "Hayao Miyazaki",
      "Yoshifumi Kondo",
      "Mamoru Hosoda",
    ],
    answer: "Hayao Miyazaki",
  },
  {
    question:
      "Em qual filme de animação japonês de 1988, dirigido por Hayao Miyazaki, aparece um espírito chamado Totoro?",
    options: [
      "A Viagem de Chihiro",
      "O Castelo Animado",
      "Meu Amigo Totoro",
      "Ponyo - Uma Amizade que Veio do Mar",
    ],
    answer: "Meu Amigo Totoro",
  },
  {
    question:
      "Qual o nome do primeiro filme de animação da Disney que foi indicado ao Oscar de Melhor Filme?",
    options: [
      "Cinderela",
      "A Bela e a Fera",
      "O Rei Leão",
      "Branca de Neve e os Sete Anões",
    ],
    answer: "A Bela e a Fera",
  },
  {
    question:
      "Qual é o nome do famoso festival de cinema realizado em Cannes, na França, onde o prêmio principal é a Palma de Ouro?",
    options: [
      "Festival de Veneza",
      "Festival de Sundance",
      "Festival de Cannes",
      "Festival de Berlim",
    ],
    answer: "Festival de Cannes",
  },
  {
    question:
      "Em 1954, qual filme japonês dirigido por Akira Kurosawa se tornou um dos maiores clássicos do cinema mundial?",
    options: ["Rashomon", "Os Sete Samurais", "A Fortaleza Escondida", "Ran"],
    answer: "Os Sete Samurais",
  },
  {
    question:
      "Qual famoso cineasta é conhecido por sua técnica de 'longas tomadas' e foi responsável por filmes como 'Cidadão Kane' e 'A Trilha do Terror'?",
    options: [
      "Stanley Kubrick",
      "Orson Welles",
      "Francis Ford Coppola",
      "Martin Scorsese",
    ],
    answer: "Orson Welles",
  },
  {
    question: "O que significa o termo 'mangá' na cultura japonesa?",
    options: [
      "Histórias em quadrinhos japonesas",
      "Desenhos animados feitos no Japão",
      "Filmes de animação",
      "Livros ilustrados para crianças",
    ],
    answer: "Histórias em quadrinhos japonesas",
  },
  {
    question:
      "Qual é o nome do bar frequentado por Homer Simpson na série 'Os Simpsons'?",
    options: ["Bar do Moe", "Bar do Joe", "Taverna do Homer", "Bar do Barney"],
    answer: "Bar do Moe",
  },
  {
    question:
      "Qual é o país com o maior número de fusos horários, considerando seus territórios ultramarinos?",
    options: ["Estados Unidos", "Rússia", "França", "China"],
    answer: "França",
  },
  {
    question: "Qual é a moeda oficial do Japão?",
    options: ["Won", "Yen", "Renminbi", "Ringgit"],
    answer: "Yen",
  },
  {
    question:
      "Qual empresa é conhecida por criar o sistema operacional Windows?",
    options: ["Apple", "IBM", "Microsoft", "Google"],
    answer: "Microsoft",
  },
  {
    question: "Qual cidade sediou os Jogos Olímpicos de Verão de 2016?",
    options: ["Pequim", "Tóquio", "Rio de Janeiro", "Londres"],
    answer: "Rio de Janeiro",
  },
  {
    question:
      "Em que esporte o brasileiro Guga Kuerten se destacou internacionalmente?",
    options: ["Tênis", "Vôlei", "Basquete", "Futebol"],
    answer: "Tênis",
  },
  {
    question: "Qual é a capital da Austrália?",
    options: ["Sydney", "Melbourne", "Perth", "Canberra"],
    answer: "Canberra",
  },
  {
    question: "Qual é a moeda utilizada no Reino Unido?",
    options: ["Euro", "Franco", "Libra esterlina", "Dólar"],
    answer: "Libra esterlina",
  },
  {
    question:
      "Qual gigante da tecnologia foi fundada por Steve Jobs, Steve Wozniak e Ronald Wayne?",
    options: ["Apple", "Microsoft", "Dell", "Amazon"],
    answer: "Apple",
  },
  {
    question:
      "Quantos jogadores cada time tem em campo em uma partida oficial de futebol?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    question:
      "Qual é o nome da cidade onde vivem os personagens de 'Os Simpsons'?",
    options: ["Shelbyville", "Springfield", "Quahog", "South Park"],
    answer: "Springfield",
  },
  {
    question: "Qual é o rio mais extenso do mundo?",
    options: ["Nilo", "Amazonas", "Yangtzé", "Mississipi"],
    answer: "Amazonas",
  },
  {
    question: "Qual é a moeda oficial usada na Suíça?",
    options: ["Euro", "Franco suíço", "Coroa", "Marco"],
    answer: "Franco suíço",
  },
  {
    question: "Qual empresa é dona das marcas Instagram e WhatsApp?",
    options: ["Google", "Amazon", "Meta (Facebook)", "Apple"],
    answer: "Meta (Facebook)",
  },
  {
    question: "Quem é o maior medalhista olímpico da história?",
    options: ["Usain Bolt", "Michael Phelps", "Larisa Latynina", "Mark Spitz"],
    answer: "Michael Phelps",
  },
  {
    question: "Em qual esporte se destaca o time Golden State Warriors?",
    options: ["Beisebol", "Basquete", "Futebol Americano", "Hóquei"],
    answer: "Basquete",
  },
  {
    question: "Qual é o continente com o maior número de países?",
    options: ["África", "Ásia", "Europa", "América do Sul"],
    answer: "África",
  },
  {
    question: "Qual desses personagens NÃO faz parte da família Simpson?",
    options: ["Maggie", "Lisa", "Ralph", "Bart"],
    answer: "Ralph",
  },
  {
    question: "Qual é a moeda oficial usada na África do Sul?",
    options: ["Rand", "Shilling", "Dólar sul-africano", "Peso"],
    answer: "Rand",
  },
  {
    question: "Qual empresa é famosa pelo slogan 'Just Do It'?",
    options: ["Nike", "Adidas", "Puma", "Reebok"],
    answer: "Nike",
  },
  {
    question: "Qual é a menor unidade funcional da vida?",
    options: ["Molécula", "Célula", "Tecido", "Átomo"],
    answer: "Célula",
  },
  {
    question:
      "Qual planeta do sistema solar é conhecido como o 'Planeta Vermelho'?",
    options: ["Júpiter", "Vênus", "Marte", "Saturno"],
    answer: "Marte",
  },
  {
    question: "Qual cientista desenvolveu a teoria da relatividade?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Stephen Hawking",
      "Marie Curie",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Qual é o elemento químico com o símbolo 'O'?",
    options: ["Ouro", "Oxigênio", "Ósmio", "Ozônio"],
    answer: "Oxigênio",
  },
  {
    question: "Qual é a principal fonte de energia para a Terra?",
    options: ["Eletricidade", "Fóssil", "Sol", "Água"],
    answer: "Sol",
  },
  {
    question: "Quantos cromossomos tem um ser humano saudável?",
    options: ["42", "44", "46", "48"],
    answer: "46",
  },
  {
    question: "Qual é o maior órgão do corpo humano?",
    options: ["Fígado", "Pulmão", "Cérebro", "Pele"],
    answer: "Pele",
  },
  {
    question: "O que mede um sismógrafo?",
    options: ["Temperatura", "Ventos", "Radiação", "Terremotos"],
    answer: "Terremotos",
  },
  {
    question: "Qual gás é mais abundante na atmosfera da Terra?",
    options: ["Oxigênio", "Gás carbônico", "Hidrogênio", "Nitrogênio"],
    answer: "Nitrogênio",
  },
  {
    question: "Que tipo de sangue é considerado doador universal?",
    options: ["A+", "O+", "B-", "O-"],
    answer: "O-",
  },
  {
    question: "Quem é o encanador famoso dos jogos da Nintendo?",
    options: ["Luigi", "Yoshi", "Mario", "Bowser", "Toad"],
    answer: "Mario",
  },
  {
    question:
      "Qual o nome do anime em que o protagonista quer se tornar o Hokage?",
    options: [
      "Dragon Ball",
      "Naruto",
      "Bleach",
      "One Piece",
      "Attack on Titan",
    ],
    answer: "Naruto",
  },
  {
    question: "Qual super-herói da Marvel é conhecido como 'Homem-Aranha'?",
    options: [
      "Clark Kent",
      "Bruce Wayne",
      "Tony Stark",
      "Peter Parker",
      "Steve Rogers",
    ],
    answer: "Peter Parker",
  },
  {
    question:
      "Em que console foi lançado o jogo 'The Legend of Zelda: Ocarina of Time'?",
    options: [
      "Super Nintendo",
      "Nintendo 64",
      "Nintendo DS",
      "GameCube",
      "PlayStation",
    ],
    answer: "Nintendo 64",
  },
  {
    question: "Qual o nome do anime onde os personagens lutam com 'Bankai'?",
    options: [
      "One Piece",
      "Bleach",
      "Naruto",
      "Dragon Ball Z",
      "My Hero Academia",
    ],
    answer: "Bleach",
  },
  {
    question: "Qual personagem de 'Chaves' está sempre com um pirulito na mão?",
    options: ["Seu Madruga", "Chiquinha", "Chaves", "Quico", "Nhonho"],
    answer: "Nhonho",
  },
  {
    question: "Quem é o vilão principal em 'Avengers: Infinity War'?",
    options: ["Ultron", "Loki", "Red Skull", "Thanos", "Galactus"],
    answer: "Thanos",
  },
  {
    question: "Em 'Dragon Ball Z', quem é o pai do Gohan?",
    options: ["Vegeta", "Goku", "Piccolo", "Yamcha", "Kuririn"],
    answer: "Goku",
  },
  {
    question:
      "Qual personagem do 'Chaves' costuma dizer 'Não se misture com essa gentalha!'?",
    options: [
      "Dona Clotilde",
      "Chiquinha",
      "Dona Florinda",
      "Seu Barriga",
      "Professor Girafales",
    ],
    answer: "Dona Florinda",
  },
  {
    question:
      "Qual dos seguintes foi um dos principais rivais do PlayStation 2 na mesma geração?",
    options: ["Wii", "Xbox 360", "GameCube", "Dreamcast", "Xbox"],
    answer: "Xbox",
  },
  {
    question: "Qual o nome da nave principal em Star Trek: A Série Original?",
    options: ["Voyager", "Enterprise", "Discovery", "Galactica", "Defiant"],
    answer: "Enterprise",
  },
  {
    question: "Quem é o capitão da Enterprise na série clássica de Star Trek?",
    options: [
      "Jean-Luc Picard",
      "Spock",
      "James T. Kirk",
      "Jonathan Archer",
      "Hikaru Sulu",
    ],
    answer: "James T. Kirk",
  },
  {
    question: "Qual é a raça alienígena conhecida por sua lógica em Star Trek?",
    options: ["Klingon", "Romulano", "Borg", "Vulcano", "Cardassiano"],
    answer: "Vulcano",
  },
  {
    question: "Quem criou a Turma da Mônica?",
    options: [
      "Ziraldo",
      "Henfil",
      "Mauricio de Sousa",
      "Laerte",
      "Millôr Fernandes",
    ],
    answer: "Mauricio de Sousa",
  },
  {
    question:
      "Qual personagem da Turma da Mônica é conhecido por ser sujo e gostar de porquinhos?",
    options: ["Franjinha", "Cascão", "Cebolinha", "Chico Bento", "Do Contra"],
    answer: "Cascão",
  },
  {
    question: "Qual personagem da Turma da Mônica troca o R pelo L?",
    options: ["Mônica", "Magali", "Anjinho", "Cebolinha", "Nimbus"],
    answer: "Cebolinha",
  },
  {
    question: "Qual é a principal característica da Mônica nos quadrinhos?",
    options: [
      "É muito gulosa",
      "Corre muito rápido",
      "Tem força e bate com o Sansão",
      "Faz mágicas",
      "É nerd e usa óculos",
    ],
    answer: "Tem força e bate com o Sansão",
  },
  {
    question: "Ziraldo é o criador de qual famoso personagem infantil?",
    options: [
      "Menino Maluquinho",
      "Chico Bento",
      "Jotalhão",
      "Bidu",
      "Horácio",
    ],
    answer: "Menino Maluquinho",
  },
  {
    question:
      "Qual cartunista brasileiro é conhecido por seu trabalho com temas políticos e também é mulher trans?",
    options: ["Ziraldo", "Henfil", "Angeli", "Laerte", "Glauco"],
    answer: "Laerte",
  },
  {
    question: "Qual série de Star Trek apresenta o Capitão Jean-Luc Picard?",
    options: [
      "Star Trek: A Série Original",
      "Star Trek: Voyager",
      "Star Trek: Deep Space Nine",
      "Star Trek: Enterprise",
      "Star Trek: A Nova Geração",
    ],
    answer: "Star Trek: A Nova Geração",
  },
];

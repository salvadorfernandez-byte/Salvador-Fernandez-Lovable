export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  // Introducció a la programació
  {
    id: 1,
    category: "Introducció a la programació",
    question: "Quins 3 tipus d'operacions pot realitzar un ordinador?",
    options: [
      "Operacions aritmètiques, lògiques i d'emmagatzematge",
      "Operacions gràfiques, textuals i numèriques",
      "Operacions de xarxa, disc i memòria",
      "Operacions de compilació, execució i depuració"
    ],
    correctAnswer: 0,
    explanation: "Un ordinador pot realitzar operacions aritmètiques bàsiques, operacions de tipus lògic (comparar dos valors) i emmagatzematge i recuperació d'informació."
  },
  
  // Programes i algorismes
  {
    id: 2,
    category: "Programes i algorismes",
    question: "Què és un algorisme?",
    options: [
      "Un programa escrit en llenguatge màquina",
      "La descripció exacta de la seqüència de passos per resoldre un problema",
      "Un llenguatge de programació d'alt nivell",
      "Un dispositiu d'emmagatzematge de dades"
    ],
    correctAnswer: 1,
    explanation: "Un algorisme és la descripció exacta i sense ambigüitats de la seqüència de passos elementals a aplicar per obtenir la solució a un problema determinat."
  },
  
  {
    id: 3,
    category: "Programes i algorismes",
    question: "Quin és el flux bàsic d'un programa?",
    options: [
      "Compilació - Execució - Sortida",
      "Entrada de dades - Processament - Sortida de dades",
      "Anàlisi - Disseny - Implementació",
      "Inici - Decisió - Fi"
    ],
    correctAnswer: 1,
    explanation: "El flux bàsic d'un programa segueix el patró: Entrada de dades → Processament → Sortida de dades."
  },
  
  // Llenguatges de baix nivell
  {
    id: 4,
    category: "Llenguatges de programació",
    question: "De què està format el codi màquina?",
    options: [
      "Paraules nemotècniques",
      "Instruccions en anglès",
      "Codi binari (uns i zeros)",
      "Codi hexadecimal"
    ],
    correctAnswer: 2,
    explanation: "El codi màquina està format únicament per uns i zeros (codi binari), que és l'únic llenguatge que entén directament el microprocessador."
  },
  
  // Llenguatges de nivell intermig
  {
    id: 5,
    category: "Llenguatges de programació",
    question: "Quin llenguatge utilitza paraules nemotècniques com MOV A, B?",
    options: [
      "Llenguatge màquina",
      "Llenguatge d'alt nivell",
      "Llenguatge assemblador",
      "Pseudocodi"
    ],
    correctAnswer: 2,
    explanation: "El llenguatge assemblador utilitza paraules nemotècniques (paraules abreujades de l'anglès) en lloc de cadenes de bits."
  },
  
  {
    id: 6,
    category: "Llenguatges de programació",
    question: "El llenguatge assemblador manipula directament:",
    options: [
      "Variables del programa",
      "Registres del processador i posicions de memòria",
      "Fitxers del sistema operatiu",
      "Llibreries externes"
    ],
    correctAnswer: 1,
    explanation: "La programació en assemblador requereix coneixement sobre la constitució de l'ordinador, ja que maneja directament posicions de memòria, registres del processador i altres elements físics."
  },
  
  // Llenguatges d'alt nivell
  {
    id: 7,
    category: "Llenguatges de programació",
    question: "Quin avantatge tenen els llenguatges d'alt nivell?",
    options: [
      "Són més ràpids d'executar",
      "No necessiten ser traduïts",
      "Són fàcils d'entendre i són portables entre ordinadors",
      "Ocupen menys memòria"
    ],
    correctAnswer: 2,
    explanation: "Els llenguatges d'alt nivell utilitzen ordres fàcils d'entendre i no hi ha incompatibilitats entre microprocessadors, pel que un programa pot ser utilitzat en diferents ordinadors."
  },
  
  {
    id: 8,
    category: "Llenguatges de programació",
    question: "Quin llenguatge és conegut per la seva llegibilitat i filosofia de disseny?",
    options: [
      "C",
      "Java",
      "Python",
      "PHP"
    ],
    correctAnswer: 2,
    explanation: "Python va ser creat l'any 1991 i la seva filosofia de disseny busca llegibilitat en el codi i permet expressar conceptes en menys línies de codi."
  },
  
  // Assembladors i compiladors
  {
    id: 9,
    category: "Assembladors i intèrprets",
    question: "Què fa un compilador?",
    options: [
      "Executa el programa directament",
      "Tradueix el codi font a codi executable",
      "Depura errors del programa",
      "Optimitza la memòria RAM"
    ],
    correctAnswer: 1,
    explanation: "Un compilador tradueix el codi font escrit en un llenguatge d'alt nivell a codi executable per l'ordinador, normalment codi màquina."
  },
  
  {
    id: 10,
    category: "Assembladors i intèrprets",
    question: "Quina és la diferència principal entre un compilador i un intèrpret?",
    options: [
      "El compilador és més ràpid",
      "El compilador genera un fitxer de codi objecte, l'intèrpret no genera cap fitxer intermig",
      "L'intèrpret només funciona amb Java",
      "El compilador només funciona amb C"
    ],
    correctAnswer: 1,
    explanation: "Un compilador genera un fitxer de codi objecte com a pas intermig, mentre que l'intèrpret tradueix i executa directament instrucció per instrucció sense generar fitxers intermedis."
  },
  
  {
    id: 11,
    category: "Assembladors i intèrprets",
    question: "Què fa un linkador o muntador?",
    options: [
      "Compila el codi font",
      "Interpreta les instruccions",
      "Combina el codi objecte amb llibreries externes per crear un executable",
      "Depura errors de sintaxi"
    ],
    correctAnswer: 2,
    explanation: "Un linkador té com a missió resoldre els direccionaments del codi objecte a les llibreries externes i combinar-los en un executable."
  },
  
  // Fases de desenvolupament
  {
    id: 12,
    category: "Fases de desenvolupament",
    question: "En quina fase s'estableix QUÈ ha de fer el programa (no com)?",
    options: [
      "Disseny",
      "Anàlisi",
      "Implementació",
      "Documentació"
    ],
    correctAnswer: 1,
    explanation: "Durant la fase d'anàlisi, l'analista funcional estableix què ha de fer el programari, no com ho ha de fer."
  },
  
  {
    id: 13,
    category: "Fases de desenvolupament",
    question: "Quins elements s'utilitzen durant la fase de disseny per expressar algorismes?",
    options: [
      "Només codi font",
      "Diagrames de flux i pseudocodi",
      "Només diagrames UML",
      "Variables i funcions"
    ],
    correctAnswer: 1,
    explanation: "Durant la fase de disseny, l'analista orgànic utilitza diagrames de flux i pseudocodi per expressar els algorismes."
  },
  
  {
    id: 14,
    category: "Fases de desenvolupament",
    question: "La fase de documentació:",
    options: [
      "És l'última fase del desenvolupament",
      "Només es fa al final del projecte",
      "S'integra amb totes les altres fases",
      "Només la fa el programador"
    ],
    correctAnswer: 2,
    explanation: "La documentació no és una fase independent, sinó que s'integra amb totes les altres fases. S'han de documentar tots els passos i accions realitzades."
  },
  
  // Dades i variables
  {
    id: 15,
    category: "Dades i variables",
    question: "Què és una variable?",
    options: [
      "Un tipus de dada utilitzat en un programa",
      "Una zona de memòria amb un nom que emmagatzema una dada",
      "Una instrucció de control",
      "Un mecanisme per crear algorismes"
    ],
    correctAnswer: 1,
    explanation: "Una variable és una zona de memòria a la que se li assigna un nom o identificador, on es desa una dada d'un determinat tipus."
  },
  
  {
    id: 16,
    category: "Dades i variables",
    question: "Què significa declarar una variable?",
    options: [
      "Assignar-li un valor inicial",
      "Indicar al compilador que volem utilitzar-la per reservar espai en memòria",
      "Esborrar el seu contingut",
      "Convertir-la a un altre tipus"
    ],
    correctAnswer: 1,
    explanation: "Declarar una variable és indicar al compilador que volem utilitzar-la, perquè aquest pugui reservar l'espai en memòria necessari."
  },
  
  // Diagrames de flux
  {
    id: 17,
    category: "Diagrames de flux",
    question: "Quin símbol s'utilitza per representar una operació de procés en un diagrama de flux?",
    options: [
      "Rombe",
      "Rectangle",
      "Paral·lelogram",
      "Cercle"
    ],
    correctAnswer: 1,
    explanation: "El símbol de procés és un rectangle i s'utilitza per especificar operacions com càlculs aritmètics o assignacions."
  },
  
  {
    id: 18,
    category: "Diagrames de flux",
    question: "Quin símbol representa una decisió en un ordinograma?",
    options: [
      "Rectangle",
      "Paral·lelogram",
      "Rombe",
      "Oval"
    ],
    correctAnswer: 2,
    explanation: "El rombe representa una operació de decisió que pot alterar el flux d'execució. El resultat és sempre cert/fals (SÍ/NO)."
  },
  
  {
    id: 19,
    category: "Diagrames de flux",
    question: "El símbol paral·lelogram en un diagrama de flux representa:",
    options: [
      "Una decisió",
      "Operacions d'entrada i sortida de dades",
      "Un procés aritmètic",
      "L'inici del programa"
    ],
    correctAnswer: 1,
    explanation: "El paral·lelogram especifica operacions d'entrada o sortida de dades, com llegir dades del teclat o mostrar resultats."
  },
  
  // Casos pràctics
  {
    id: 20,
    category: "Casos pràctics",
    question: "En un programa amb una variable 'intents' que emmagatzema els intents disponibles, quina instrucció correcta treu un intent?",
    options: [
      "intents = -1",
      "intents = -intents",
      "intents - 1",
      "intents = intents - 1"
    ],
    correctAnswer: 3,
    explanation: "L'operació correcta és 'intents = intents - 1', que resta 1 al valor actual de la variable i l'assigna de nou a 'intents'."
  }
];

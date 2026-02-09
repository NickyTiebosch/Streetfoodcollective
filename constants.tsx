import { Concept, NavItem } from './types';

export const CONCEPTS: Concept[] = [
  {
    id: 'lil-smash',
    name: 'LIL SMASH BURGER',
    heroTitle: 'Smaak zonder omwegen.',
    tagline: 'Sla die honger knock-out. Geen genade, alleen pure smash.',
    description: 'De ultieme burger-ervaring. Onze smash burgers zijn sappig, vers en bereid volgens authentiek recept. Rauw, eerlijk en verslavend lekker.',
    longDescription: [
      'Lil Smash Burger is de belichaming van wat streetfood moet zijn: direct, eerlijk en onweerstaanbaar. We gebruiken geen geheime ingrediënten, maar een techniek die we tot in de puntjes beheersen.',
      'Het geheim zit in de smash. Door vers, kwalitatief rundvlees op een gloeiend hete plaat plat te drukken, ontstaat de Maillard-reactie. Dit zorgt for die onmiskenbare krokante randjes en een explosie van smaak, terwijl de kern van de burger sappig blijft.',
      'Geen pretenties, geen onnodige franje. Lil Smash staat voor de perfecte balans tussen een zachte brioche, gesmolten cheddar en de beste burgers die je ooit vanuit een truck hebt geproefd.'
    ],
    cardImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop',
    heroImage: 'https://i.imgur.com/OazXGLC.png',
    menuItems: ['The Classic Smash', 'Truffle & Onion Smash', 'Spicy Jalapeño Smash', 'Loaded Fries']
  },
  {
    id: 'tia-juana',
    name: 'TIA JUANA',
    tagline: 'PURA VIDA',
    description: 'Authentieke Mexicaanse streetfood welke je meeneemt naar de straten van Tijuana. Vers gemaakte taco\'s en quesadilla\'s boordevol smaak.',
    longDescription: [
      'Tia Juana brengt de levendige straten van Mexico naar jouw evenement. Onze focus ligt op puurheid: handgemaakte tortilla\'s, vers bereide salsa\'s en vlees dat urenlang heeft gesudderd in authentieke specerijen.',
      'Van de rokerige smaak van Tacos al Pastor tot de romige perfectie van onze quesadilla\'s, elke hap is een eerbetoon aan de Mexicaanse culinaire traditie.'
    ],
    cardImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop',
    heroImage: 'https://i.imgur.com/gehxQQ3.png',
    menuItems: ['Taco al Pastor', 'Carnitas Tacos', 'Gourmet Quesadillas', 'Hand-mashed Guacamole']
  },
  {
    id: 'tapas-y-mas',
    name: 'TAPAS Y MAS',
    tagline: 'De zon op je bord, SANGRIA, TAPAS Y MAS MAS MAS.',
    description: 'De zon op je bord. Wij serveren authentieke Spaanse tapas met een moderne twist. Ideaal voor borrels en informele diners.',
    longDescription: [
      'Tapas y Mas staat voor de Spaanse kunst van het delen. Onze selectie van kleine gerechten is met zorg samengesteld om een breed palet aan smaken te bieden.',
      'Wij gebruiken alleen de beste Spaanse olijfolie, gerookte pimentón en verse kruiden om die onmiskenbare Mediterrane vibe te creëren. Een paella voor 50 personen? Geen probleem!'
    ],
    cardImage: 'https://i.imgur.com/cmn75kF.png',
    heroImage: 'https://i.imgur.com/l6zApnf.png',
    menuItems: ['Patatas Bravas', 'Pimientos de Padrón', 'Lomo al Ajillo', 'Albondigas caseras']
  },
  {
    id: 'sate-sambal',
    name: 'Saté & Sambal',
    tagline: 'Houtskool, rook en een sambal die je direct wakker schudt.',
    description: 'Bereid boven echt houtskool voor die onmiskenbare rooksmaak. Onze Indonesische klassiekers worden geserveerd met liefde en de beste sambals.',
    cardImage: 'https://i.imgur.com/nR9dbfA.png',
    heroImage: 'https://i.imgur.com/qctfOSz.png',
    menuItems: ['Saté Ayam', 'Saté Babi', 'Gado Gado Rolls', 'Nasi Goreng Specials']
  },
  {
    id: 'pasta-republic',
    name: 'Pasta Republic',
    tagline: 'Verse pasta die spreekt, saus die je stil krijgt.',
    description: 'De smaak van Italië op elke gewenste locatie. Dagvers bereide pasta\'s met rijke sauzen en kwalitatieve ingrediënten.',
    cardImage: 'https://i.imgur.com/HdAwvYy.png',
    heroImage: 'https://i.imgur.com/2kUnwnr.png',
    menuItems: ['Truffle Tagliatelle', 'Slow-cooked Bolognese', 'Pasta Pesto', 'Creamy Carbonara']
  },
  {
    id: 'ballenbar',
    name: 'De Ballenbar',
    tagline: 'Culinaire kogels voor de fijnproever met haren op de borst.',
    description: 'De klassieke gehaktbal, maar dan op culinair niveau. Verschillende vullingen bereid door topchefs voor een verrassende twist.',
    cardImage: 'https://i.imgur.com/YYhlWCp.png',
    heroImage: 'https://i.imgur.com/D90tKtc.png',
    menuItems: ['The Original', 'Broodje Bali Bal', 'Italian Meatball', 'Truffalo Chicken Meatball']
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Over Ons', path: '/over-ons' },
  { 
    label: 'Foodtrucks', 
    path: '/foodtrucks',
    subItems: CONCEPTS.map(concept => ({
      label: concept.name,
      path: `/foodtrucks/${concept.id}`
    }))
  },
  { label: 'Experience', path: '/experience' },
  { label: 'Partner Worden', path: '/partners' },
  { label: 'Contact', path: '/contact' },
];
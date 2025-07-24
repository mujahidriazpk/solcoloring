export interface Category {
  id: string;
  name: string;
  icon: string;
  description?: string;
  subcategories?: Category[];
}

export const categories: Category[] = [
  {
    id: 'animals',
    name: 'Animals',
    icon: '🦁',
    description: 'Explore a diverse world of animals from wild beasts to beloved pets',
    subcategories: [
      {
        id: 'wild-animals',
        name: 'Wild Animals',
        icon: '🐯',
        subcategories: [
          { id: 'lions', name: 'Lions', icon: '🦁' },
          { id: 'tigers', name: 'Tigers', icon: '🐯' },
          { id: 'elephants', name: 'Elephants', icon: '🐘' },
          { id: 'giraffes', name: 'Giraffes', icon: '🦒' },
        ],
      },
      {
        id: 'domestic-animals',
        name: 'Domestic Animals',
        icon: '🐕',
        subcategories: [
          { id: 'dogs', name: 'Dogs', icon: '🐕' },
          { id: 'cats', name: 'Cats', icon: '🐱' },
          { id: 'rabbits', name: 'Rabbits', icon: '🐰' },
          { id: 'hamsters', name: 'Hamsters', icon: '🐹' },
        ],
      },
      {
        id: 'aquatic-animals',
        name: 'Aquatic Animals',
        icon: '🐬',
        subcategories: [
          { id: 'dolphins', name: 'Dolphins', icon: '🐬' },
          { id: 'sharks', name: 'Sharks', icon: '🦈' },
          { id: 'whales', name: 'Whales', icon: '🐋' },
          { id: 'sea-turtles', name: 'Sea Turtles', icon: '🐢' },
        ],
      },
      {
        id: 'insects',
        name: 'Insects',
        icon: '🦋',
        subcategories: [
          { id: 'butterflies', name: 'Butterflies', icon: '🦋' },
          { id: 'bees', name: 'Bees', icon: '🐝' },
          { id: 'ladybugs', name: 'Ladybugs', icon: '🐞' },
          { id: 'dragonflies', name: 'Dragonflies', icon: '🦗' },
        ],
      },
      {
        id: 'fantasy-animals',
        name: 'Fantasy Animals',
        icon: '🦄',
        subcategories: [
          { id: 'unicorns', name: 'Unicorns', icon: '🦄' },
          { id: 'dragons', name: 'Dragons', icon: '🐲' },
          { id: 'phoenix', name: 'Phoenix', icon: '🔥' },
        ],
      },
    ],
  },
  {
    id: 'cars',
    name: 'Cars',
    icon: '🚗',
    description: 'Discover amazing vehicles from classic beauties to modern supercars',
    subcategories: [
      {
        id: 'sports-cars',
        name: 'Sports Cars',
        icon: '🏎️',
        subcategories: [
          { id: 'ferrari', name: 'Ferrari', icon: '🏎️' },
          { id: 'lamborghini', name: 'Lamborghini', icon: '🏎️' },
          { id: 'porsche', name: 'Porsche', icon: '🏎️' },
        ],
      },
      {
        id: 'classic-cars',
        name: 'Classic Cars',
        icon: '🚗',
        subcategories: [
          { id: 'vintage-ford', name: 'Vintage Ford', icon: '🚗' },
          { id: 'chevy-bel-air', name: 'Chevy Bel Air', icon: '🚗' },
          { id: 'volkswagen-beetle', name: 'Volkswagen Beetle', icon: '🚙' },
        ],
      },
      {
        id: 'off-road-suvs',
        name: 'Off-Road & SUVs',
        icon: '🚙',
        subcategories: [
          { id: 'jeep', name: 'Jeep', icon: '🚙' },
          { id: 'land-rover', name: 'Land Rover', icon: '🚙' },
          { id: 'toyota-land-cruiser', name: 'Toyota Land Cruiser', icon: '🚙' },
        ],
      },
      {
        id: 'electric-cars',
        name: 'Electric Cars',
        icon: '⚡',
        subcategories: [
          { id: 'tesla', name: 'Tesla', icon: '⚡' },
          { id: 'nissan-leaf', name: 'Nissan Leaf', icon: '⚡' },
          { id: 'lucid-motors', name: 'Lucid Motors', icon: '⚡' },
        ],
      },
      {
        id: 'race-cars',
        name: 'Race Cars',
        icon: '🏎️',
        subcategories: [
          { id: 'formula-1', name: 'Formula 1', icon: '🏎️' },
          { id: 'rally-cars', name: 'Rally Cars', icon: '🏎️' },
          { id: 'nascar', name: 'NASCAR', icon: '🏎️' },
        ],
      },
    ],
  },
  {
    id: 'birds',
    name: 'Birds',
    icon: '🦅',
    description: 'Explore the wonderful world of birds from majestic eagles to colorful parrots',
    subcategories: [
      {
        id: 'wild-birds',
        name: 'Wild Birds',
        icon: '🦅',
        subcategories: [
          { id: 'eagles', name: 'Eagles', icon: '🦅' },
          { id: 'hawks', name: 'Hawks', icon: '🦅' },
          { id: 'falcons', name: 'Falcons', icon: '🦅' },
        ],
      },
      {
        id: 'tropical-birds',
        name: 'Tropical Birds',
        icon: '🦜',
        subcategories: [
          { id: 'parrots', name: 'Parrots', icon: '🦜' },
          { id: 'toucans', name: 'Toucans', icon: '🦜' },
          { id: 'macaws', name: 'Macaws', icon: '🦜' },
        ],
      },
      {
        id: 'aquatic-birds',
        name: 'Aquatic Birds',
        icon: '🐧',
        subcategories: [
          { id: 'penguins', name: 'Penguins', icon: '🐧' },
          { id: 'flamingos', name: 'Flamingos', icon: '🦩' },
          { id: 'ducks', name: 'Ducks', icon: '🦆' },
        ],
      },
      {
        id: 'pet-birds',
        name: 'Pet Birds',
        icon: '🐦',
        subcategories: [
          { id: 'budgies', name: 'Budgies', icon: '🐦' },
          { id: 'canaries', name: 'Canaries', icon: '🐦' },
          { id: 'lovebirds', name: 'Lovebirds', icon: '🐦' },
        ],
      },
      {
        id: 'mythical-birds',
        name: 'Mythical Birds',
        icon: '🔥',
        subcategories: [
          { id: 'phoenix', name: 'Phoenix', icon: '🔥' },
          { id: 'roc', name: 'Roc', icon: '🦅' },
          { id: 'thunderbird', name: 'Thunderbird', icon: '⚡' },
        ],
      },
    ],
  },
  {
    id: 'nature',
    name: 'Nature',
    icon: '🌲',
    description: 'Discover the beauty of natural landscapes and flora',
    subcategories: [
      { id: 'trees', name: 'Trees', icon: '🌲' },
      { id: 'flowers', name: 'Flowers', icon: '🌸' },
      { id: 'mountains', name: 'Mountains', icon: '⛰️' },
      { id: 'forests', name: 'Forests', icon: '🌳' },
      { id: 'oceans', name: 'Oceans', icon: '🌊' },
    ],
  },
  {
    id: 'people-characters',
    name: 'People & Characters',
    icon: '👥',
    description: 'Color your favorite characters and everyday heroes',
    subcategories: [
      { id: 'superheroes', name: 'Superheroes', icon: '🦸‍♂️' },
      { id: 'fairy-tale-characters', name: 'Fairy Tale Characters', icon: '👸' },
      { id: 'occupations', name: 'Occupations', icon: '👨‍⚕️' },
      { id: 'kids-families', name: 'Kids & Families', icon: '👨‍👩‍👧‍👦' },
    ],
  },
  {
    id: 'fantasy-fiction',
    name: 'Fantasy & Fiction',
    icon: '🏰',
    description: 'Enter a world of magic and imagination',
    subcategories: [
      { id: 'castles', name: 'Castles', icon: '🏰' },
      { id: 'wizards', name: 'Wizards', icon: '🧙‍♂️' },
      { id: 'fairies', name: 'Fairies', icon: '🧚‍♀️' },
      { id: 'monsters', name: 'Monsters', icon: '��' },
    ],
  },
]; 
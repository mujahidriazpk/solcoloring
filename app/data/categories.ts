export interface Category {
  id: string;
  name: string;
  icon: string;
  description?: string;
  prompt?: string;
  subcategories?: Category[];
}

export const categories: Category[] = [
  {
    id: 'animals',
    name: 'Animals',
    icon: '🦁',
    description: 'Explore a diverse world of animals from farm friends to wild creatures',
    prompt: 'Create a coloring page featuring various animals in their natural habitats',
    subcategories: [
      {
        id: 'farm-animals',
        name: 'Farm Animals',
        icon: '🐄',
        prompt: 'Generate a farm scene coloring page with friendly farm animals',
        subcategories: [
          { id: 'cow', name: 'Cow', icon: '🐄', prompt: 'Create a simple coloring page of a cute cow in a farm setting' },
          { id: 'pig', name: 'Pig', icon: '🐷', prompt: 'Design a coloring page of a happy pig rolling in mud' },
          { id: 'horse', name: 'Horse', icon: '🐴', prompt: 'Generate a coloring page of a majestic horse galloping in a field' },
          { id: 'goat', name: 'Goat', icon: '🐐', prompt: 'Create a coloring page of a playful goat climbing on rocks' },
          { id: 'sheep', name: 'Sheep', icon: '🐑', prompt: 'Design a coloring page of fluffy sheep grazing in a meadow' },
          { id: 'rooster', name: 'Rooster', icon: '🐓', prompt: 'Generate a coloring page of a proud rooster crowing at sunrise' },
          { id: 'duck', name: 'Duck', icon: '🦆', prompt: 'Create a coloring page of ducks swimming in a farm pond' },
        ],
      },
      {
        id: 'zoo-animals',
        name: 'Zoo Animals',
        icon: '🦁',
        prompt: 'Create a zoo-themed coloring page with exotic animals',
        subcategories: [
          { id: 'lion', name: 'Lion', icon: '🦁', prompt: 'Generate a coloring page of a majestic lion with a full mane' },
          { id: 'elephant', name: 'Elephant', icon: '🐘', prompt: 'Create a coloring page of a gentle elephant spraying water' },
          { id: 'zebra', name: 'Zebra', icon: '🦓', prompt: 'Design a coloring page of zebras with distinctive stripes' },
          { id: 'giraffe', name: 'Giraffe', icon: '🦒', prompt: 'Generate a coloring page of a tall giraffe eating leaves from trees' },
          { id: 'hippo', name: 'Hippo', icon: '🦛', prompt: 'Create a coloring page of a hippo relaxing in water' },
          { id: 'panda', name: 'Panda', icon: '🐼', prompt: 'Design a coloring page of a cute panda eating bamboo' },
          { id: 'tiger', name: 'Tiger', icon: '🐯', prompt: 'Generate a coloring page of a powerful tiger in the jungle' },
        ],
      },
      {
        id: 'ocean-animals',
        name: 'Ocean Animals',
        icon: '🐬',
        prompt: 'Create an underwater scene coloring page with marine life',
        subcategories: [
          { id: 'dolphin', name: 'Dolphin', icon: '🐬', prompt: 'Generate a coloring page of dolphins jumping out of the ocean' },
          { id: 'shark', name: 'Shark', icon: '🦈', prompt: 'Create a coloring page of a friendly shark swimming underwater' },
          { id: 'octopus', name: 'Octopus', icon: '🐙', prompt: 'Design a coloring page of an octopus with curvy tentacles' },
          { id: 'sea-turtle', name: 'Sea Turtle', icon: '🐢', prompt: 'Generate a coloring page of a sea turtle swimming with fish' },
          { id: 'whale', name: 'Whale', icon: '🐋', prompt: 'Create a coloring page of a large whale spouting water' },
          { id: 'crab', name: 'Crab', icon: '🦀', prompt: 'Design a coloring page of a crab walking on the beach' },
          { id: 'starfish', name: 'Starfish', icon: '⭐', prompt: 'Generate a coloring page of colorful starfish on the sea floor' },
        ],
      },
      {
        id: 'insects',
        name: 'Insects',
        icon: '🦋',
        prompt: 'Create a garden scene coloring page with various insects',
        subcategories: [
          { id: 'butterfly', name: 'Butterfly', icon: '🦋', prompt: 'Generate a coloring page of beautiful butterflies with intricate wing patterns' },
          { id: 'bee', name: 'Bee', icon: '🐝', prompt: 'Create a coloring page of busy bees collecting nectar from flowers' },
          { id: 'ant', name: 'Ant', icon: '🐜', prompt: 'Design a coloring page of ants working together carrying food' },
          { id: 'dragonfly', name: 'Dragonfly', icon: '🪰', prompt: 'Generate a coloring page of dragonflies hovering over a pond' },
          { id: 'ladybug', name: 'Ladybug', icon: '🐞', prompt: 'Create a coloring page of cute ladybugs crawling on leaves' },
        ],
      },
      {
        id: 'birds',
        name: 'Birds',
        icon: '🦜',
        prompt: 'Create a coloring page featuring various birds in different settings',
        subcategories: [
          { id: 'parrot', name: 'Parrot', icon: '🦜', prompt: 'Generate a coloring page of a colorful parrot perched on a branch' },
          { id: 'eagle', name: 'Eagle', icon: '🦅', prompt: 'Create a coloring page of a majestic eagle soaring through the sky' },
          { id: 'penguin', name: 'Penguin', icon: '🐧', prompt: 'Design a coloring page of penguins sliding on ice' },
          { id: 'owl', name: 'Owl', icon: '🦉', prompt: 'Generate a coloring page of a wise owl sitting on a tree branch' },
          { id: 'flamingo', name: 'Flamingo', icon: '🦩', prompt: 'Create a coloring page of elegant flamingos standing in water' },
        ],
      },
      {
        id: 'dinosaurs',
        name: 'Dinosaurs',
        icon: '🦕',
        prompt: 'Create a prehistoric scene coloring page with dinosaurs',
        subcategories: [
          { id: 't-rex', name: 'T-Rex', icon: '🦖', prompt: 'Generate a coloring page of a fierce T-Rex roaring in the jungle' },
          { id: 'triceratops', name: 'Triceratops', icon: '🦕', prompt: 'Create a coloring page of a gentle Triceratops eating plants' },
          { id: 'stegosaurus', name: 'Stegosaurus', icon: '🦕', prompt: 'Design a coloring page of a Stegosaurus with distinctive back plates' },
          { id: 'velociraptor', name: 'Velociraptor', icon: '🦖', prompt: 'Generate a coloring page of swift Velociraptors hunting together' },
        ],
      },
      {
        id: 'pets',
        name: 'Pets',
        icon: '🐕',
        prompt: 'Create a home scene coloring page with beloved pets',
        subcategories: [
          { id: 'dog', name: 'Dog', icon: '🐕', prompt: 'Generate a coloring page of a friendly dog playing in the yard' },
          { id: 'cat', name: 'Cat', icon: '🐱', prompt: 'Create a coloring page of a cute cat napping in the sun' },
          { id: 'hamster', name: 'Hamster', icon: '🐹', prompt: 'Design a coloring page of a hamster running on a wheel' },
          { id: 'fish', name: 'Fish', icon: '🐠', prompt: 'Generate a coloring page of tropical fish swimming in an aquarium' },
          { id: 'bird', name: 'Bird', icon: '🐦', prompt: 'Create a coloring page of a pet bird singing in its cage' },
        ],
      },
    ],
  },
  {
    id: 'characters',
    name: 'Characters',
    icon: '🎭',
    description: 'Color your favorite characters from cartoons, movies, and stories',
    prompt: 'Create a coloring page featuring beloved characters in action scenes',
    subcategories: [
      {
        id: 'cartoons',
        name: 'Cartoons',
        icon: '📺',
        prompt: 'Generate a coloring page with popular cartoon characters',
        subcategories: [
          { id: 'spongebob', name: 'SpongeBob', icon: '🧽', prompt: 'Create a coloring page of SpongeBob having fun in Bikini Bottom' },
          { id: 'scooby-doo', name: 'Scooby-Doo', icon: '🐕', prompt: 'Generate a coloring page of Scooby-Doo solving mysteries' },
          { id: 'tom-and-jerry', name: 'Tom and Jerry', icon: '🐱', prompt: 'Design a coloring page of Tom and Jerry in a chase scene' },
          { id: 'peppa-pig', name: 'Peppa Pig', icon: '🐷', prompt: 'Create a coloring page of Peppa Pig jumping in muddy puddles' },
          { id: 'bluey', name: 'Bluey', icon: '🐕', prompt: 'Generate a coloring page of Bluey playing with family' },
        ],
      },
      {
        id: 'disney',
        name: 'Disney',
        icon: '🏰',
        prompt: 'Create magical Disney character coloring pages',
        subcategories: [
          { id: 'mickey-mouse', name: 'Mickey Mouse', icon: '🐭', prompt: 'Generate a coloring page of Mickey Mouse in his classic pose' },
          { id: 'donald-duck', name: 'Donald Duck', icon: '🦆', prompt: 'Create a coloring page of Donald Duck with his nephews' },
          { id: 'simba', name: 'Simba', icon: '🦁', prompt: 'Design a coloring page of Simba from The Lion King' },
          { id: 'elsa', name: 'Elsa', icon: '❄️', prompt: 'Generate a coloring page of Elsa creating ice magic' },
          { id: 'moana', name: 'Moana', icon: '🌊', prompt: 'Create a coloring page of Moana sailing across the ocean' },
          { id: 'stitch', name: 'Stitch', icon: '👽', prompt: 'Design a coloring page of cute Stitch causing mischief' },
        ],
      },
      {
        id: 'superheroes',
        name: 'Superheroes',
        icon: '🦸‍♂️',
        prompt: 'Create action-packed superhero coloring pages',
        subcategories: [
          { id: 'spider-man', name: 'Spider-Man', icon: '🕷️', prompt: 'Generate a coloring page of Spider-Man swinging through the city' },
          { id: 'batman', name: 'Batman', icon: '🦇', prompt: 'Create a coloring page of Batman protecting Gotham City' },
          { id: 'wonder-woman', name: 'Wonder Woman', icon: '⚔️', prompt: 'Design a coloring page of Wonder Woman with her lasso' },
          { id: 'iron-man', name: 'Iron Man', icon: '🤖', prompt: 'Generate a coloring page of Iron Man in his high-tech suit' },
          { id: 'captain-marvel', name: 'Captain Marvel', icon: '⚡', prompt: 'Create a coloring page of Captain Marvel flying through space' },
        ],
      },
      {
        id: 'video-games',
        name: 'Video Games',
        icon: '🎮',
        prompt: 'Create coloring pages of popular video game characters',
        subcategories: [
          { id: 'mario', name: 'Mario', icon: '🍄', prompt: 'Generate a coloring page of Mario jumping through levels' },
          { id: 'sonic', name: 'Sonic', icon: '💙', prompt: 'Create a coloring page of Sonic running at super speed' },
          { id: 'minecraft', name: 'Minecraft', icon: '⛏️', prompt: 'Design a coloring page with Minecraft blocks and characters' },
          { id: 'pokemon', name: 'Pokémon', icon: '⚡', prompt: 'Generate a coloring page of various Pokémon characters' },
          { id: 'fortnite', name: 'Fortnite', icon: '🎯', prompt: 'Create a coloring page of Fortnite characters and items' },
        ],
      },
      {
        id: 'storybook-characters',
        name: 'Storybook Characters',
        icon: '📚',
        prompt: 'Create coloring pages of classic fairy tale characters',
        subcategories: [
          { id: 'little-red-riding-hood', name: 'Little Red Riding Hood', icon: '🧺', prompt: 'Generate a coloring page of Little Red Riding Hood in the forest' },
          { id: 'goldilocks', name: 'Goldilocks', icon: '🐻', prompt: 'Create a coloring page of Goldilocks with the three bears' },
          { id: 'three-little-pigs', name: 'Three Little Pigs', icon: '🏠', prompt: 'Design a coloring page of the three little pigs building houses' },
          { id: 'humpty-dumpty', name: 'Humpty Dumpty', icon: '🥚', prompt: 'Generate a coloring page of Humpty Dumpty on the wall' },
        ],
      },
    ],
  },
  {
    id: 'vehicles',
    name: 'Vehicles',
    icon: '🚗',
    description: 'Explore amazing vehicles from cars to planes to boats',
    prompt: 'Create detailed vehicle coloring pages with transportation themes',
    subcategories: [
      {
        id: 'cars',
        name: 'Cars',
        icon: '🚗',
        prompt: 'Generate coloring pages of various types of cars',
        subcategories: [
          { id: 'sports-cars', name: 'Sports Cars', icon: '🏎️', prompt: 'Create a coloring page of sleek sports cars racing' },
          { id: 'police-car', name: 'Police Car', icon: '🚓', prompt: 'Generate a coloring page of a police car with sirens' },
          { id: 'fire-truck', name: 'Fire Truck', icon: '🚒', prompt: 'Design a coloring page of a fire truck with ladder extended' },
          { id: 'taxi', name: 'Taxi', icon: '🚕', prompt: 'Create a coloring page of a yellow taxi in the city' },
          { id: 'race-car', name: 'Race Car', icon: '🏎️', prompt: 'Generate a coloring page of race cars on a speedway' },
          { id: 'electric-car', name: 'Electric Car', icon: '⚡', prompt: 'Design a coloring page of modern electric cars charging' },
        ],
      },
      {
        id: 'planes',
        name: 'Planes',
        icon: '✈️',
        prompt: 'Create coloring pages of aircraft and flying vehicles',
        subcategories: [
          { id: 'passenger-plane', name: 'Passenger Plane', icon: '✈️', prompt: 'Generate a coloring page of a passenger plane flying through clouds' },
          { id: 'fighter-jet', name: 'Fighter Jet', icon: '🛩️', prompt: 'Create a coloring page of a fast fighter jet in action' },
          { id: 'helicopter', name: 'Helicopter', icon: '🚁', prompt: 'Design a coloring page of a helicopter rescue mission' },
          { id: 'hot-air-balloon', name: 'Hot Air Balloon', icon: '🎈', prompt: 'Generate a coloring page of colorful hot air balloons floating' },
        ],
      },
      {
        id: 'boats',
        name: 'Boats',
        icon: '⛵',
        prompt: 'Create coloring pages of boats and watercraft',
        subcategories: [
          { id: 'sailboat', name: 'Sailboat', icon: '⛵', prompt: 'Generate a coloring page of sailboats on a calm lake' },
          { id: 'submarine', name: 'Submarine', icon: '🚤', prompt: 'Create a coloring page of a submarine exploring underwater' },
          { id: 'cruise-ship', name: 'Cruise Ship', icon: '🛳️', prompt: 'Design a coloring page of a large cruise ship at sea' },
          { id: 'fishing-boat', name: 'Fishing Boat', icon: '🎣', prompt: 'Generate a coloring page of fishing boats with nets and fish' },
        ],
      },
      {
        id: 'construction-vehicles',
        name: 'Construction Vehicles',
        icon: '🚜',
        prompt: 'Create coloring pages of construction and work vehicles',
        subcategories: [
          { id: 'bulldozer', name: 'Bulldozer', icon: '🚜', prompt: 'Generate a coloring page of a bulldozer moving dirt' },
          { id: 'crane', name: 'Crane', icon: '🏗️', prompt: 'Create a coloring page of a tall construction crane' },
          { id: 'excavator', name: 'Excavator', icon: '🚜', prompt: 'Design a coloring page of an excavator digging' },
          { id: 'dump-truck', name: 'Dump Truck', icon: '🚛', prompt: 'Generate a coloring page of a dump truck unloading materials' },
        ],
      },
      {
        id: 'trains',
        name: 'Trains',
        icon: '🚂',
        prompt: 'Create coloring pages of various types of trains',
        subcategories: [
          { id: 'steam-train', name: 'Steam Train', icon: '🚂', prompt: 'Generate a coloring page of a classic steam train with smoke' },
          { id: 'bullet-train', name: 'Bullet Train', icon: '🚄', prompt: 'Create a coloring page of a modern high-speed bullet train' },
          { id: 'freight-train', name: 'Freight Train', icon: '🚃', prompt: 'Design a coloring page of a long freight train carrying cargo' },
        ],
      },
    ],
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '⚽',
    description: 'Color your favorite sports teams and athletic activities',
    prompt: 'Create sports-themed coloring pages with teams and athletes',
    subcategories: [
      {
        id: 'football',
        name: 'Football',
        icon: '🏈',
        prompt: 'Generate football-themed coloring pages',
        subcategories: [
          {
            id: 'nfl',
            name: 'NFL',
            icon: '🏈',
            prompt: 'Create NFL team coloring pages',
            subcategories: [
              {
                id: 'afc-east',
                name: 'AFC East',
                icon: '🏈',
                prompt: 'Generate AFC East team coloring pages',
                subcategories: [
                  { id: 'buffalo-bills', name: 'Buffalo Bills', icon: '🦌', prompt: 'Create a Buffalo Bills team logo coloring page' },
                  { id: 'miami-dolphins', name: 'Miami Dolphins', icon: '🐬', prompt: 'Generate a Miami Dolphins team coloring page' },
                  { id: 'new-england-patriots', name: 'New England Patriots', icon: '🦅', prompt: 'Design a New England Patriots logo coloring page' },
                  { id: 'new-york-jets', name: 'New York Jets', icon: '✈️', prompt: 'Create a New York Jets team coloring page' },
                ],
              },
              {
                id: 'nfc-east',
                name: 'NFC East',
                icon: '🏈',
                prompt: 'Generate NFC East team coloring pages',
                subcategories: [
                  { id: 'dallas-cowboys', name: 'Dallas Cowboys', icon: '⭐', prompt: 'Create a Dallas Cowboys star logo coloring page' },
                  { id: 'new-york-giants', name: 'New York Giants', icon: '🏙️', prompt: 'Generate a New York Giants team coloring page' },
                  { id: 'philadelphia-eagles', name: 'Philadelphia Eagles', icon: '🦅', prompt: 'Design a Philadelphia Eagles logo coloring page' },
                  { id: 'washington-commanders', name: 'Washington Commanders', icon: '🏛️', prompt: 'Create a Washington Commanders team coloring page' },
                ],
              },
            ],
          },
          {
            id: 'college-football',
            name: 'College Football',
            icon: '🎓',
            prompt: 'Create college football team coloring pages',
            subcategories: [
              {
                id: 'sec',
                name: 'SEC',
                icon: '🎓',
                prompt: 'Generate SEC conference team coloring pages',
                subcategories: [
                  { id: 'alabama', name: 'Alabama', icon: '🐘', prompt: 'Create an Alabama Crimson Tide elephant mascot coloring page' },
                  { id: 'georgia', name: 'Georgia', icon: '🐶', prompt: 'Generate a Georgia Bulldogs mascot coloring page' },
                  { id: 'florida', name: 'Florida', icon: '🐊', prompt: 'Design a Florida Gators alligator coloring page' },
                  { id: 'lsu', name: 'LSU', icon: '🐅', prompt: 'Create an LSU Tigers mascot coloring page' },
                ],
              },
              {
                id: 'big-ten',
                name: 'Big Ten',
                icon: '🎓',
                prompt: 'Generate Big Ten conference team coloring pages',
                subcategories: [
                  { id: 'ohio-state', name: 'Ohio State', icon: '🌰', prompt: 'Create an Ohio State Buckeyes logo coloring page' },
                  { id: 'michigan', name: 'Michigan', icon: '〰️', prompt: 'Generate a Michigan Wolverines coloring page' },
                  { id: 'penn-state', name: 'Penn State', icon: '🦁', prompt: 'Design a Penn State Nittany Lion coloring page' },
                  { id: 'wisconsin', name: 'Wisconsin', icon: '🐻', prompt: 'Create a Wisconsin Badgers mascot coloring page' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'basketball',
        name: 'Basketball',
        icon: '🏀',
        prompt: 'Create basketball-themed coloring pages',
        subcategories: [
          {
            id: 'nba',
            name: 'NBA',
            icon: '🏀',
            prompt: 'Generate NBA team coloring pages',
            subcategories: [
              { id: 'lakers', name: 'Lakers', icon: '💜', prompt: 'Create a Los Angeles Lakers logo coloring page' },
              { id: 'warriors', name: 'Warriors', icon: '⚔️', prompt: 'Generate a Golden State Warriors logo coloring page' },
              { id: 'celtics', name: 'Celtics', icon: '🍀', prompt: 'Design a Boston Celtics shamrock coloring page' },
              { id: 'bulls', name: 'Bulls', icon: '🐂', prompt: 'Create a Chicago Bulls logo coloring page' },
            ],
          },
          {
            id: 'college-basketball',
            name: 'College Basketball',
            icon: '🎓',
            prompt: 'Create college basketball team coloring pages',
            subcategories: [
              { id: 'duke', name: 'Duke', icon: '👹', prompt: 'Generate a Duke Blue Devils mascot coloring page' },
              { id: 'unc', name: 'UNC', icon: '🐏', prompt: 'Create a UNC Tar Heels mascot coloring page' },
              { id: 'ucla', name: 'UCLA', icon: '🐻', prompt: 'Design a UCLA Bruins bear coloring page' },
              { id: 'kansas', name: 'Kansas', icon: '🦅', prompt: 'Generate a Kansas Jayhawks coloring page' },
            ],
          },
        ],
      },
      {
        id: 'soccer',
        name: 'Soccer',
        icon: '⚽',
        prompt: 'Create soccer team and player coloring pages',
        subcategories: [
          {
            id: 'mls',
            name: 'MLS',
            icon: '⚽',
            prompt: 'Generate MLS team coloring pages',
            subcategories: [
              { id: 'la-galaxy', name: 'LA Galaxy', icon: '⭐', prompt: 'Create an LA Galaxy star logo coloring page' },
              { id: 'seattle-sounders', name: 'Seattle Sounders', icon: '🌲', prompt: 'Generate a Seattle Sounders logo coloring page' },
              { id: 'inter-miami', name: 'Inter Miami', icon: '🌴', prompt: 'Design an Inter Miami logo coloring page' },
            ],
          },
          {
            id: 'premier-league',
            name: 'Premier League',
            icon: '👑',
            prompt: 'Create Premier League team coloring pages',
            subcategories: [
              { id: 'manchester-united', name: 'Manchester United', icon: '👹', prompt: 'Generate a Manchester United red devil coloring page' },
              { id: 'liverpool', name: 'Liverpool', icon: '🦅', prompt: 'Create a Liverpool FC Liver bird coloring page' },
              { id: 'chelsea', name: 'Chelsea', icon: '🦁', prompt: 'Design a Chelsea FC lion logo coloring page' },
            ],
          },
        ],
      },
      {
        id: 'olympic-sports',
        name: 'Olympic Sports',
        icon: '🏅',
        prompt: 'Create Olympic sports and athlete coloring pages',
        subcategories: [
          { id: 'gymnastics', name: 'Gymnastics', icon: '🤸‍♀️', prompt: 'Generate a gymnastics routine coloring page' },
          { id: 'swimming', name: 'Swimming', icon: '🏊‍♂️', prompt: 'Create a swimming competition coloring page' },
          { id: 'track-and-field', name: 'Track and Field', icon: '🏃‍♂️', prompt: 'Design a track and field events coloring page' },
          { id: 'figure-skating', name: 'Figure Skating', icon: '⛸️', prompt: 'Generate a figure skating performance coloring page' },
        ],
      },
    ],
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎬',
    description: 'Color your favorite shows, movies, and entertainment characters',
    prompt: 'Create entertainment-themed coloring pages with popular media characters',
    subcategories: [
      {
        id: 'tv-shows',
        name: 'TV Shows',
        icon: '📺',
        prompt: 'Generate coloring pages of popular children\'s TV shows',
        subcategories: [
          { id: 'paw-patrol', name: 'Paw Patrol', icon: '🐕', prompt: 'Create a Paw Patrol rescue mission coloring page' },
          { id: 'sesame-street', name: 'Sesame Street', icon: '🏠', prompt: 'Generate a Sesame Street characters coloring page' },
          { id: 'cocomelon', name: 'Cocomelon', icon: '🎵', prompt: 'Design a Cocomelon family coloring page' },
          { id: 'dora-explorer', name: 'Dora the Explorer', icon: '🗺️', prompt: 'Create a Dora exploring adventure coloring page' },
        ],
      },
      {
        id: 'movies',
        name: 'Movies',
        icon: '🎬',
        prompt: 'Create coloring pages of popular animated movies',
        subcategories: [
          { id: 'toy-story', name: 'Toy Story', icon: '🤠', prompt: 'Generate a Toy Story characters coloring page' },
          { id: 'frozen', name: 'Frozen', icon: '❄️', prompt: 'Create a Frozen ice castle coloring page' },
          { id: 'cars-movie', name: 'Cars', icon: '🏎️', prompt: 'Design a Cars movie racing scene coloring page' },
          { id: 'finding-nemo', name: 'Finding Nemo', icon: '🐠', prompt: 'Generate a Finding Nemo underwater coloring page' },
          { id: 'minions', name: 'Minions', icon: '👁️', prompt: 'Create a Minions silly antics coloring page' },
        ],
      },
      {
        id: 'youtube-stars',
        name: 'YouTube Stars',
        icon: '📱',
        prompt: 'Create coloring pages of popular YouTube personalities for kids',
        subcategories: [
          { id: 'blippi', name: 'Blippi', icon: '🎓', prompt: 'Generate a Blippi educational fun coloring page' },
          { id: 'ryans-world', name: 'Ryan\'s World', icon: '🌟', prompt: 'Create a Ryan\'s World adventure coloring page' },
        ],
      },
    ],
  },
  {
    id: 'holidays',
    name: 'Holidays',
    icon: '🎉',
    description: 'Celebrate holidays with festive coloring pages',
    prompt: 'Create holiday-themed coloring pages for seasonal celebrations',
    subcategories: [
      {
        id: 'christmas',
        name: 'Christmas',
        icon: '🎄',
        prompt: 'Generate festive Christmas coloring pages',
        subcategories: [
          { id: 'santa-claus', name: 'Santa Claus', icon: '🎅', prompt: 'Create a jolly Santa Claus delivering presents coloring page' },
          { id: 'christmas-tree', name: 'Christmas Tree', icon: '🎄', prompt: 'Generate a decorated Christmas tree coloring page' },
          { id: 'snowman', name: 'Snowman', icon: '⛄', prompt: 'Design a friendly snowman in winter scene coloring page' },
          { id: 'reindeer', name: 'Reindeer', icon: '🦌', prompt: 'Create reindeer pulling Santa\'s sleigh coloring page' },
        ],
      },
      {
        id: 'halloween',
        name: 'Halloween',
        icon: '🎃',
        prompt: 'Create spooky but fun Halloween coloring pages',
        subcategories: [
          { id: 'pumpkins', name: 'Pumpkins', icon: '🎃', prompt: 'Generate carved jack-o\'-lantern pumpkins coloring page' },
          { id: 'witch', name: 'Witch', icon: '🧙‍♀️', prompt: 'Create a friendly witch brewing potions coloring page' },
          { id: 'ghost', name: 'Ghost', icon: '👻', prompt: 'Design cute ghosts floating around coloring page' },
          { id: 'skeleton', name: 'Skeleton', icon: '💀', prompt: 'Generate a dancing skeleton coloring page' },
          { id: 'haunted-house', name: 'Haunted House', icon: '🏚️', prompt: 'Create a spooky haunted house coloring page' },
        ],
      },
      {
        id: 'easter',
        name: 'Easter',
        icon: '🐰',
        prompt: 'Create springtime Easter coloring pages',
        subcategories: [
          { id: 'easter-bunny', name: 'Easter Bunny', icon: '🐰', prompt: 'Generate an Easter bunny with eggs coloring page' },
          { id: 'egg-hunt', name: 'Egg Hunt', icon: '🥚', prompt: 'Create an Easter egg hunt scene coloring page' },
          { id: 'chicks', name: 'Chicks', icon: '🐣', prompt: 'Design cute baby chicks hatching coloring page' },
          { id: 'baskets', name: 'Baskets', icon: '🧺', prompt: 'Generate Easter baskets filled with treats coloring page' },
        ],
      },
      {
        id: 'valentines-day',
        name: 'Valentine\'s Day',
        icon: '💝',
        prompt: 'Create loving Valentine\'s Day coloring pages',
        subcategories: [
          { id: 'hearts', name: 'Hearts', icon: '❤️', prompt: 'Generate decorative hearts and love patterns coloring page' },
          { id: 'cupid', name: 'Cupid', icon: '💘', prompt: 'Create Cupid with bow and arrow coloring page' },
          { id: 'love-letter', name: 'Love Letter', icon: '💌', prompt: 'Design love letters and romantic messages coloring page' },
        ],
      },
      {
        id: 'thanksgiving',
        name: 'Thanksgiving',
        icon: '🦃',
        prompt: 'Create grateful Thanksgiving coloring pages',
        subcategories: [
          { id: 'turkey', name: 'Turkey', icon: '🦃', prompt: 'Generate a Thanksgiving turkey with feathers coloring page' },
          { id: 'pilgrims', name: 'Pilgrims', icon: '🏰', prompt: 'Create Pilgrims celebrating harvest coloring page' },
          { id: 'cornucopia', name: 'Cornucopia', icon: '🌽', prompt: 'Design a cornucopia filled with harvest foods coloring page' },
        ],
      },
    ],
  },
  {
    id: 'fantasy-imagination',
    name: 'Fantasy & Imagination',
    icon: '🦄',
    description: 'Enter magical worlds with fantasy creatures and kingdoms',
    prompt: 'Create magical fantasy coloring pages with mythical creatures',
    subcategories: [
      {
        id: 'fantasy-creatures',
        name: 'Fantasy Creatures',
        icon: '🦄',
        prompt: 'Generate coloring pages of magical fantasy creatures',
        subcategories: [
          { id: 'unicorn', name: 'Unicorn', icon: '🦄', prompt: 'Create a majestic unicorn in an enchanted forest coloring page' },
          { id: 'dragon', name: 'Dragon', icon: '🐉', prompt: 'Generate a friendly dragon breathing colorful fire coloring page' },
          { id: 'fairy', name: 'Fairy', icon: '🧚‍♀️', prompt: 'Design fairies flying in a magical garden coloring page' },
          { id: 'mermaid', name: 'Mermaid', icon: '🧜‍♀️', prompt: 'Create a beautiful mermaid swimming with sea creatures coloring page' },
          { id: 'phoenix', name: 'Phoenix', icon: '🔥', prompt: 'Generate a phoenix rising from flames coloring page' },
        ],
      },
      {
        id: 'magic-potions',
        name: 'Magic & Potions',
        icon: '🔮',
        prompt: 'Create magical spells and potions coloring pages',
        subcategories: [
          { id: 'wizards', name: 'Wizards', icon: '🧙‍♂️', prompt: 'Generate a wise wizard casting spells coloring page' },
          { id: 'magic-wand', name: 'Magic Wand', icon: '✨', prompt: 'Create magic wands shooting sparkles coloring page' },
          { id: 'spell-book', name: 'Spell Book', icon: '📖', prompt: 'Design an open spell book with magical symbols coloring page' },
        ],
      },
      {
        id: 'castles-kingdoms',
        name: 'Castles & Kingdoms',
        icon: '🏰',
        prompt: 'Create royal castle and kingdom coloring pages',
        subcategories: [
          { id: 'king', name: 'King', icon: '👑', prompt: 'Generate a noble king on his throne coloring page' },
          { id: 'queen', name: 'Queen', icon: '👸', prompt: 'Create an elegant queen in royal dress coloring page' },
          { id: 'knight', name: 'Knight', icon: '⚔️', prompt: 'Design a brave knight in shining armor coloring page' },
          { id: 'princess', name: 'Princess', icon: '👸', prompt: 'Generate a princess in a beautiful gown coloring page' },
          { id: 'castle', name: 'Castle', icon: '🏰', prompt: 'Create a magnificent castle with towers and flags coloring page' },
        ],
      },
    ],
  },
  {
    id: 'nature-environment',
    name: 'Nature & Environment',
    icon: '🌿',
    description: 'Explore the beauty of nature and our environment',
    prompt: 'Create nature-themed coloring pages celebrating the outdoors',
    subcategories: [
      {
        id: 'seasons',
        name: 'Seasons',
        icon: '🍂',
        prompt: 'Generate coloring pages showing different seasons',
        subcategories: [
          { id: 'spring', name: 'Spring', icon: '🌸', prompt: 'Create a spring scene with blooming flowers and baby animals coloring page' },
          { id: 'summer', name: 'Summer', icon: '☀️', prompt: 'Generate a sunny summer day at the beach coloring page' },
          { id: 'fall', name: 'Fall', icon: '🍂', prompt: 'Design an autumn scene with falling leaves coloring page' },
          { id: 'winter', name: 'Winter', icon: '❄️', prompt: 'Create a snowy winter landscape coloring page' },
        ],
      },
      {
        id: 'weather',
        name: 'Weather',
        icon: '⛅',
        prompt: 'Create coloring pages featuring different weather patterns',
        subcategories: [
          { id: 'sun', name: 'Sun', icon: '☀️', prompt: 'Generate a bright smiling sun with rays coloring page' },
          { id: 'rain', name: 'Rain', icon: '🌧️', prompt: 'Create a rainy day with puddles and raindrops coloring page' },
          { id: 'snow', name: 'Snow', icon: '❄️', prompt: 'Design snowflakes falling from the sky coloring page' },
          { id: 'rainbow', name: 'Rainbow', icon: '🌈', prompt: 'Generate a beautiful rainbow after rain coloring page' },
          { id: 'clouds', name: 'Clouds', icon: '☁️', prompt: 'Create fluffy clouds floating in the sky coloring page' },
        ],
      },
      {
        id: 'landscapes',
        name: 'Landscapes',
        icon: '🏔️',
        prompt: 'Generate coloring pages of various natural landscapes',
        subcategories: [
          { id: 'mountains', name: 'Mountains', icon: '⛰️', prompt: 'Create a majestic mountain range coloring page' },
          { id: 'desert', name: 'Desert', icon: '🌵', prompt: 'Generate a desert scene with cacti and sand dunes coloring page' },
          { id: 'jungle', name: 'Jungle', icon: '🌴', prompt: 'Design a lush jungle with tropical plants coloring page' },
          { id: 'beach', name: 'Beach', icon: '🏖️', prompt: 'Create a peaceful beach with waves and seashells coloring page' },
        ],
      },
      {
        id: 'gardening',
        name: 'Gardening',
        icon: '🌻',
        prompt: 'Create coloring pages celebrating plants and gardening',
        subcategories: [
          { id: 'flowers', name: 'Flowers', icon: '🌺', prompt: 'Generate a garden full of different colorful flowers coloring page' },
          { id: 'trees', name: 'Trees', icon: '🌳', prompt: 'Create various types of trees in a forest coloring page' },
          { id: 'fruits', name: 'Fruits', icon: '🍎', prompt: 'Design a fruit orchard with apple and orange trees coloring page' },
          { id: 'vegetables', name: 'Vegetables', icon: '🥕', prompt: 'Generate a vegetable garden with carrots and tomatoes coloring page' },
        ],
      },
    ],
  },
]; 
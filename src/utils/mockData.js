export const categories = [
  {
    id: 1,
    name: "Fiction",
    description: "Stories created from imagination",
  },
  {
    id: 2,
    name: "Non-Fiction",
    description: "Based on real events and facts",
  },
  {
    id: 3,
    name: "Sci-Fi",
    description: "Science, technology, and future concepts",
  },
  {
    id: 4,
    name: "Fantasy",
    description: "Magic, myths, and imaginary worlds",
  },
  {
    id: 5,
    name: "Self-Help",
    description: "Personal growth and motivation",
  },
];

export const popularBooks = [
  {
    id: 1,
    title: "The Silent Forest",
    author: "Emily Stone",
    category: "Fiction",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    description:
      "A gripping fictional novel set in a mysterious forest where hidden secrets slowly come to light.",
  },
  {
    id: 2,
    title: "Future Beyond Earth",
    author: "Sarah Miles",
    category: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
    description:
      "A science fiction journey exploring humanity’s future beyond Earth and the challenges of space colonization.",
  },
  {
    id: 3,
    title: "The Dragon’s Realm",
    author: "Olivia Brown",
    category: "Fantasy",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
    description:
      "A fantasy adventure filled with magic, dragons, and epic battles between ancient kingdoms.",
  },
  {
    id: 4,
    title: "Mindset Matters",
    author: "Carol Dweck",
    category: "Self-Help",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
    description:
      "A self-help book that explains how developing the right mindset can unlock personal growth and success.",
  },
  {
    id: 5,
    title: "The World of Tomorrow",
    author: "Isaac Reynolds",
    category: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
    description:
      "A futuristic sci-fi novel that imagines the world shaped by advanced technology and artificial intelligence.",
  },
  {
    id: 6,
    title: "Stories Untold",
    author: "Anna Williams",
    category: "Fiction",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
    description:
      "A collection of emotional and thought-provoking stories that explore untold human experiences.",
  },
];

export const bookCategories = [
  {
    id: 1,
    name: "Fiction",
    books: [
      {
        id: "f1",
        title: "The Silent Forest",
        author: "Emily Stone",
        description: "A mysterious story unfolding deep inside an ancient forest.",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
      },
      {
        id: "f2",
        title: "Stories Untold",
        author: "Anna Williams",
        description: "A collection of emotional and thought-provoking short stories.",
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
      },
      {
        id: "f3",
        title: "The Last Letter",
        author: "Mark Collins",
        description: "A touching tale of love, loss, and forgotten letters.",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400",
      },
      {
        id: "f4",
        title: "Midnight Train",
        author: "Rachel Adams",
        description: "A suspenseful journey that changes multiple lives forever.",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400",
      },
      {
        id: "f5",
        title: "Echoes of Time",
        author: "Daniel Moore",
        description: "A fictional exploration of memories and time.",
        image: "https://images.unsplash.com/photo-1473755504818-b72b6dfdc226?w=400",
      },
    ],
  },

  {
    id: 2,
    name: "Non-Fiction",
    books: [
      {
        id: "nf1",
        title: "History of Humankind",
        author: "David Allen",
        description: "An insightful overview of human civilization and progress.",
        image: "https://images.unsplash.com/photo-1457694587812-e8bf29a43845?w=400",
      },
      {
        id: "nf2",
        title: "The Power of Habits",
        author: "Charles Reed",
        description: "How habits shape our daily lives and decisions.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
      },
      {
        id: "nf3",
        title: "Money Matters",
        author: "Robert King",
        description: "A practical guide to personal finance and money management.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400",
      },
      {
        id: "nf4",
        title: "Inside the Human Mind",
        author: "Laura Smith",
        description: "An exploration of psychology and human behavior.",
        image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400",
      },
      {
        id: "nf5",
        title: "True Stories of Courage",
        author: "Michael Brown",
        description: "Real-life stories of bravery and determination.",
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400",
      },
    ],
  },

  {
    id: 3,
    name: "Sci-Fi",
    books: [
      {
        id: "sf1",
        title: "Future Beyond Earth",
        author: "Sarah Miles",
        description: "A sci-fi journey into space colonization and survival.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
      },
      {
        id: "sf2",
        title: "The World of Tomorrow",
        author: "Isaac Reynolds",
        description: "A futuristic vision shaped by advanced technology.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
      },
      {
        id: "sf3",
        title: "AI Awakening",
        author: "Kevin Turner",
        description: "When artificial intelligence becomes self-aware.",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=400",
      },
      {
        id: "sf4",
        title: "Galactic Wars",
        author: "Olivia Hart",
        description: "Interstellar battles between rival galaxies.",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400",
      },
      {
        id: "sf5",
        title: "Time Loop",
        author: "Nathan Scott",
        description: "A mind-bending story about time travel and consequences.",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400",
      },
    ],
  },

  {
    id: 4,
    name: "Fantasy",
    books: [
      {
        id: "fa1",
        title: "The Dragon’s Realm",
        author: "Olivia Brown",
        description: "A magical land ruled by dragons and ancient kings.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
      },
      {
        id: "fa2",
        title: "Kingdom of Shadows",
        author: "Henry Clark",
        description: "A dark fantasy filled with secrets and power struggles.",
        image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400",
      },
      {
        id: "fa3",
        title: "The Enchanted Sword",
        author: "Lucy Green",
        description: "A legendary sword that chooses its rightful owner.",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
      },
      {
        id: "fa4",
        title: "Mage’s Journey",
        author: "Peter Lewis",
        description: "The journey of a young mage discovering his powers.",
        image: "https://images.unsplash.com/photo-1496104679561-38b3b4d25d6d?w=400",
      },
      {
        id: "fa5",
        title: "The Forgotten Prophecy",
        author: "Sophia White",
        description: "An ancient prophecy that could save or destroy the world.",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400",
      },
    ],
  },

  {
    id: 5,
    name: "Self-Help",
    books: [
      {
        id: "sh1",
        title: "Think Like a Leader",
        author: "James Carter",
        description: "Develop leadership skills for personal and professional growth.",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400",
      },
      {
        id: "sh2",
        title: "Mindset Matters",
        author: "Carol Dweck",
        description: "How your mindset influences success and learning.",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
      },
      {
        id: "sh3",
        title: "The Power of Focus",
        author: "Andrew Miller",
        description: "Improve concentration and productivity in daily life.",
        image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400",
      },
      {
        id: "sh4",
        title: "Build Better Habits",
        author: "Linda Johnson",
        description: "Simple techniques to build long-lasting habits.",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400",
      },
      {
        id: "sh5",
        title: "Confidence Blueprint",
        author: "Ryan Brooks",
        description: "A practical guide to building confidence and self-belief.",
        image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=400",
      },
    ],
  },
];




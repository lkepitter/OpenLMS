export const books = [
  {
    refId: "00001",
    isbn: "0356515176",
    name: "Mask of Mirrors",
    author: [{ lastname: "Carrick", firstname: "M.A." }],
    series: [{ name: "Rook & Rose", number: 1 }],
    genre: ["Fantasy", "Epic Fantasy"],
    fiction: true,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590151669l/51340378._SY475_.jpg",
    description:
      "Fortune favors the bold. Magic favors the liars. Ren is a con artist who has come to the sparkling city of Nadežra with one goal: to trick her way into a noble house, securing her fortune and her sister's future. But as she's drawn into the elite world of House Traementis, she realizes her masquerade is just one of many surrounding her. And as nightmare magic begins to weave its way through the City of Dreams, the poisonous feuds of its aristocrats and the shadowy dangers of its impoverished underbelly become tangled…with Ren at their heart.",
    publocation: "London",
    pubyear: "2021",
    publisher: "Orbit",
    edition: "",
    keywords: ["LGBT", "epic", "high fantasy"],
    categories: ["Popular", "LGBT"],
    copies: [
      {
        barcode: "00001",
        available: true,
        status: "normal",
        dueDate: "-",
        location: "main",
        value: 8.99,
        purDate: "03/05/2022",
      },
      {
        barcode: "00002",
        available: false,
        status: "on loan",
        dueDate: "13/06/2022",
        location: "main",
        value: 6.99,
        purDate: "27/05/2022",
      },
    ],
  },
  {
    refId: "00002",
    isbn: "0356515176",
    name: "Gideon the Ninth",
    author: [{ lastname: "Muir", firstname: "Tamsyn" }],
    series: [{ name: "The Locked Tomb", number: 1 }],
    genre: ["Fantasy", "Science Fiction"],
    fiction: true,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546870952l/42036538.jpg",
    description:
      "The Emperor needs necromancers. The Ninth Necromancer needs a swordswoman. Gideon has a sword, some dirty magazines, and no more time for undead bullshit. Brought up by unfriendly, ossifying nuns, ancient retainers, and countless skeletons, Gideon is ready to abandon a life of servitude and an afterlife as a reanimated corpse. She packs up her sword, her shoes, and her dirty magazines, and prepares to launch her daring escape. But her childhood nemesis won't set her free without a service. Harrowhark Nonagesimus, Reverend Daughter of the Ninth House and bone witch extraordinaire, has been summoned into action. The Emperor has invited the heirs to each of his loyal Houses to a deadly trial of wits and skill. If Harrowhark succeeds she will become an immortal, all-powerful servant of the Resurrection, but no necromancer can ascend without their cavalier. Without Gideon's sword, Harrow will fail, and the Ninth House will die. Of course, some things are better left dead. ",
    publocation: "London",
    pubyear: "2019",
    publisher: "Tor",
    edition: "",
    keywords: ["LGBT", "horror", "mystery"],
    categories: ["Popular", "LGBT", "Hugo Award Nominee 2020"],
    copies: [
      {
        barcode: "00001",
        available: true,
        status: "normal",
        dueDate: "-",
        location: "main",
        value: 9.99,
        purDate: "02/05/2022",
      },
    ],
  },
];

const template = {
  refId: "00001",
  isbn: "0356515176",
  name: "Mask of Mirrors",
  author: [{ lastname: "Carrick", firstname: "M.A." }],
  series: [{ name: "Rook & Rose", number: 1 }],
  genre: ["Fantasy", "Epic Fantasy"],
  fiction: true,
  image:
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590151669l/51340378._SY475_.jpg",
  description:
    "Fortune favors the bold. Magic favors the liars. Ren is a con artist who has come to the sparkling city of Nadežra with one goal: to trick her way into a noble house, securing her fortune and her sister's future. But as she's drawn into the elite world of House Traementis, she realizes her masquerade is just one of many surrounding her. And as nightmare magic begins to weave its way through the City of Dreams, the poisonous feuds of its aristocrats and the shadowy dangers of its impoverished underbelly become tangled…with Ren at their heart.",
  publocation: "London",
  pubyear: "2021",
  publisher: "Orbit",
  edition: "",
  keywords: ["LGBT", "epic", "high fantasy"],
  categories: ["Popular", "LGBT"],
  copies: [
    {
      barcode: "00001",
      available: true,
      status: "normal", //(lost, damaged, withdrawn, quarantined, on loan, , normal)
      dueDate: "-",
      location: "main",
      value: 8.99,
      purDate: "03/05/2022",
    },
  ],
};

// from folder db > seeds > seed_questions.js

console.log("Running Question Seeds...");
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('question').del()
    .then(() => {
      // Inserts seed entries
      return knex('question').insert([{
          context: "What's your favorite form of exercise?",
          optionA: 'Jogging',
          optionB: 'Swimming',
          optionC: 'Hiking/Climbing',
          optionD: 'Walking',
          gif_url: 'https://giphy.com/embed/EgkNhBeY289z2'
        },
        {
          context: "How would you spend a free day?",
          optionA: ' Planting in your garden',
          optionB: 'Organizing your closet',
          optionC: 'Shopping with your friend',
          optionD: 'Going to the movies',
          gif_url: 'https://giphy.com/embed/9r6FZQ5FI8CIYUpLEg'
        },
        {
          context: "Where will I find you at a party...?",
          optionA: 'I jump into party games',
          optionB: 'Play DJ, I bring the music',
          optionC: 'I make friends with the house pets',
          optionD: 'I try to start a conversation with someone',
          gif_url: 'https://giphy.com/embed/gImiuEnoNOmTm'
        },
        {
          context: "My Ideal Workspace Is...",
          optionA: 'My bed',
          optionB: 'An Art Studio',
          optionC: 'An Office',
          optionD: 'Anywhere I can get Wifi',
          gif_url: 'https://giphy.com/embed/dbtDDSvWErdf2'    //
        },
        {
          context: "What's your texting style?",
          optionA: 'Short',
          optionB: 'Full sentences with correct grammer',
          optionC: 'I just txt as quickly as pssible whtevr',
          optionD: 'Emoji city',
          gif_url: 'https://giphy.com/embed/3oEjHMrY1eFG566Jjy'
        }, 
        {
          context: "My Go-To Beverage Is...",
          optionA: 'Kombucha',
          optionB: 'Water',
          optionC: 'Beer me',
          optionD: 'Wine. Wine, and then more wine.',
          gif_url: 'https://giphy.com/embed/e6TR9n00dL3JS'
        }, 
        {
          context: "Which Words Best Describe You...?",
          optionA: 'Reliable and Easy Going',
          optionB: 'Dignified and Mysterious',
          optionC: 'Carefree and Creative',
          optionD: 'Modern and Stylish',
          gif_url: 'https://giphy.com/embed/ZBNLpSsFjHPeo'
        },
        {
          context: "What is a quote that inspires you?",
          optionA: 'Go Hard or Go Home',
          optionB: 'Fall In Love With Taking Care Of Yourself',
          optionC: 'Collect Memories Not Things',
          optionD: 'Hakuna matata',
          gif_url: 'https://giphy.com/embed/104ueR8J1OPM2s'
        }, 
        {
          context: "What's Your Favorite Kind of Vacation?",
          optionA: 'Beach',
          optionB: 'Cultural',
          optionC: 'Amusement Park',
          optionD: 'Active',
          gif_url: 'https://giphy.com/embed/xqsbYoFMzUzfy'
        }, 
        {
          context: 'Pick a Food',
          optionA: ' Burger',
          optionB: 'Pad Thai',
          optionC: ' Sushi',
          optionD: 'Tacos',
          gif_url: 'https://giphy.com/embed/1rPVq3R9acPilzfLZO'
        },
        {
          context: "What Is Your Spirit Animal?",
          optionA: 'Horse',
          optionB: 'Peacock',
          optionC: 'Corgi',
          optionD: 'Doggie',
          gif_url: 'https://giphy.com/embed/1r91mystCQ6TmzyRUz'
        }, 
        {
          context: "What are your typical mornings like?",
          optionA: ' Hittng the gym and then off to work',
          optionB: 'Blasting music while I shower and get ready',
          optionC: 'Taking my time to make breakfast and head out on time',
          optionD: 'Rolling out of bed and running to work',
          gif_url: 'https://giphy.com/embed/DrJm6F9poo4aA'
        }, 
        {
          context: "It's your last meal on earth. What do you crave?",
          optionA: 'Avocado, avocado, avocado. On anything really',
          optionB: 'Cheese, glorious cheese',
          optionC: 'Sugar',
          optionD: 'Steak',
          gif_url: 'https://giphy.com/embed/oiGCnybFPh6Q8'
        }, 
        {
          context: "How would your friends describe your personal wardrobe style?",
          optionA: 'Some have described my style as hipster',
          optionB: 'The styles vary, but everything is neat, labeled, and organized',
          optionC: 'A decent amount of swag',
          optionD: 'Shirts. Pants. The basics.',
          gif_url: 'https://giphy.com/embed/leSaom8qAgopi'
        }, 
        {
          context: "Which member of your friend group are you ?" ,
          optionA: 'The Leader',
          optionB: 'The Good Friend',
          optionC: 'The Funny One',
          optionD: ' The Smart One',
          gif_url: 'https://giphy.com/embed/l1J9Llv1ztqa8cjZe'
        }, 
        {
          context: 'How do you want to impact the world?',
          optionA: 'By doing good',
          optionB: 'By inventing something new',
          optionC: ' By leaving my mark on it',
          optionD: 'By creating an empire!',
          gif_url: 'https://giphy.com/embed/xL7PDV9frcudO'
        }, 
        {
          context: 'Pick a Favorite TV Show...',
          optionA: 'Mad Men',
          optionB: 'Game of Thrones',
          optionC: 'This Is Us',
          optionD: 'Seinfeld',
          gif_url: 'https://giphy.com/embed/3o85xx8dDpwLQu6B20'
        }, 
        {
          context: 'Which is your favorite holiday?',
          optionA: 'Winter Break',
          optionB: 'Thanksgiving',
          optionC: 'Halloween',
          optionD: 'May 2-4',
          gif_url: 'https://media.giphy.com/media/5ocAtoAPhIDcI/giphy.gif'
        }, 
        {
          context: 'Pick a game',
          optionA: 'Settlers of catan',
          optionB: 'Poker',
          optionC: 'Billiards ',
          optionD: 'Cranium',
          gif_url: 'https://giphy.com/embed/5ocAtoAPhIDcI'
        },
        {
          context: 'If you were to have a theme party, what would the theme be?',
          optionA: 'Roaring 20s',
          optionB: 'Does beer count as a theme?',
          optionC: 'A comic book or cartoon character',
          optionD: 'Ugly sweater',
          gif_url: 'https://giphy.com/embed/kqxb52SLORk6A'
        }
      ]);
    });
};
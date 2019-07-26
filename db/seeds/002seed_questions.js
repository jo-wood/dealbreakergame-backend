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
          optionD: 'Walking'
        },
        {
          context: "How would you spend a free day?",
          optionA: ' Planting in your garden',
          optionB: 'Organizing your closet',
          optionC: 'Shopping with your friend',
          optionD: 'Going to the movies'
        },
        {
          context: "Where will I find you at a party...?",
          optionA: 'I jump into party games',
          optionB: 'Play DJ, I bring the music',
          optionC: 'I make friends with the house pets',
          optionD: 'I try to start a conversation with someone'
        },
        {
          context: "My Ideal Workspace Is...",
          optionA: 'My bed',
          optionB: 'An Art Studio',
          optionC: 'An Office',
          optionD: 'Anywhere I can get Wifi'
        },
        {
          context: "What's your texting style?",
          optionA: 'Short',
          optionB: 'Full sentences with correct grammer',
          optionC: 'I just txt as quickly as pssible whtevr',
          optionD: 'Emoji city'
        }, 
        {
          context: "My Go-To Beverage Is...",
          optionA: 'Kombucha',
          optionB: 'Water',
          optionC: 'Beer me',
          optionD: 'Wine. Wine, and then more wine.'
        }, 
        {
          context: "Which Words Best Describe You...?",
          optionA: 'Reliable and Easy Going',
          optionB: 'Dignified and Mysterious',
          optionC: 'Carefree and Creative',
          optionD: 'Modern and Stylish'
        },
        {
          context: "What is a quote that inspires you?",
          optionA: 'Go Hard or Go Home',
          optionB: 'Fall In Love With Taking Care Of Yourself',
          optionC: 'Collect Memories Not Things',
          optionD: 'Hakuna matata'
        }, 
        {
          context: "What's Your Favorite Kind of Vacation?",
          optionA: 'Beach',
          optionB: 'Cultural',
          optionC: 'Amusement Park',
          optionD: 'Active'
        }, 
        {
          context: 'Pick a Food',
          optionA: ' Burger',
          optionB: 'Pad Thai',
          optionC: ' Sushi',
          optionD: 'Tacos'
        },
        {
          context: "What Is Your Spirit Animal?",
          optionA: 'Horse',
          optionB: 'Peacock',
          optionC: 'Corgi',
          optionD: 'Doggie'
        }, 
        {
          context: "What are your typical mornings like?",
          optionA: ' Hittng the gym and then off to work',
          optionB: 'Blasting music while I shower and get ready',
          optionC: 'Taking my time to make breakfast and head out on time',
          optionD: 'Rolling out of bed and running to work'
        }, 
        {
          context: "It's your last meal on earth. What do you crave?",
          optionA: 'Avocado, avocado, avocado. On anything really',
          optionB: 'Cheese, glorious cheese',
          optionC: 'Sugar',
          optionD: 'Steak'
        }, 
        {
          context: "How would your friends describe your personal wardrobe style?",
          optionA: 'Some have described my style as hipster',
          optionB: 'The styles vary, but everything is neat, labeled, and organized',
          optionC: 'A decent amount of swag',
          optionD: 'Shirts. Pants. The basics.'
        }, 
        {
          context: "Which member of your friend group are you ?" ,
          optionA: 'The Leader',
          optionB: 'The Good Friend',
          optionC: 'The Funny One',
          optionD: ' The Smart One'
        }, 
        {
          context: 'How do you want to impact the world?',
          optionA: 'By doing good',
          optionB: 'By inventing something new',
          optionC: ' By leaving my mark on it',
          optionD: 'By creating an empire!'
        }, 
        {
          context: 'Pick a Favorite TV Show...',
          optionA: 'Mad Men',
          optionB: 'Game of Thrones',
          optionC: 'This Is Us',
          optionD: 'Seinfeld'
        }, 
        {
          context: 'Which is your favorite holiday?',
          optionA: 'Winter Break',
          optionB: 'Thanksgiving',
          optionC: 'Halloween',
          optionD: 'May 2-4'
        }, 
        {
          context: 'Pick a game',
          optionA: 'Settlers of catan',
          optionB: 'Poker',
          optionC: 'Billiards ',
          optionD: 'Cranium'
        },
        {
          context: 'If you were to have a theme party, what would the theme be?',
          optionA: 'Roaring 20s',
          optionB: 'Does beer count as a theme?',
          optionC: 'A comic book or cartoon character',
          optionD: 'Ugly sweater'
        }
      ]);
    });
};
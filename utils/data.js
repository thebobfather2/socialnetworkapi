const userData = [
  {
      username: 'bap0006',
      email: 'bryanandrewpike@gmail.com',
      _id: '640a58b6adfc7126a813f7b6'
  },
  {
      username: 'bob123',
      email: 'bob123@mail.com',
      _id: '61b6c468f27f350a154ebdc2'
  },
  {
      username: 'Susan',
      email: 'susan@yahoo.com',
      _id: '61b6c468f27f350a154ebdf6'
  }
]

const thoughtsData = [
  {
      _id: '640a58b6adfc7126a813f7b6',
      thoughtText: "Homework is hard!",
      username: "bap0006",
      createdAt: "4/15/2023, 3:20:32 PM",
      reactions: [
          {
              reactionBody: "Yes it sure is!",
              username: "bob123"
          }
      ]
  },
  {
      _id: '640a58b6adfc7126a813f7c2',
      thoughtText: "Only one day left of class",
      username: "bob123",
      createdAt: "4/16/2023, 1:20:10 PM",
      reactions: [
          {
              reactionBody: "Yay!",
              username: "bap006"
          },
          {
              reactionBody: "Let's gooo",
              username: "Susan"
          }
      ]
  },
]

module.exports = { userData, thoughtsData };

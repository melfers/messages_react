import { observable, action } from "mobx";

var appState = observable({
  conversations: [
    {
      id: 1,
      participants: [
        {
          id: 1,
          name: "Molly Elfers",
          picture: "images/user.svg"
        },
        {
          id: 2,
          name: "Steven Petryk",
          picture: "images/user.svg"
        }
      ],
      messages: [
        {
          sentAt: "",
          sender: {
            id: 1,
            name: "Molly Elfers",
            picture: "images/user.svg"
          },
          content: "Hi Steven!"
        },
        {
          sentAt: "",
          sender: {
            id: 2,
            name: "Steven Petryk",
            picture: "images/user.svg"
          },
          content: "Hi Molly"
        },
        {
          sentAt: "",
          sender: {
            id: 1,
            name: "Molly Elfers",
            picture: "images/user.svg"
          },
          content: "Hi Steven!"
        },
        {
          sentAt: "",
          sender: {
            id: 2,
            name: "Steven Petryk",
            picture: "images/user.svg"
          },
          content: "Hi Molly"
        },
        {
          sentAt: "",
          sender: {
            id: 1,
            name: "Molly Elfers",
            picture: "images/user.svg"
          },
          content: "Hi Steven!"
        },
        {
          sentAt: "",
          sender: {
            id: 2,
            name: "Steven Petryk",
            picture: "images/user.svg"
          },
          content: "Hi Molly"
        },
        {
          sentAt: "",
          sender: {
            id: 1,
            name: "Molly Elfers",
            picture: "images/user.svg"
          },
          content: "Hi Steven!"
        },
        {
          sentAt: "",
          sender: {
            id: 2,
            name: "Steven Petryk",
            picture: "images/user.svg"
          },
          content: "Hi Molly"
        },
        {
          sentAt: "",
          sender: {
            id: 1,
            name: "Molly Elfers",
            picture: "images/user.svg"
          },
          content: "Hi Steven!"
        },
        {
          sentAt: "",
          sender: {
            id: 2,
            name: "Steven Petryk",
            picture: "images/user.svg"
          },
          content: "Hi Molly"
        },
        {
          sentAt: "",
          sender: {
            id: 1,
            name: "Molly Elfers",
            picture: "images/user.svg"
          },
          content: "Hi Steven!"
        },
        {
          sentAt: "",
          sender: {
            id: 2,
            name: "Steven Petryk",
            picture: "images/user.svg"
          },
          content: "Hi Molly"
        },
        {
          sentAt: "",
          sender: {
            id: 1,
            name: "Molly Elfers",
            picture: "images/user.svg"
          },
          content: "Hi Steven!"
        },
        {
          sentAt: "",
          sender: {
            id: 2,
            name: "Steven Petryk",
            picture: "images/user.svg"
          },
          content: "Hi Molly"
        }
      ]
    },
    {
      id: 2,
      participants: [
        {
          id: 3,
          name: "Kayleigh Foley",
          picture: "images/user.svg"
        },
        {
          id: 2,
          name: "Steven Petryk",
          picture: "images/user.svg"
        }
      ],
      messages: []
    }
  ],
  selectedConversation: 1
});

appState.setSelectedConversation = action(convoId => {
  appState.selectedConversation = convoId;
});

appState.addNewMessage = action((message, convoId) => {
  appState.conversations
    .find(conversation => convoId == conversation.id)
    .messages.push(message);
});

export default appState;

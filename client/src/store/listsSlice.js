import { createSlice } from '@reduxjs/toolkit'

let listId = 3;

export const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        users: [
            {
                userId: 1234,
                name: "John",
                email: "userJohn@mail.ru"
            },
            {
                userId: 2240,
                name: "Steve",
                email: "userSteve@mail.ru"
            },
            {
                userId: 3350,
                name: "Nick",
                email: "userNick@mail.ru"
            },
            {
                userId: 4450,
                name: "Pedro Hulio",
                email: "userPedroHulio@mail.ru"
            },
        ],

        lists: [
            {
                title: "IN PROGRESS",
                listId: 0,
                cards: [
                    {
                        usersCard: [
                            1234,
                            2240,
                            3350
                        ],
                        id: 3724585,
                        text: "class ",
                        description: "description 1",
                        time: "10.03.2022 21:36"
                    },
                    {
                        usersCard: [
                            1234,
                            2240
                        ],
                        id: 8757487,
                        text: "created static 2",
                        description: "description 2",
                        time: "10.03.2022 21:36"
                    },
                    {
                        usersCard: [
                                         
                        ],
                        id: 8743098,
                        text: "created static 3",
                        description: "description 3",
                        time: "10.03.2022 21:36"
                    },
                    {
                        usersCard: [
                            1234,
                            2240
                        ],
                        id: 8787779, 
                        text: "created static 4",
                        description: "description 4",
                        time: "10.03.2022 21:36"
                    },
                ]
            },
            {
                title: "TO DO",
                listId: 1,
                cards: [
                    {
                        usersCard: [
                            1234,
                            2240,
                            3350
                        ],
                        id: 5465765,
                        text: "created static 1",
                        description: "description 1",
                        time: "10.03.2022 21:36"
                    },
                    {
                        usersCard: [
                            1234,
                            2240
                        ],
                        id: 21334344,
                        text: "created static 2",
                        description: "description 2",
                        time: "10.03.2022 21:36"
                    },
                    {
                        usersCard: [
                            1234,
                            2240
                        ],
                        id: 34656723,
                        text: "created static 3",
                        description: "description 3",
                        time: "10.03.2022 21:36"
                    },
                    {
                        usersCard: [
                            1234,
                            2240
                        ],
                        id: 56324235,
                        text: "created static 4",
                        description: "description 4",
                        time: "10.03.2022 21:36"
                    },
                    {
                        usersCard: [
                            1234,
                            2240
                        ],
                        id: 2436653,
                        text: "created static 5",
                        description: "description 5",
                        time: "10.03.2022 21:36"
                    }
                ]
            },
            {
                title: "TO DO2",
                listId: 2,
                cards: [
                    {
                        usersCard: [
                            1234,
                            2240
                        ],
                        userId: 0,
                        id: 7654325,
                        text: "created static 6",
                        description: "description 6",
                        time: "10.03.2022 21:36"
                    },
                    {
                        usersCard: [
                            1234,
                            2240
                        ],
                        id: 4665734,
                        text: "created static 7",
                        description: "description 7",
                        time: "10.03.2022 21:36"
                    },

                ]
            },
        ]
    },
    reducers: {
        sort(state, action) {
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                type,
                move
            } = action.payload;

            if (type === "list") {
                const list = state.lists.splice(+droppableIndexStart, 1);
                state.lists.splice(+droppableIndexEnd, 0, ...list)
            }

            if (move === true) {
                const indexCardStart = state.lists[action.payload.indexStart].cards.findIndex(card => card.id === action.payload.id)
                const moveCard = state.lists[action.payload.indexStart].cards.splice(indexCardStart, 1)
                const indexCardEnd = state.lists[action.payload.indexEnd]  
                indexCardEnd.cards.push(...moveCard)
            }

            if (droppableIdStart !== "all-lists" && droppableIdStart === droppableIdEnd && move !== true) {
                const list = state.lists.find((list) => +droppableIdStart === list.listId)
                const card = list.cards.splice(+droppableIndexStart, 1)
                list.cards.splice(+droppableIndexEnd, 0, ...card)
            }

            if (droppableIdStart !== droppableIdEnd) {
                const listStart = state.lists.find((list) => +droppableIdStart === list.listId)
                const card = listStart.cards.splice(+droppableIndexStart, 1)
                const listEnd = state.lists.find((list) => +droppableIdEnd === list.listId)
                listEnd.cards.splice(+droppableIndexEnd, 0, ...card)
            }
        },

        addList(state, action) {
            const newList = {
                title: action.payload.text,
                listId: listId,
                cards: []
            }
            listId += 1
            state.lists.push(newList)
        },

        addCard(state, action) {
            const newCard = {
                usersCard: [],
                id: Date.now(),
                text: action.payload.text,
                description: action.payload.desc,
                time: action.payload.time,        
            }
            state.lists[action.payload._id].cards.push(newCard)
        },

        changeCardDate(state, action) {
            state.lists[action.payload.indexList].cards = state.lists[action.payload.indexList].cards.map(card => ({
                ...card,
                text: card.id === action.payload.id ? action.payload.text : card.text,
                description: card.id === action.payload.id ? action.payload.desc : card.description
            }))
        },

        changeListTitle(state, action) {
            state.lists[action.payload._id].title = action.payload.titleText
        },

        deleteUser(state, action) {
            state.lists[action.payload.indexList].cards[action.payload.indexCard].usersCard = 
            state.lists[action.payload.indexList].cards[action.payload.indexCard].usersCard.filter((elem) => {return elem !== action.payload.id})
        },
        addUser(state, action) {
            if(!state.lists[action.payload.indexList].cards[action.payload.indexCard].usersCard.find(user => user === action.payload.id)){
                state.lists[action.payload.indexList].cards[action.payload.indexCard].usersCard.push(action.payload.id) 
            }      
        },
        createUser(state, action) {           
            const newUser = {
                userId: Date.now(),
                name: action.payload.name,
                email: action.payload.email
            }
            state.users.push(newUser)
        }
    },
})

export const { addList, addCard, sort, changeCardDate, changeListTitle, deleteUser, addUser, createUser } = listsSlice.actions
export default listsSlice.reducer;


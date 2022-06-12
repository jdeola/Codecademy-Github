import { createSlice } from '@reduxjs/toolkit';


export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state,action) => {
            let {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            };
        },

        addQuizIdToTopic: (state,action) => {
            let {topicId, quizId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
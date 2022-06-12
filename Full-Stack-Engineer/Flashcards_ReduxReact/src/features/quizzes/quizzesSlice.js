import { createSlice } from '@reduxjs/toolkit';
import { addQuizIdToTopic } from '../topics/topicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            let { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {
                id: id,
                topicId: topicId,
                name: name,
                cardIds: cardIds
            };
        }
    }
});

// thunk to add topicId to new quiz upon creation
export const addTopicIdToQuiz = (quiz) => {
    let {id, topicId} = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdToTopic({quizId:id, topicId: topicId}));
    };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

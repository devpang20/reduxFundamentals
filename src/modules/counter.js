/**
 * module name/action name
 */
 const INCREASE = 'counter/INCRESE';
 const DECREASE = 'counter/DECRASE';
 
 export const increase = () => ({ type: INCREASE })
 export const decrease = () => ({ type: DECREASE })

 const intialState = {
     number: 0
 };

 function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            }    
        default:
            return state;
    }
 }

 export default counter;
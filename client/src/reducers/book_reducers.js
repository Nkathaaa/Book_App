export default function (state={},action)
{
    switch(action.type)
    {
        
        case "GET_BOOKS":
            return{
                ...state,list:action.payload
            }
            case "GET_REVIEWER_WITH_ID":
                return{
                    ...state,
                    book:action.payload.book,
                    reviewer:action.payload.reviewer
                }
                case "CLEAR_REVIEWER_OF":
                return{
                    ...state,
                    book:action.payload.book,
                    reviewer:action.payload.reviewer
                }
        default:
            return state;
            
    }
}



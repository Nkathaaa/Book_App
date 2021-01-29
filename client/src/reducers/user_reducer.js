export default function(state={},action)
{
    switch(action.type)
    {
        case'LOGIN_USER':
        return {
            ...state,login:action.payload
        }
        case'AUTH':
        return{
            ...state,login:action.payload
        }
        case 'GETUSERPOSTS':
        return{
                ...state,
                books:action.payload
            }
        default:
            return state;
            
    }
}

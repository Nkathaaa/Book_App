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
                userPosts:action.payload
            }

        case "USERADD":
        return{

               ...state,
               register:action.payload.success,
               users:action.payload.users
        } 
        case "ALLUSERS":
        return{
            ...state,
            AllUsers:action.payload
        }      
        default:
            return state;

            
    }
}

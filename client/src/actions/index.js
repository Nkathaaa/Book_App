import axios from "axios";




export function getBooks
(
   
    limit=3,
    start=0,
    order="asc",
    list=''

)

{
                const request=axios.get(`/api/getAllBooks?limit=${limit}&skip=${start}&order=${order}`)
                .then(response=>{
                  if(list)
                    return {...list,...response.data}
                  else
                    return response.data   
                })
                return  { type:'GET_BOOKS',
                          payload:request
                                
                        }
}


export function  getReviewerWithId(id)
{
      const request=axios.get(`/api/getBook/?id=${id}`)
        

      return (dispatch)=>{
        request.then(({data})=>{
            let book = data;
      axios.get(`/api/getReviewer?id=${book.ownerId}`)
      .then(({data})=>{
        const response={
          book,
          reviewer:data
        }
        dispatch({
           type:"GET_REVIEWER_WITH_ID",
           payload:response

        })
      })
      })
      }
  }
  
   

export function clearReviewerOfId()
{
  return{
    type:"CLEAR_REVIEWER_OF",
    payload:{
      book:{},
      reviewer:{}
    }
  }
}

export function LoginUser({email,password})
{
  const request=axios.post('/api/login',{email,password})
  .then(response=>response.data)

  return{
    type:"LOGIN_USER",
    payload:request
   
  }
}

export function auth()
{
  const request=axios.get('/api/auth')
  .then(response=>response.data)
  return{
    type:"AUTH",
    payload:request
  }
}
export function AddBook(book)
{
  const request=axios.post('/api/book',book)
  .then(response=>response.data)
  return{
    type:"ADDBOOK",
    payload:request
  }
}

export function ClearBookView()
{
 return{
   type:"CLEAR_BOOK_VIEW",
   payload:{}
 }
}

export function GetUserPosts(userId)
{
  const request=axios.get(`/api/getUserPosts?user=${userId}`)
  .then(response=>response.data)
  return{
    type:"GETUSERPOSTS",
    payload:request
  }
}


export function GetBook(id){
  const request=axios.get(`/api/getBook?id=${id}`)
  .then(response=>response.data)
  return{
    type:"GETBOOK",
    payload:request
  }
}

export function UpdatePosts(bookId)
{
  const request=axios.post(`/api/bookUpdate?book=${bookId}`)
  .then(response=>response.data)
  return{
    type:"UPDATEPOST",
    payload:request
  }
}

export function DeletePosts(bookId)
{
  const request=axios.get(`/api/bookDelete?book=${bookId}`)
  .then(response=>response.data)
  return{
    type:"DELETEPOST",
    payload:request
  }
}
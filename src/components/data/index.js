const photos = [
    'https://picsum.photos/id/237/200/200',
    'https://picsum.photos/id/238/200/200',
    'https://picsum.photos/id/239/200/200',
    'https://picsum.photos/id/231/200/200',
    'https://picsum.photos/id/232/200/200',
    'https://picsum.photos/id/233/200/200',
    'https://picsum.photos/id/234/200/200',
    'https://picsum.photos/id/229/200/200',
    'https://picsum.photos/id/228/200/200',
    'https://picsum.photos/id/222/200/200',
    'https://picsum.photos/id/221/200/200',
    'https://picsum.photos/id/223/200/200',
    'https://picsum.photos/id/241/200/200',
    'https://picsum.photos/id/225/200/200',
    'https://picsum.photos/id/200/200/200',
    'https://picsum.photos/id/227/200/200',
]

export default photos;

export let initialState={
    items:[],
    isCollaps:false,
    inputs:{ title: "", file: "", path: '' },
  }
  
  export const reducer=(state, action)=>{
   switch(action.type){
    case "SET_ITEM":
      return {...state, items:action.payload}
    case "SET_INPUT":
      return {...state, inputs:action.payload}
    case "IS_COLLAPS":
      return {...state, isCollaps:action.payload}    
    default:
      return state  
   }
  }

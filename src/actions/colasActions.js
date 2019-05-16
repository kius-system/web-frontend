import {FETCH_COLAS, NEW_COLA, SET_ACTIVE_CELL} from './types'
export const fetchColas = ()=>dispatch=>{
  fetch('http://my-json-server.typicode.com/jnfrati/json-server/colas')
  .then(res=>res.json())
  .then(colas=>dispatch({
    type:FETCH_COLAS,
    payload:colas
  }))
}

export const newCola = (colaData) => dispatch =>{
  fetch('http://my-json-server.typicode.com/jnfrati/json-server/colas',{
    method:'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(colaData)
  }).then(res=>res.json())
  .then(nuevaCola => dispatch({
    type:NEW_COLA,
    payload: nuevaCola
  }))
}

export const setActiveCell = (hora,dia) => dispatch =>{
  dispatch({
    type: SET_ACTIVE_CELL,
    payload:{hora, dia}
  })
}
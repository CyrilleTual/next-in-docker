import React from 'react'

type Params = {
    params: {
        id:string,
        idPost : string,
    }
}

export default function PostById({params}: Params) {
  return (
    <div>PostById profile {params.id} post n°{params.idPost}</div>
  )
}

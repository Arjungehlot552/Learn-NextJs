import React from 'react'

const page = ({params}) => {

    console.log(params)
    return (
        <div>
            <h1>The id of the account is : {params.id}</h1>
            This is my dynamic user profile account page user can mannual edit id
            <br></br>
            and Check profile according to there id.
        </div>
    )
}

export default page

import React from 'react'

function UnitPrice({unitPrice}) {
    
    console.log(`Rendering unit price component`)

    return (
        <div className="unitPrice">
           Unit Price: {unitPrice} Euros 
        </div>
    )
}


export default  React.memo( UnitPrice )


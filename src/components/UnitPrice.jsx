import React from 'react'

function UnitPrice({unitPrice}) {
    
    console.log(`Rendering unit price component`)

    return (
        <div className="unitPrice">
           Unit Price: {unitPrice} Euros 
        </div>
    )
}

//step 1
//export default  UnitPrice

//step 2.. change it only when state or props change
export default  React.memo(UnitPrice)

import React from 'react'

 function TotalPrice({unitPrice, quantity}) {

    console.log(`Rendering Total Price Component`)
    
    
    return (
        <div className="totalCost">
            Total Cost: {unitPrice*quantity}
        </div>
    )
 }

    
export default  React.memo(TotalPrice,(prevProps,nextProps) =>{
    if(prevProps.unitPrice === nextProps.unitPrice &&
        prevProps.quantity === nextProps.quantity )
        return true
    else 
        return false
    }) 

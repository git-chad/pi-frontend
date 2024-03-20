import React from 'react'

const productInformation = ({ product }) => {
  return (
    <>
      <div>
        <p className="leading-[1.6] text-red-400 opacity-85 font-bold aeonik text-3xl pl-10">
          Price: {product?.price} credits
        </p>
      </div>
      <div>
        <p className="leading-[1.6] text-slate-100 aeonik text-s pl-10">
          <b>Description:</b> {product?.description}
        </p>
      </div>
    </>
  )
}

export default productInformation
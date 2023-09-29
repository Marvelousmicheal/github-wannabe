import React from 'react'

type Props = {
    text:string
}

function Span({text}: Props) {
  return (
    <>
    <span className="text-neutral-500 font-semibold text-base capitalize">
              {text}
            </span>

    </>
  )
}

export default Span
'use client'

import React, { JSX } from 'react'
import { useRotatingSpinner } from '../hooks/useRotatingSpinner'

function Samosa({ isRotating }: { isRotating?: boolean }): JSX.Element {
  return (
    <img
      src="/images/fb.png"
      alt={isRotating ? 'Rotating Samosa' : 'Samosa'}
      className={`w-[300px] h-[300px] ${isRotating ? 'animate-spin-slow' : ''}`}
      role="img"
    />
  )
}

export default function Spinner(): JSX.Element {
  const isRotating = useRotatingSpinner()
  return (
    <div className="relative w-[300px] h-[300px]">
      <Samosa isRotating={isRotating} />
    </div>
  )
}
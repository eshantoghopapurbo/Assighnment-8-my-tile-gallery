"use client"

import { Spinner } from "@heroui/react"

export default function Loading() {
  // Or a custom loading skeleton component
  return    <div className="flex justify-center items-center h-screen">
        
      <Spinner size="xl" />
    </div>
}
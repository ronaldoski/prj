"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"

interface ZoomCardProps {
  title: string
  description: string
  buttonText?: string
  imageSrc?: string | StaticImageData // Optionnel : chemin de l'image
  imageAlt?: string // Optionnel : texte alternatif
  detailedInfo?: {
    subtitle?: string
    fullDescription?: string
    features?: string[]
    additionalContent?: React.ReactNode
  }
}

export function ZoomCard({
  title,
  description,
  buttonText = "View Details",
  imageSrc,
  imageAlt = "",
  detailedInfo = {},
}: ZoomCardProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  // Default values for detailed info if not provided
  const {
    subtitle = "Additional Information",
    fullDescription = description,
    features = [],
    additionalContent,
  } = detailedInfo

  return (
    <>
      {/* Compact Card */}
      <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-md">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {imageSrc && (
            <div className="relative w-full h-40 mb-3">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="rounded-lg object-cover"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, 400px"
                priority={false}
              />
            </div>
          )}
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsZoomed(true)}>{buttonText}</Button>
        </CardFooter>
      </Card>

      {/* Zoomed/Detailed Card Overlay */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            // Close when clicking the backdrop, but not when clicking the card
            if (e.target === e.currentTarget) setIsZoomed(false)
          }}
        >
          <div className="animate-zoom-in w-full max-w-4xl max-h-[90vh] overflow-auto">
            <Card className="shadow-xl">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                  <CardDescription className="text-lg mt-1">{subtitle}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsZoomed(false)}
                  aria-label="Close detailed view"
                  className="shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {imageSrc && (
                  <div className="relative w-full mb-4" style={{ height: "320px" }}>
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="rounded-xl object-cover"
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 1024px) 100vw, 600px"
                      priority={false}
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-medium mb-2">Overview</h3>
                  <p className="text-muted-foreground">{fullDescription}</p>
                </div>

                {features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {features.map((feature, index) => (
                        <li key={index} className="text-muted-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {additionalContent && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Additional Information</h3>
                    {additionalContent}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={() => setIsZoomed(false)}>Close</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}

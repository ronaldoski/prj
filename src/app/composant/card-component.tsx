"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface CardComponentProps {
  id: string
  title: string
  description: string
  buttonText?: string
}

export function CardComponent({ id, title, description, buttonText = "View Details" }: CardComponentProps) {
  const handleOpenDetailedView = () => {
    // Encode the data to be passed via URL parameters
    const params = new URLSearchParams({
      id,
      title,
      description,
    }).toString()

    // Open a new window with the detailed view
    window.open(`/card-detail?${params}`, `card_${id}`, "width=800,height=600,resizable=yes,scrollbars=yes")
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleOpenDetailedView}>{buttonText}</Button>
      </CardFooter>
    </Card>
  )
}
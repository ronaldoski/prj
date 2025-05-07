"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function CardDetailPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const title = searchParams.get("title")
  const description = searchParams.get("description")

  // Set the window title
  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  // Additional details based on card ID
  const getAdditionalDetails = (id: string | null) => {
    switch (id) {
      case "1":
        return {
          subtitle: "Comprehensive Product Features",
          details:
            "Our product includes a robust set of features designed to streamline your workflow and boost productivity. With intuitive controls, customizable settings, and seamless integration with your existing tools, you'll experience immediate improvements in efficiency.",
          features: [
            "Intuitive user interface",
            "Customizable dashboards",
            "Real-time analytics",
            "Automated reporting",
            "Cross-platform compatibility",
          ],
        }
      case "2":
        return {
          subtitle: "Detailed Pricing Information",
          details:
            "Our pricing structure is designed to be transparent and flexible. Choose from monthly or annual billing cycles, with significant discounts for yearly commitments. All plans include core features, with premium tiers offering advanced capabilities for growing businesses.",
          features: [
            "Free starter plan",
            "Professional plan: $29/month",
            "Business plan: $99/month",
            "Enterprise plan: Custom pricing",
            "30-day money-back guarantee",
          ],
        }
      case "3":
        return {
          subtitle: "Customer Support Options",
          details:
            "Our customer support team is available through multiple channels including live chat, email, and phone. Premium support is available 24/7 for urgent issues, with guaranteed response times based on your service level agreement.",
          features: [
            "24/7 live chat support",
            "Email support with 4-hour response time",
            "Phone support for premium customers",
            "Extensive knowledge base",
            "Video tutorials and webinars",
          ],
        }
      default:
        return {
          subtitle: "Additional Information",
          details: "More details about this item will be available soon.",
          features: [],
        }
    }
  }

  const additionalInfo = getAdditionalDetails(id)

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-lg">{additionalInfo.subtitle}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Overview</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Detailed Information</h3>
            <p className="text-muted-foreground">{additionalInfo.details}</p>
          </div>

          {additionalInfo.features.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-2">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {additionalInfo.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Related Resources</h3>
              <p className="text-sm text-muted-foreground">
                Check out our documentation, tutorials, and community forums for more information.
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                Contact our support team for personalized assistance with any questions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

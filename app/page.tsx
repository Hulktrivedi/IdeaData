import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Database, Network, Brain } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Database className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Idea Datamatics</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Transforming Data into Insights
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Idea Datamatics empowers businesses with cutting-edge data solutions and analytics to drive informed decision-making.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Database className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle>Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive data storage, integration, and governance solutions for your business.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Turn your data into actionable insights with our advanced analytics and visualization tools.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle>AI & Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Leverage the power of AI and machine learning to automate processes and predict trends.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Network className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle>Data Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Build robust, scalable data infrastructure to support your growing data needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Harness Your Data?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let%apos;s discuss how Idea Datamatics can help you unlock the full potential of your data.
                </p>
              </div>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Idea Datamatics. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

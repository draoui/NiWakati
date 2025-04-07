import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users, Utensils, Coffee } from "lucide-react"
import { CookingWorkshopForm } from "@/components/cooking-workshop-form"

export default function CookingWorkshops() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1000"
          alt="Ateliers culinaires"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Ateliers Culinaires</h1>
            <p className="text-xl">Découvrez et partagez les saveurs du monde</p>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">À propos des ateliers</h2>
              <p className="mb-4">
                Nos ateliers culinaires sont des moments de partage et de découverte où
                chacun peut apprendre et transmettre ses connaissances culinaires. C'est
                l'occasion de découvrir de nouvelles saveurs et de créer des liens à
                travers la cuisine.
              </p>
              <p className="mb-4">
                Chaque atelier est animé par un membre de la communauté qui partage les
                recettes de son pays d'origine, permettant ainsi un véritable échange
                culturel autour de la gastronomie.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="mt-4">
                    Participer à un atelier
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <CookingWorkshopForm />
                </DialogContent>
              </Dialog>
            </div>
            
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Informations pratiques</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-primary" />
                  <span>Un lundi sur deux</span>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  <span>De 10h00 à 14h00</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  <span>Maison de la Laïcité d'Esneux-Tilff, Avenue d'Esneux 216A, 4130 Esneux</span>
                </li>
                <li className="flex items-center">
                  <Users className="mr-3 h-5 w-5 text-primary" />
                  <span>20 participants maximum par atelier</span>
                </li>
                <li className="flex items-center">
                  <Coffee className="mr-3 h-5 w-5 text-primary" />
                  <span>Possibilité de venir uniquement manger sur le temps de midi</span>
                </li>
                <li className="flex items-center">
                  <Utensils className="mr-3 h-5 w-5 text-primary" />
                  <span>Matériel et ingrédients fournis</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="bg-secondary/30 py-12">
        <div className="container px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Prochains ateliers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{workshop.title}</h3>
                  <p className="mb-4 text-muted-foreground">{workshop.description}</p>
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span className="text-sm">{workshop.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span className="text-sm">{workshop.places} places disponibles</span>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">S'inscrire</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <CookingWorkshopForm />
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="container px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Galerie photos</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map((photo, index) => (
              <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const upcomingWorkshops = [
  {
    title: "Cuisine Syrienne",
    description: "Découvrez les saveurs du Moyen-Orient",
    date: "Lundi 15 avril 2024",
    places: 8,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000",
  },
  {
    title: "Spécialités Congolaises",
    description: "Initiation à la cuisine d'Afrique centrale",
    date: "Lundi 29 avril 2024",
    places: 6,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
  },
  {
    title: "Pâtisseries Marocaines",
    description: "Apprenez à faire des pâtisseries traditionnelles",
    date: "Lundi 13 mai 2024",
    places: 10,
    image: "https://images.unsplash.com/photo-1558401391-7899b4bd6a4e?q=80&w=1000",
  },
]

const gallery = [
  {
    url: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1000",
    alt: "Atelier cuisine 1",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
    alt: "Atelier cuisine 2",
  },
  {
    url: "https://images.unsplash.com/photo-1558401391-7899b4bd6a4e?q=80&w=1000",
    alt: "Atelier cuisine 3",
  },
  {
    url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000",
    alt: "Atelier cuisine 4",
  },
  {
    url: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1000",
    alt: "Atelier cuisine 5",
  },
  {
    url: "https://images.unsplash.com/photo-1551218372-8a26d077b09c?q=80&w=1000",
    alt: "Atelier cuisine 6",
  },
]
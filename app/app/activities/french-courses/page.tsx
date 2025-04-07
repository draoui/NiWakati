import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function FrenchCourses() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da09c228?q=80&w=1000"
          alt="Cours de français"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Cours de Français</h1>
            <p className="text-xl">Apprenez le français dans une ambiance conviviale et bienveillante</p>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">À propos des cours</h2>
              <p className="mb-4">
                Nos cours de français sont gratuits et ouverts à toutes les personnes souhaitant
                apprendre ou améliorer leur français. Nous proposons différents niveaux adaptés
                aux besoins de chacun, du débutant complet au niveau intermédiaire.
              </p>
              <p className="mb-4">
                Les cours sont dispensés par des professeurs bénévoles qualifiés dans une
                ambiance détendue et conviviale, favorisant l'apprentissage et l'échange culturel.
              </p>
              <Button size="lg" className="mt-4">
                S'inscrire aux cours
              </Button>
            </div>
            
            <Card className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Informations pratiques</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-primary" />
                  <span>Tous les mardis et jeudis</span>
                </li>
                <li className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-primary" />
                  <span>De 18h00 à 20h00</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  <span>Rue de l'Example 123, 4130 Esneux</span>
                </li>
                <li className="flex items-center">
                  <Users className="mr-3 h-5 w-5 text-primary" />
                  <span>Groupes de 8 à 12 personnes maximum</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="bg-secondary/30 py-12">
        <div className="container px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Niveaux proposés</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {levels.map((level, index) => (
              <Card key={index} className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{level.name}</h3>
                <p className="mb-4 text-muted-foreground">{level.description}</p>
                <ul className="mb-4 space-y-2">
                  {level.topics.map((topic, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">Témoignages</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <blockquote className="mb-4 text-lg italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.level}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const levels = [
  {
    name: "Débutant (A1)",
    description: "Pour les personnes n'ayant aucune ou très peu de connaissance en français.",
    topics: [
      "Présentation et salutations",
      "Vocabulaire de base",
      "Verbes essentiels",
      "Situations quotidiennes",
    ],
  },
  {
    name: "Élémentaire (A2)",
    description: "Pour ceux qui peuvent déjà communiquer dans des situations simples.",
    topics: [
      "Conversation courante",
      "Grammaire de base",
      "Expression des besoins",
      "Compréhension écrite simple",
    ],
  },
  {
    name: "Intermédiaire (B1)",
    description: "Pour les personnes souhaitant approfondir leurs connaissances.",
    topics: [
      "Expression d'opinions",
      "Lecture de textes",
      "Rédaction de lettres",
      "Culture française",
    ],
  },
]

const testimonials = [
  {
    quote: "Grâce aux cours, j'ai pu trouver un travail et me faire des amis. L'ambiance est très accueillante.",
    name: "Fatima K.",
    level: "Niveau A2",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
  },
  {
    quote: "Les professeurs sont patients et à l'écoute. J'ai fait beaucoup de progrès en quelques mois.",
    name: "Ahmed M.",
    level: "Niveau B1",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
  },
]
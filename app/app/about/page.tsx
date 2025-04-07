import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Mail, Users, Globe, Heart, Network } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070"
          alt="Groupe diversifié de personnes"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                À Propos de Ni Wakati
              </h1>
              <p className="text-xl text-white md:text-2xl">
                "C'est maintenant" - Une ASBL engagée pour l'intégration des réfugiés en province de Liège
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">Notre Histoire</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p className="mb-6 text-lg text-muted-foreground">
                Ni Wakati, qui signifie "c'est maintenant" en swahili, est née d'une conviction profonde : 
                l'intégration des personnes étrangères ne peut pas attendre demain. C'est maintenant que 
                notre action doit se faire, car demain, c'est trop tard !
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                Basée à Esneux, en province de Liège, notre ASBL travaille sans relâche pour rendre 
                l'intégration des réfugiés réelle et effective. Nous croyons en la richesse du 
                brassage culturel et en l'importance de créer des espaces de rencontre et d'échange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold md:text-4xl">Nos Valeurs</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="mb-12 text-3xl font-bold md:text-4xl">Notre Équipe</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="mt-2 block text-sm text-primary hover:underline"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Rejoignez Notre Réseau</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Vous êtes une association ou souhaitez vous connecter à nous ? 
              N'hésitez pas à nous contacter !
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="mailto:info@ni-wakati.be">
                  <Mail className="mr-2 h-5 w-5" />
                  Contactez-nous
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/membership">
                  <Users className="mr-2 h-5 w-5" />
                  Devenir Membre
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: "Interculturalité",
    description: "Nous célébrons la diversité culturelle et favorisons les échanges enrichissants entre communautés.",
    icon: Globe,
  },
  {
    title: "Solidarité",
    description: "Nous croyons en l'entraide et au soutien mutuel pour construire une société plus inclusive.",
    icon: Heart,
  },
  {
    title: "Réseau",
    description: "Nous tissons des liens entre les personnes et les associations pour maximiser notre impact.",
    icon: Network,
  },
]

const team = [
  {
    name: "Benoît Bodart",
    role: "Administrateur délégué et fondateur, Président de l'organe d'administration",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
  },
  {
    name: "Maud Laurent",
    role: "Administratrice et fondatrice, Trésorière de l'OA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070",
  },
  {
    name: "François Magain",
    role: "Secrétaire de l'OA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070",
    email: "francoismagain@ni-wakati.be"
  },
  {
    name: "Fabienne Zutterman",
    role: "Coordinatrice des projets interculturalité",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
    email: "fabienne.zutterman@ni-wakati.be"
  },
]
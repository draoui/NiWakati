import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Calendar() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Programme des Activités</h1>
            <p className="text-center text-lg text-muted-foreground">
              Découvrez nos activités du mois d'avril et inscrivez-vous !
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Events */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {events.map((event, index) => (
              <Card key={index} className="p-6 overflow-hidden">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-4">{event.date}</h2>
                  <div className="space-y-6">
                    {event.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex flex-col md:flex-row gap-6">
                        {/* Image de l'activité */}
                        <div className="relative w-full md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden">
                          <Image
                            src={getActivityImage(activity.type)}
                            alt={activity.description}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Détails de l'activité */}
                        <div className="flex-1">
                          <div className="border-l-4 border-primary pl-4">
                            <p className="font-semibold text-lg mb-1">
                              {activity.time}
                            </p>
                            <p className="text-muted-foreground mb-3">
                              {activity.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Button asChild size="sm" variant="outline">
                                <Link 
                                  href={`mailto:fabienne.zutterman@ni-wakati.be?subject=Inscription: ${activity.description}&body=Je souhaite m'inscrire à l'activité: ${activity.description} du ${event.date}`}
                                  className="flex items-center"
                                >
                                  <Mail className="mr-2 h-4 w-4" />
                                  Inscription par email
                                </Link>
                              </Button>
                              <Button asChild size="sm" variant="outline">
                                <Link 
                                  href="https://wa.me/32479377687"
                                  target="_blank"
                                  className="flex items-center"
                                >
                                  <Phone className="mr-2 h-4 w-4" />
                                  WhatsApp (0479/377 687)
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Informations de Contact</h2>
            <p className="text-muted-foreground mb-6">
              Pour toute question concernant les activités, n'hésitez pas à contacter Fabienne :
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="mailto:fabienne.zutterman@ni-wakati.be">
                  <Mail className="mr-2 h-4 w-4" />
                  fabienne.zutterman@ni-wakati.be
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://wa.me/32479377687" target="_blank">
                  <Phone className="mr-2 h-4 w-4" />
                  0479/377 687
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Fonction pour obtenir l'image correspondant au type d'activité
function getActivityImage(type: string): string {
  const images = {
    cooking: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070",
    writing: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2070",
    art: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2070",
    excursion: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070",
    closed: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=2070",
    museum: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2070",
    default: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070",
  }
  return images[type] || images.default
}

const events = [
  {
    date: "LUNDI 7 AVRIL",
    activities: [
      {
        time: "10h00 – 14h00",
        description: "Atelier culinaire italien",
        type: "cooking",
      },
      {
        time: "10h00 – 12h00",
        description: "Atelier d'écriture (horaire exceptionnel)",
        type: "writing",
      },
    ],
  },
  {
    date: "LUNDI 14 AVRIL",
    activities: [
      {
        time: "10h00 – 12h00",
        description: "Atelier créatif : composition et collage de sables colorés sur papier animé par l'artiste Paula Peeters",
        type: "art",
      },
      {
        time: "13h00 – 15h00",
        description: "Atelier d'écriture",
        type: "writing",
      },
    ],
  },
  {
    date: "VENDREDI 18 AVRIL",
    activities: [
      {
        time: "09h00 – 18h10",
        description: "EXCURSION à DINANT : Rendez-vous aux Guillemins à 9h00 (départ du train à 9h23) et retour à Liège à 18h10. Sur place : visite de la maison d'Adolphe Sax, inventeur du saxophone, promenade au fil de l'expo Art on Sax, pique-nique au bord de l'eau, promenade en bateau de 45 minutes et visite de la collégiale Notre-Dame de Dinant",
        type: "excursion",
      },
    ],
  },
  {
    date: "LUNDI 21 AVRIL",
    activities: [
      {
        time: "FERMÉ",
        description: "Pas d'ateliers le lundi de Pâques : fermeture de la Maison de la Laïcité",
        type: "closed",
      },
    ],
  },
  {
    date: "SAMEDI 26 AVRIL",
    activities: [
      {
        time: "14h15",
        description: "Atelier culturel : Sortie au Musée de l'Abeille à Tilff",
        type: "museum",
      },
    ],
  },
  {
    date: "LUNDI 28 AVRIL",
    activities: [
      {
        time: "10h00 – 14h00",
        description: "Atelier culinaire congolais tenu par Christine (Menu à définir)",
        type: "cooking",
      },
      {
        time: "14h30 – 16h30",
        description: "Atelier d'écriture",
        type: "writing",
      },
    ],
  },
]
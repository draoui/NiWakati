import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with consistent spacing */}
      <section className="bg-secondary/30 pt-24 pb-12">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Contactez-nous</h1>
            <p className="text-center text-lg text-muted-foreground">
              Vous avez des questions ? Nous sommes là pour vous aider. N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information with proper spacing and alignment */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-3">Adresse</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Place de l'église 15<br />
                    4130 Esneux<br />
                    Belgique
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-3">Email</h3>
                  <a 
                    href="mailto:info@ni-wakati.be"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@ni-wakati.be
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-3">Téléphone</h3>
                  <p className="text-muted-foreground">
                    Disponible sur demande
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section with proper spacing */}
      <section className="py-12 bg-secondary/5">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-lg">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2535.825147905656!2d5.544444776777342!3d50.53324937166818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f11f10000001%3A0x1b832c6d8c8c8c8c!2sPlace%20de%20l&#39;%C3%89glise%2015%2C%204130%20Esneux!5e0!3m2!1sfr!2sbe!4v1690000000000!5m2!1sfr!2sbe"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section with improved spacing and width */}
      <section className="py-12">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-8 text-center">
                Envoyez-nous un message
              </h2>
              <div 
                id="hubspot-form-container" 
                className="min-h-[400px]"
              />
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
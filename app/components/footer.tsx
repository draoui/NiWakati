import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto py-8 md:py-12">
          {/* Main Footer Content */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Ni Wakati ASBL</h3>
              <p className="text-sm text-muted-foreground">
                Favoriser l'intégration des personnes étrangères et réfugiées en Belgique
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Liens Rapides</h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <address className="not-italic">
                <p className="text-sm text-muted-foreground">
                  Place de l'église 15<br />
                  4130 Esneux<br />
                  Belgique<br />
                  <a href="mailto:info@ni-wakati.be" className="hover:text-foreground">
                    info@ni-wakati.be
                  </a>
                </p>
              </address>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full rounded-md border bg-background px-3 py-2"
                />
                <Button type="submit" className="w-full">
                  S'abonner
                </Button>
              </form>
            </div>
          </div>

          {/* Separator */}
          <Separator className="my-8" />

          {/* Partners Section */}
          <div className="mb-8">
            <h3 className="mb-6 text-center text-lg font-semibold">Avec le soutien de</h3>
            
            {/* Institutional Partners */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 items-center justify-items-center mb-8">
              {institutionalPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="relative h-20 w-full max-w-[200px]"
                >
                  <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter hover:brightness-110 transition-all"
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Local Partners */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 items-center justify-items-center">
              {localPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="relative h-16 w-full max-w-[180px]"
                >
                  <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter hover:brightness-110 transition-all"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Ni Wakati ASBL. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const quickLinks = [
  { href: "/about", label: "À propos" },
  { href: "/activities", label: "Activités" },
  { href: "/volunteer", label: "Bénévolat" },
  { href: "/donate", label: "Faire un don" },
  { href: "/contact", label: "Contact" },
]

const institutionalPartners = [
  {
    name: "Fédération Wallonie-Bruxelles",
    logo: "/images/partners/federation-wallonie-bruxelles-logo.png",
    url: "http://www.federation-wallonie-bruxelles.be/"
  },
  {
    name: "Commune d'Esneux",
    logo: "/images/partners/esneux-logo.png",
    url: "https://www.esneux.be/"
  },
  {
    name: "Article 27 ASBL",
    logo: "/images/partners/article-27-logo.png",
    url: "https://article27.be/"
  },
  {
    name: "Service Public de Wallonie",
    logo: "/images/partners/spw-logo.png",
    url: "http://www.wallonie.be/"
  },
]

const localPartners = [
  {
    name: "Centre de coopération éducative de Tilff",
    logo: "/images/partners/cce-tilff-logo.png",
    url: "#"
  },
  {
    name: "CPAS d'Esneux-Tilff",
    logo: "/images/partners/cpas-esneux-tilff-logo.png",
    url: "#"
  },
  {
    name: "CRIPEL",
    logo: "/images/partners/cripel-logo.png",
    url: "https://www.cripel.be/"
  },
]
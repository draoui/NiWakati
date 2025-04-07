"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { Check, Users, Star, Calendar, Gift } from "lucide-react"
import { MembershipForm } from "@/components/membership-form"

export function MembershipContent() {
  const handleSubscription = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section avec image de fond */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?q=80&w=2070"
          alt="Communauté diverse"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/50 to-black/20">
          <div className="container px-4 text-center text-white">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Rejoignez Notre Communauté
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-200">
              Devenez membre de Ni Wakati et participez activement à notre mission 
              d'intégration et de partage culturel
            </p>
            <Button 
              size="lg" 
              variant="default"
              className="bg-white text-black hover:bg-white/90"
            >
              Découvrir les avantages
            </Button>
          </div>
        </div>
      </section>

      {/* Section Avantages avec icônes et design amélioré */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
            Pourquoi devenir membre ?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className="relative overflow-hidden p-8 transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Formules d'adhésion avec design amélioré */}
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              Choisissez votre formule
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Sélectionnez l'option qui vous convient le mieux et rejoignez notre communauté
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {/* Abonnement Mensuel */}
            <Card className="relative overflow-hidden border-2 p-8 transition-all hover:shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Abonnement Mensuel</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold">5€</span>
                  <span className="ml-2 text-xl text-muted-foreground">/mois</span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {membershipFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full"
                size="lg"
                onClick={() => handleSubscription('https://app.hubspot.com/payments/7mPbXnRjNTXW?referrer=PAYMENT_LINK')}
              >
                Choisir cette formule
              </Button>
            </Card>

            {/* Abonnement Annuel */}
            <Card className="relative overflow-hidden border-2 border-primary p-8 transition-all hover:shadow-lg">
              <div className="absolute -right-12 top-8 rotate-45 bg-primary px-12 py-2 text-sm font-semibold text-white">
                Meilleure offre
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold">Abonnement Annuel</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold">50€</span>
                  <span className="ml-2 text-xl text-muted-foreground">/an</span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {membershipFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-8 text-sm font-medium text-primary">
                Économisez 10€ par rapport à l'abonnement mensuel
              </p>

              <Button 
                className="w-full"
                size="lg"
                onClick={() => handleSubscription('https://app.hubspot.com/payments/y27NFJKzRPXX9?referrer=PAYMENT_LINK')}
              >
                Choisir cette formule
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Formulaire Alternatif avec design amélioré */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Autres moyens de paiement
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Vous préférez payer en liquide ou par un autre moyen ? 
              Remplissez ce formulaire et nous vous contacterons pour organiser le paiement.
            </p>
            <Card className="p-8">
              <MembershipForm />
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

const benefits = [
  {
    title: "Communauté Active",
    description: "Rejoignez un réseau dynamique de personnes engagées pour l'intégration et le partage culturel.",
    icon: Users,
  },
  {
    title: "Accès Privilégié",
    description: "Profitez d'un accès prioritaire à nos événements et activités tout au long de l'année.",
    icon: Star,
  },
  {
    title: "Impact Concret",
    description: "Participez directement à nos actions et contribuez à faire la différence dans votre communauté.",
    icon: Gift,
  },
]

const membershipFeatures = [
  "Participation aux assemblées générales",
  "Accès prioritaire aux événements",
  "Newsletter mensuelle exclusive",
  "Tarifs préférentiels sur les activités",
  "Badge de membre officiel",
]
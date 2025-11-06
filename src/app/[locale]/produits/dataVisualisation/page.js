'use client';

import { Database, Check, BarChart3, TrendingUp, ArrowLeft, Cloud, Download } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function ImageCarousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full w-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${alt} - ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      
      {/* Indicateurs (dots) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function DataVisualisationPage() {
  const fonctionnalitesClés = [
    {
      titre: 'Collecte de Données',
      icon: Database,
      description: 'Acquisition automatique et horodatée des données depuis tous vos installations, vigicrue, Météo France, etc.'
    },
    {
      titre: 'Analyse',
      icon: TrendingUp,
      description: 'Transforme les données historisées en données consolidées et valorisées'
    },
    {
      titre: 'Visualisation',
      icon: BarChart3,
      description: 'Tableaux de bord interactifs et personnalisables'
    }
  ];

  const caracteristiquesTechniques = [
    'Solutions Industrie 4.0',
    'Intégration IoT et BigData',
    'Tableaux de bord dynamiques',
    'Stockage sur serveur local et / ou cloud',
    'Accès sécurisé',
    'Carnet de bord pour consigner les événements'
  ];

  const typesRapports = [
    'Rapports de production journaliers',
    'Analyses de performance mensuelle',
    'KPI temps réel',
    'Alertes automatiques',
    'Comparatifs historiques',
    'Journal d\'alarmes'
  ];


  const images = [
  '/images/Encosyst Web Report.png',
  '/imagesV2/Visualisation de données et rapports/2022-07-04 08_46_50-Productions - ENCOSyst Web Report et 12 pages de plus - Personnel – Microsoft​ E.png'
  ];

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 mb-8">
        <Link 
          href="/#solutions"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
        >
          <ArrowLeft size={20} />
          Retour aux produits
        </Link>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Database className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Visualisation de données et rapports
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Industrie 4.0 - IoT - BigData
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrousel d'images */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageCarousel images={images} alt="Visualisation de données" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos solutions de <strong>Visualisation de données</strong> transforment vos données brutes en informations exploitables. Grâce à l'intégration des technologies <strong>IoT et BigData</strong>, nous collectons, stockons et analysons toutes les données de vos installations, que ce soit les données de production (puissances, niveaux, températures, vitesse, état de fonctionnement du groupe, etc.) mais aussi les alarmes. Il est également possible d'enrichir cette base de données avec des informations provenant de Vigicrue ou de Météo France ou autre.
              </p>
              <p>
                Les <strong>tableaux de bord dynamiques</strong> offrent une vue en temps réel de vos KPI essentiels : production, disponibilité, facteur de charge, et bien plus. Chaque tableau est personnalisable selon vos besoins et inclus des fonctionnalités telles que le <strong>carnet de bord</strong> pour consigner les évènements. Cela facilite l'analyse des données, l'identification des tendances, la détection de dérive inhabituelle et contribue ainsi à optimiser l'efficacité de vos installations.
              </p>
              <p>
                L'accès à cette plateforme s'effectue via un serveur web, garantissant une compatibilité avec tout type de support (PC, smartphone) et bénéficiant d'un système d'authentification sécurisé par mot de passe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Clés */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fonctionnalités Clés
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fonctionnalitesClés.map((fonc, index) => {
              const Icon = fonc.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-purple-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {fonc.titre}
                  </h3>
                  <p className="text-gray-600">
                    {fonc.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Caractéristiques et Types de Rapports */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Caractéristiques Techniques */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Caractéristiques Techniques
              </h2>
              <ul className="space-y-3">
                {caracteristiquesTechniques.map((carac, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{carac}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Types de Rapports */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Types de Rapports
              </h2>
              <ul className="space-y-3">
                {typesRapports.map((rapport, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{rapport}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

 

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Valorisez vos données !
            </h2>
            <p className="text-xl text-purple-50 mb-8">
              Transformez vos données en avantage compétitif
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


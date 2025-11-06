'use client';

import { Brain, Check, Zap, Settings, Shield, ArrowLeft, Wrench } from 'lucide-react';
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

export default function ArmoiresPage() {
  const specifications = [
    'Intégration automates (Principalement Siemens Schneider)',
    'Ecran tactiles',
    'Dispositifs de protection et de mesure',
    'Equipements de synchronisation',
    'Régulateur de tension'
  ];

  const fonctionnalites = [
    'Gestion des démarrages automatique et en mode pas à pas',
    'Gestion des séquences d\'arrêt normales ou rapide et d\'urgence en cas de défauts',
    'Démarrages et arrêt automatiques en fonction des niveaux d\'eau et/ou prix spot de l\'énergie',
    'Différents modes de conduite : Régulation de Niveau',
    'Gestion de la puissance réactif : Q=f(U)',
    'Limitations d\'ouverture, de puissance, de chute pour les centrales de basse chute',
    'Mode de maintenance permettant le pilotage individuel des organes et moteurs afin de réaliser des tests en toute sécurité',
    'Contrôle de la sécurité et sureté des prises d\'eau',
    'Pilotage dégrilleurs et vannes'
  ];

  const modernisation = {
    raisons: [
      'Obsolescence des équipements',
      'Accroissement de l\'efficacité',
      'Amélioration du facteur de charge',
      'Réduction des temps d\'arrêt',
      'Ajout de fonctionnalités',
      'Automatisation de processus'
    ],
    benefices: [
      'Réduction des coûts de production',
      'Durée de vie prolongée',
      'Fiabilité accrue',
      'Efficacité étendue',
      'Meilleure stabilité'
    ],
    etapes: [
      {
        titre: 'Diagnostics des équipements existants',
        description: 'Analyse complète de l\'état actuel des systèmes'
      },
      {
        titre: 'Analyse des différentes solutions',
        description: 'Étude collaborative avec le client des options disponibles'
      },
      {
        titre: 'Modernisation',
        description: 'Mise à niveau partielle ou totale des équipements suivant la solution retenue'
      }
    ]
  };

  const images = [
  '/imagesV2/Armoires/Armoire_de_controle_comande_4.png',
  '/imagesV2/Armoires/3 Panel de control central hidroeléctricaplanta .jpg',
  '/imagesV2/Armoires/4 Armoire de controle comande 2.jpg'
  ];

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Bouton retour */}
      <div className="container mx-auto px-4 mb-8">
        <Link 
          href="/#solutions"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
        >
          <ArrowLeft size={20} />
          Retour aux produits
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Brain className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Armoires de Contrôle Commande
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Solutions sur mesure pour le pilotage de vos installations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrousel d'images */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageCarousel images={images} alt="Armoires de contrôle commande" />
          </div>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Solutions sur mesure pour le pilotage de vos installations
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos <strong>armoires de contrôle commande</strong> sont conçues et <strong>fabriquées sur mesure</strong> pour répondre aux exigences spécifiques de chaque projet hydroélectrique. Chaque armoire est le résultat d'une ingénierie dédiée intégrant les dernières technologies d'automatisation.
              </p>
              <p>
                Nous assurons la <strong>conception complète</strong> depuis les études électriques jusqu'à la <strong>fabrication dans nos ateliers</strong>, en passant par la programmation des automates et interfaces graphiques ainsi que la validation en atelier avant livraison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spécifications techniques et Fonctionnalités */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Spécifications Techniques */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="text-orange-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Spécifications Techniques
                </h2>
              </div>
              <ul className="space-y-3">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fonctionnalités principales */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-blue-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Fonctionnalités principales
                </h2>
              </div>
              <ul className="space-y-3">
                {fonctionnalites.map((fonc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{fonc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projets de modernisation */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <Wrench className="text-green-600" size={40} />
              <h2 className="text-4xl font-bold text-gray-900">
                Projets de modernisation
              </h2>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  La modernisation d'une centrale est généralement effectuée pour deux raisons essentielles : l'obsolescence des équipements ou un accroissement de l'efficacité afin d'améliorer le facteur de charge (réduction des temps d'arrêt, ajout de fonctionnalités, automatisation de processus).
                </p>
                <p>
                  De manière générale, la rénovation des équipements de contrôle entraîne :
                </p>
              </div>

              {/* Bénéfices */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Bénéfices</h3>
                  <ul className="space-y-3">
                    {modernisation.benefices.map((benefice, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{benefice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Raisons de moderniser</h3>
                  <ul className="space-y-3">
                    {modernisation.raisons.map((raison, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{raison}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Étapes */}
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Une modernisation est réalisée en trois étapes
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  
                  {modernisation.etapes.map((etape, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl border-2 border-green-300 p-6 hover:border-green-500 transition-all shadow-md"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
                        {index + 1}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {etape.titre}
                      </h4>
                      <p className="text-gray-600">
                        {etape.description}
                      </p>
                    </div>
                  ))}
                </div>
         
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Nouveaux projets */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nouveaux projets
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Le système de contrôle commande et plus généralement tous les équipements électriques sont souvent peu considérés lors de la réalisation d'un projet. Les équipements de production (turbines et alternateurs) captent tout l'attention pour diverses raisons (cout plus élevés, rendements, etc.).
              </p>
              <p>
                Ces systèmes sont pourtant un <strong>facteur essentiel dans la fiabilité et la productivité</strong> d'une installation et ont un impact direct sur la rentabilité d'un projet.
              </p>
              <p>
                Une <strong>intégration optimale du système de contrôle commande</strong> aux équipements de production assure une facilité d'exploitation quotidienne de l'installation ainsi qu'une maintenance simplifiée, contribuant ainsi à réduire les coûts d'exploitation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Un projet d'armoire de contrôle commande ?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Notre équipe d'ingénieurs est prête à étudier votre projet
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


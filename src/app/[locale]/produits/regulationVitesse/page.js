'use client';

import { Gauge, Check, Zap, Wrench, ArrowLeft, Settings, AlertCircle } from 'lucide-react';
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

export default function RegulationVitessePage() {
  const fonctionnalites = [
    'Groupe îloté ou connecté réseau',
    'Gestion des états de démarrage, synchronisation et marche en réseau de la turbine',
    'Contrôle de charge pour le mode de fonctionnement autonome',
    'Pré-synchronisation automatique',
    'Démarrage sans courant',
    'Ouverture limiteur de vitesse',
    'Contrôle de charge avec 4 modes de réglage primaire :',
    '- P=cst',
    '- Isobare',
    '- Débit',
    '- PxH=cst',
    'Optimisation de prise de charge',
    'Contrôle ouverture maxi en fonction de la hauteur de chute pour éviter les zones de régulation',
    'Mode manuel',
    'Régulateur de niveau d\'amont',
    'Échange d\'informations avec Éditeurs SCADA (Modbus RTU, TCP ou OPC UA)',
    'Contrôle des relais et des entrées TOR',
    'Carte de surveillance (WDT)',
    'Contrôle de la régulation (INZRV)'
  ];

  const sequences = [
    'Démarrage seul sans courant (dépin d\'équilibrage des couvertes et ouverture des organes lents si besoin)',
    'Synchronisation automatique et prise de charge',
    'Passage en mode réseau',
    'Limiteur de puissance',
    'Marge de puissance',
    'Stop d\'urgence par fermeture rapide des vannages',
    'Fonction PxHN optimiseur des capacités du groupe'
  ];

  const piecesReserves = [
    'Serveur Fournir le régulateur primaire et secondaire (interface informatique)',
    'Robinets d\'isolement du distributeur et des pales',
  ];

  const caracteristiques = [
    'Compatibilité turbines Kaplan, Francis, Pelton',
    'Nouveaux projets et modernisation',
    'Conforme aux normes IEC 61362 et IEEE 125',
    'Régulation numérique haute précision',
    'Interface homme-machine intuitive',
    'Groupes hydrauliques sur mesure'
  ];

  const groupesHydrauliques = [
    'Conception sur mesure selon vos besoins',
    'Dimensionnement adapté à la turbine',
    'Composants hydrauliques de qualité',
    'Tests FAT complets en usine'
  ];

  const images = [
    '/images/Imagescontour/HPU Speed governor.png',
    '/images/20251024_162912.jpg'
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
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Gauge className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Régulation de Vitesse
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Régulateurs pour turbines Kaplan, Francis et Pelton
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrousel d'images */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageCarousel images={images} alt="Régulation de vitesse" />
          </div>
        </div>
      </section>

      {/* Description principale */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Régulation de vitesse
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos systèmes de <strong>régulation automatique</strong> assurent une conduite de l'agrégation automatisée, conçue pour s'adapter à tous types de turbines: <strong>Kaplan, Francis et Pelton</strong>. Ces solutions sont pensées pour optimiser les performances et garantir un fonctionnement stable, tant en mode îloté que connecté au réseau. Tous les automates utilisent un algorithme de régulation selon la méthode <strong>PID</strong>, conforme aux normes <strong>IEC 61362</strong> et <strong>IEEE 125</strong>.
              </p>
              <p>
                Basé sur une technologie <strong>PLC</strong> (Contrôle programmable industriel), notre régulateur garantit une grande réactivité dans la gestion des fluctuations de charge et du réseau, tout en offrant la robustesse nécessaire pour un fonctionnement continu dans des environnements industriels exigeants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Groupes hydrauliques */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Groupes hydrauliques
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
              <p>
                Chez Encosyst, nous offrons également la conception et la fabrication sur-mesure de groupes hydrauliques d'asservissement des différents organes mobiles.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {groupesHydrauliques.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pièces de Réserve */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Wrench size={32} className="text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Pièces Réserve
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Nous proposons également un lot de pièces de réserve constitué d'un serveur permettant de s'affranchir des pannes.
            </p>
            <ul className="space-y-3">
              {piecesReserves.map((piece, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{piece}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fonctionnalités et Séquences */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fonctionnalités */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Settings size={32} className="text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Fonctionnalités
                </h2>
              </div>
              <ul className="space-y-3">
                {fonctionnalites.map((fonc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{fonc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Séquences et essais */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle size={32} className="text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Séquences et essais
                </h2>
              </div>
              <ul className="space-y-3">
                {sequences.map((seq, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{seq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Caractéristiques Techniques
          </h2>
          <div className="bg-white rounded-xl border-2 border-gray-200 p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              {caracteristiques.map((carac, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">{carac}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'un régulateur de vitesse ?
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Contactez-nous pour une solution adaptée à votre turbine
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Obtenir un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


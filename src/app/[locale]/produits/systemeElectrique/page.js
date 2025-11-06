'use client';

import { CircuitBoard, Check, Zap, Power, ArrowLeft, Battery, AlertTriangle } from 'lucide-react';
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

export default function IngenierieSystemeElectriquePage() {
  const postesHTA = [
    'Cellules HTA',
    'Armoires de protections',
    'Transformateur élévateur',
    'Transformateur services auxiliaires'
  ];

  const distributionsAuxiliaires = [
    'TGBT 400V',
    'Tableaux divisionnaires',
    'Chargeurs de batteries',
    '110V/48V/24V',
    'Distribution DC',
    'Onduleurs',
    'Avec possibilité de redondantes pour les systèmes critiques'
  ];

  const systemesAuxiliaires = [
    'Systèmes de ventilation et de chauffage',
    'Armoires de contrôle de pompes d\'exhaure ou de Vidéosurveillance',
    'Système de téléphonie',
    'Alarmes anti intrusion',
    'Alarmes incendie',
    'Éclairage et prises de courant'
  ];

  const avantages = [
    {
      titre: 'Intégration Complète',
      description: 'Conception globale de tous les systèmes électriques',
      icon: CircuitBoard
    },
    {
      titre: 'Fiabilité',
      description: 'Solutions redondantes pour systèmes critiques',
      icon: Battery
    },
    {
      titre: 'Expertise',
      description: 'Études de court-circuit et sélectivité des protections',
      icon: Zap
    }
  ];


  const images = [
  '/imagesV2/Ingénierie du systeme electrique/Cellules HTA 1.jpg',
  '/imagesV2/Ingénierie du systeme electrique/Chargeur de batteries.jpg',
  '/imagesV2/Ingénierie du systeme electrique/TGBT.jpg'
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
              <CircuitBoard className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Ingénierie du Système Électrique
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Postes HTA, Distributions des auxiliaires, Systèmes Auxiliaires
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrousel d'images */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageCarousel images={images} alt="Ingénierie du système électrique" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Intégration Complète des Systèmes Électriques
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nous assurons l'<strong>ingénierie et l'intégration de l'ensemble des équipements électriques</strong> nécessaires au fonctionnement d'une centrale hydroélectrique, depuis les postes haute tension jusqu'aux distributions auxiliaires. Nous réalisons les études de court-circuit et de sélectivité des protections à l'aide de logiciels dédiés.
              </p>
              <p>
                Les <strong>postes HTA/HTB</strong> comprennent les transformateurs élévateurs, les cellules et les disjoncteurs et tous les équipements nécessaires pour l'évacuation de l'énergie produite vers le réseau.
              </p>
              <p>
                Les <strong>auxiliaires – ou Balance of Plant électrique (eBoP)</strong> regroupent tous les équipements électriques auxiliaires indispensables afin d'assurer le bon fonctionnement de l'usine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos Atouts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {avantages.map((avantage, index) => {
              const Icon = avantage.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-blue-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {avantage.titre}
                  </h3>
                  <p className="text-gray-600">
                    {avantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nos Solutions */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nos Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Postes HTA */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Power size={32} className="text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Postes HTA
                </h3>
              </div>
              <ul className="space-y-3">
                {postesHTA.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Distributions des auxiliaires */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Battery size={32} className="text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Distributions des auxiliaires
                </h3>
              </div>
              <ul className="space-y-3">
                {distributionsAuxiliaires.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Systèmes Auxiliaires */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle size={32} className="text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Systèmes Auxiliaires
                </h3>
              </div>
              <ul className="space-y-3">
                {systemesAuxiliaires.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
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
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'une ingénierie électrique complète ?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Contactez-nous pour une étude personnalisée de votre installation
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Obtenir un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


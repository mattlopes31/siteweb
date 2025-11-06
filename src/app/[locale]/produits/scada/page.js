'use client';

import { Monitor, Check, Zap, Lock, ArrowLeft, Network, Smartphone, Wrench } from 'lucide-react';
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

export default function ScadaPage() {
  const fonctionnalitesPrincipales = [
    {
      titre: 'Supervision Centralisée',
      icon: Monitor,
      elements: [
        'Vue d\'ensemble de l\'installation avec synoptiques animés, tableau d\'alarmes et outils de courbes au travers d\'une interface ergonomique et intuitive',
        'Hypervision pour piloter l\'ensemble de vos sites depuis une seule et même interface'
      ]
    },
    {
      titre: 'Accès distant',
      icon: Smartphone,
      elements: [
        'Accès distant sécurisé à vos sites depuis un ordinateur ou smartphone',
        'Transmission des messages d\'alarmes par SMS / email ou WhatsApp'
      ]
    },
    {
      titre: 'Outils d\'aide à la maintenance',
      icon: Wrench,
      elements: [
        'Mode de maintenance permettant le pilotage individuel des organes et moteurs afin de réaliser des tests en toute sécurité',
        'Ensemble des réglages et calibration capteurs accessibles depuis la supervision'
      ]
    }
  ];

  const specifications = [
    'Interface ergonomique et intuitive',
    'Compatibilité multi-protocoles (Modbus, OPC, IEC 104)',
    'Supervision temps réel',
    'Historisation des données',
    'Gestion des alarmes intelligente',
    'Cybersécurité avancée',
    'Accès distant sécurisé',
    'Rapports automatisés'
  ];

  const miseEnService = [
    {
      etape: 'Analyse',
      description: 'Étude des besoins et architecture du système',
      duree: '1-2 semaines'
    },
    {
      etape: 'Développement',
      description: 'Création des synoptiques et programmation',
      duree: '3-6 semaines'
    },
    {
      etape: 'Tests FAT',
      description: 'Tests en usine avec simulation',
      duree: '1 semaine'
    },
    {
      etape: 'Déploiement',
      description: 'Installation sur site et mise en service',
      duree: '1-2 semaines'
    }
  ];

  const essais = [
    'Test de connectivité réseau',
    'Validation des communications automate',
    'Test des alarmes et événements',
    'Vérification de l\'historisation',
    'Test des accès utilisateurs',
    'Validation cybersécurité',
    'Test de charge système',
    'Formation opérateurs'
  ];

  const images = [
    '/images/scada.png',
    '/images/Speed governor hmi.png',
    '/images/scada3.png'
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
              <Monitor className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                SCADA / Supervision / Hypervision / Télégestion
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Supervision Intelligente et Sécurisée
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrousel d'images */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <ImageCarousel images={images} alt="Systèmes SCADA" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Supervision Intelligente et Sécurisée
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos <strong>systèmes SCADA</strong> (Supervisory Control And Data Acquisition) offrent une supervision complète et intuitive de vos installations hydroélectriques pour exploiter aussi bien des groupes de productions que les prises d'eau et barrages. Développés avec une attention particulière apportée à l'ergonomie, ils permettent une exploitation optimale de vos installations.
              </p>
              <p>
                Chaque SCADA est développé sur mesure avec une <strong>interface graphique moderne</strong> et des synoptiques animés en temps réel. L'esthétique soignée facilite la prise en main et réduit la charge cognitive des opérateurs.
              </p>
              <p>
                Nos SCADA intègrent des <strong>fonctions avancées</strong> : gestion des alarmes, historisation, outils d'aide à la maintenance préventive, accès distant, etc.
              </p>
              <p>
                Le développement de nos systèmes s'appuie sur des <strong>solutions logicielles du marché</strong> (logiciels standards, solutions éprouvées) et une approche multi-éditeurs. Ce choix garantit une architecture ouverte et indépendante, essentielle à la pérennisation de votre plateforme.
              </p>
              <p>
                Nous réalisons des <strong>hypervision</strong> qui unifie et sécurise l'ensemble de vos sites. Connectés par VPN, ils sont pilotés depuis une seule et même interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités Principales */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Fonctionnalités Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {fonctionnalitesPrincipales.map((fonc, index) => {
              const Icon = fonc.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-blue-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {fonc.titre}
                  </h3>
                  <ul className="space-y-3">
                    {fonc.elements.map((element, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="text-blue-600 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{element}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spécifications et Essais */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Spécifications
              </h2>
              <ul className="space-y-3">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tests et Validation
              </h2>
              <ul className="space-y-3">
                {essais.map((essai, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{essai}</span>
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
              Besoin d'un système SCADA performant ?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Discutons de votre projet de supervision
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


'use client';

import { Zap, Check, Thermometer, Gauge, ArrowLeft, Waves, Wind } from 'lucide-react';
import Link from 'next/link';

export default function InstrumentationPage() {
  const specifications = [
    'Capteurs industriels certifiés',
    'Calibration en laboratoire',
    'Protection IP65 à IP68',
    'Signaux 4-20mA / 0-10V / numérique',
    'Compatible automates et SCADA',
    'Installation complète clé en main',
    'Documentation technique fournie',
    'Formation des équipes locales'
  ];

  const typesInstrumentation = [
    {
      categorie: 'Niveaux',
      capteurs: ['Radar', 'Ultrason', 'Flotteur', 'Piézométrique'],
      icon: Waves
    },
    {
      categorie: 'Température',
      capteurs: ['PT100', 'Thermocouple', 'RTD', 'Infrarouge'],
      icon: Thermometer
    },
    {
      categorie: 'Pression',
      capteurs: ['Piézorésistif', 'Capacitif', 'Différentiel'],
      icon: Gauge
    },
    {
      categorie: 'Débit',
      capteurs: ['Électromagnétique', 'Ultrason', 'Vortex', 'Canal ouvert'],
      icon: Wind
    }
  ];


  const essais = [
    'Vérification de la calibration',
    'Test des boucles 4-20mA',
    'Validation des mesures',
    'Test de communication',
    'Vérification des alarmes',
    'Test d\'étanchéité',
    'Essai fonctionnel complet',
    'Documentation as-built'
  ];

  const applications = [
    'Mesure de niveau dans les barrages',
    'Contrôle de débit en canal ouvert',
    'Mesure de débit en conduite forcée',
    'Surveillance de température paliers',
    'Mesure de vibration des groupes',
    'Position des vannes et clapets',
    'Vitesse de rotation turbine',
    'Pression hydraulique circuits'
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
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Zap className="text-white" size={40} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Instrumentation
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Fourniture, installation et mise en service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image principale */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/20231211_074352.jpg"
              alt="Instrumentation sur site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Solution Complète d'Instrumentation
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nous assurons la <strong>fourniture, installation et mise en service</strong> de tout type d'instrumentation pour installations hydroélectriques. Notre expertise couvre l'ensemble de la chaîne, depuis le choix des capteurs jusqu'à leur intégration dans votre système de contrôle.
              </p>
              <p>
                Notre gamme comprend des instruments de mesure pour : <strong>niveaux</strong> (barrages, prises d'eau, canaux), <strong>températures</strong> (paliers, enroulements, huile), <strong>positions</strong> (vannes, clapets, distributeur), <strong>vitesses</strong> (rotation turbine), <strong>vibrations</strong> (surveillance des groupes), <strong>débits</strong> (canal ouvert et conduite forcée).
              </p>
              <p>
                Tous nos capteurs sont de <strong>qualité industrielle</strong>, sélectionnés auprès de fabricants reconnus. Ils sont calibrés en laboratoire avant livraison et fournis avec leurs certificats de calibration.
              </p>
              <p>
                L'<strong>installation</strong> est réalisée par nos équipes ou nos partenaires locaux qualifiés. Nous assurons le câblage complet jusqu'aux armoires de contrôle, les tests de mise en service et la formation des opérateurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'instrumentation */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Types de Capteurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {typesInstrumentation.map((type, index) => {
              const Icon = type.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-cyan-500 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {type.categorie}
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {type.capteurs.map((capteur, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                        {capteur}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl border-2 border-cyan-200 p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((application, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{application}</span>
                </div>
              ))}
            </div>
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
                    <Check className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
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
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Besoin d'instrumentation ?
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              Nous vous accompagnons dans le choix et l'installation de vos capteurs
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


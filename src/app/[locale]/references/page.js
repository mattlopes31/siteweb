'use client';

import { MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';
import projectsData from './projects-data.json';

export default function ReferencesPage() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedPower, setSelectedPower] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  
  // Les projets sont maintenant chargés depuis le fichier JSON
  const projects = projectsData;

  const years = ['all', ...Array.from(new Set(projects.map(p => p.year))).sort((a, b) => b - a)];
  const countries = ['all', ...Array.from(new Set(projects.map(p => p.country))).sort()];
  const powers = ['all', ...Array.from(new Set(projects.map(p => p.power))).sort()];
  const types = ['all', ...Array.from(new Set(projects.map(p => p.type))).sort()];
  
  const filteredProjects = projects.filter(p => {
    const yearMatch = selectedYear === 'all' || p.year === parseInt(selectedYear);
    const countryMatch = selectedCountry === 'all' || p.country === selectedCountry;
    const powerMatch = selectedPower === 'all' || p.power === selectedPower;
    const typeMatch = selectedType === 'all' || p.type === selectedType;
    return yearMatch && countryMatch && powerMatch && typeMatch;
  });

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nos Références
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Plus de 14 ans d'expérience à travers le monde
          </p>
        </div>
        
        {/* Carte du monde */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="rounded-xl overflow-hidden border-2 border-gray-700">
            <iframe 
              src="https://www.google.com/maps/d/embed?mid=1H9DAzR8xL4KoRGHquQCrxzv9f5s&ehbc=2E312F" 
              width="100%" 
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte des projets ENCOSYST"
            />
          </div>
        </div>

        {/* Légende sous la carte */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Item 1 */}
              <div className="flex items-center gap-3 p-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500">
                  <MapPin size={18} className="text-white" />
                </span>
                <span className="text-gray-800 font-medium">Nouveau projet</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3 p-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500">
                  <MapPin size={18} className="text-white" />
                </span>
                <span className="text-gray-800 font-medium">Modernisation / Réhabilitation</span>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3 p-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-700">
                  <MapPin size={18} className="text-white" />
                </span>
                <span className="text-gray-800 font-medium">Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projets */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 shadow-xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
                <Calendar className="text-orange-500" size={28} />
                Liste des Projets ({filteredProjects.length})
              </h3>
              
              {/* Filtres en grille responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Filtre Année */}
                <select 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="all">Toutes les années</option>
                  {years.filter(y => y !== 'all').map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                
                {/* Filtre Pays */}
                <select 
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="all">Tous les pays</option>
                  {countries.filter(c => c !== 'all').map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                
                {/* Filtre Puissance */}
                <select 
                  value={selectedPower}
                  onChange={(e) => setSelectedPower(e.target.value)}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="all">Toutes les puissances</option>
                  {powers.filter(p => p !== 'all').map(power => (
                    <option key={power} value={power}>{power}</option>
                  ))}
                </select>
                
                {/* Filtre Type */}
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-2 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="all">Tous les types</option>
                  {types.filter(t => t !== 'all').map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-orange-500 transition-all hover:shadow-lg overflow-hidden"
                >
                  <div className="flex items-start gap-4 p-6">
                    {/* Image du projet - NOUVELLE SECTION */}
                    {project.src && project.src !== "" && project.src !== "images/" && (
                      <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                        <img
                          src={project.src}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
                            }
                          }}
                        />
                      </div>
                    )}
                    
                    {/* Contenu du projet */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-orange-500 font-bold text-lg">{project.year}</span>
                        <h4 className="font-bold text-gray-900 text-lg">{project.name}</h4>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="text-gray-600 flex items-center gap-1">
                          <MapPin size={14} className="text-green-500" />
                          {project.country}
                        </span>
                        <span className="bg-green-50 border border-green-300 text-green-600 px-3 py-1 rounded-full font-medium">
                          {project.power}
                        </span>
                        <span className="bg-orange-50 border border-orange-300 text-orange-600 px-3 py-1 rounded-full font-medium">
                          {project.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Localisation */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="text-orange-500" size={28} />
              Notre Localisation
            </h3>
            <p className="text-gray-900 mb-2 text-lg font-semibold">
              13 Impasse Perbost - Zone Perbost
            </p>
            <p className="text-gray-900 mb-6 text-lg">
              31800 Labarthe Inard, France
            </p>
            <p className="text-gray-600 mb-6">
              Au pied des Pyrénées dans le Sud-Ouest de la France
            </p>
            
            <a 
              href="https://www.google.com/maps/search/13+Impasse+Perbost+31800+Labarthe+Inard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}


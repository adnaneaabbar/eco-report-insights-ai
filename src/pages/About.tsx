
import { Target, Users, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Précision',
      description: 'Nous nous engageons à fournir des analyses précises et fiables pour vos données carbone.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons main dans la main avec les entreprises pour améliorer leur impact environnemental.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Notre technologie d\'IA est constamment améliorée pour vous offrir le meilleur service.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous innovons continuellement pour simplifier l\'analyse des rapports RSE.'
    }
  ];

  const team = [
    {
      name: 'Marie Dupont',
      role: 'CEO & Fondatrice',
      description: 'Experte en développement durable avec 15 ans d\'expérience dans le conseil RSE.'
    },
    {
      name: 'Pierre Martin',
      role: 'CTO',
      description: 'Spécialiste en intelligence artificielle, ancien ingénieur chez Google.'
    },
    {
      name: 'Sophie Laurent',
      role: 'Directrice Produit',
      description: 'Passionnée par l\'UX et l\'impact environnemental des technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-eco-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            À propos d'IAXIS ESG
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in">
            Notre mission est de démocratiser l'analyse des données carbone pour toutes les entreprises, 
            grandes et petites, afin d'accélérer la transition vers un monde plus durable.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Face aux défis climatiques actuels, nous croyons que chaque entreprise devrait avoir accès 
                à des outils simples et efficaces pour mesurer et réduire son empreinte carbone.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                IAXIS ESG utilise l'intelligence artificielle pour automatiser l'extraction 
                des données Scope 1, 2 et 3 depuis vos rapports RSE, vous faisant gagner un temps précieux 
                et vous permettant de vous concentrer sur les actions qui comptent vraiment.
              </p>
              <div className="bg-eco-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-eco-700 mb-2">Impact à ce jour</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-eco-600">500+</div>
                    <div className="text-sm text-gray-600">Rapports analysés</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-eco-600">200+</div>
                    <div className="text-sm text-gray-600">Entreprises clientes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-eco-100 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pourquoi c'est important ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-eco-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Urgence climatique :</strong> Les entreprises doivent agir rapidement pour réduire leurs émissions.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-eco-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Complexité des données :</strong> L'analyse manuelle des rapports RSE est chronophage et sujette aux erreurs.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-eco-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    <strong>Besoin de précision :</strong> Des données fiables sont essentielles pour prendre les bonnes décisions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre approche et notre développement technologique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-eco-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-eco-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des experts passionnés par l'environnement et la technologie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-eco-100 to-green-100 w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-eco-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-eco-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-eco-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Notre Technologie</h2>
          <p className="text-xl text-gray-600 mb-8">
            IAXIS ESG utilise des algorithmes d'apprentissage automatique avancés, 
            entraînés sur des milliers de rapports RSE pour garantir une extraction 
            précise et fiable de vos données carbone.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nos Capacités</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-eco-600 mb-2">Scope 1</h4>
                <p className="text-sm text-gray-600">Émissions directes de sources détenues ou contrôlées</p>
              </div>
              <div>
                <h4 className="font-semibold text-eco-600 mb-2">Scope 2</h4>
                <p className="text-sm text-gray-600">Émissions indirectes liées à l'énergie achetée</p>
              </div>
              <div>
                <h4 className="font-semibold text-eco-600 mb-2">Scope 3</h4>
                <p className="text-sm text-gray-600">Autres émissions indirectes de la chaîne de valeur</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import { Link } from 'react-router-dom';
import { Upload, BarChart3, Leaf, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: 'Upload Facile',
      description: 'Téléchargez votre rapport RSE en format PDF en quelques clics'
    },
    {
      icon: BarChart3,
      title: 'Analyse Automatique',
      description: 'Notre IA extrait automatiquement les données Scope 1, 2 et 3'
    },
    {
      icon: TrendingUp,
      title: 'Visualisation Claire',
      description: 'Consultez vos résultats dans des tableaux et graphiques intuitifs'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Gain de Temps',
      description: 'Réduisez de 90% le temps d\'analyse de vos rapports RSE'
    },
    {
      icon: Shield,
      title: 'Précision Garantie',
      description: 'Algorithmes d\'IA entraînés sur des milliers de rapports RSE'
    },
    {
      icon: Leaf,
      title: 'Impact Environnemental',
      description: 'Suivez et optimisez votre empreinte carbone efficacement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Analysez vos données
              <span className="text-orange-600"> carbone </span>
              en quelques secondes
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Téléchargez votre rapport RSE et obtenez instantanément l'extraction 
              de vos données Scope 1, 2 et 3 grâce à notre intelligence artificielle avancée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/analyze">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg shadow-lg">
                  Commencer l'analyse
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça fonctionne ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un processus simple en 3 étapes pour analyser vos données carbone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-orange-200 hover:shadow-xl transition-all duration-300 hover:border-orange-300">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-orange-100' : 
                    index === 1 ? 'bg-orange-200' : 'bg-orange-300'
                  }`}>
                    <feature.icon className={`h-8 w-8 ${
                      index === 0 ? 'text-orange-600' : 
                      index === 1 ? 'text-orange-700' : 'text-orange-800'
                    }`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir IAXIS ESG ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les avantages qui font la différence pour votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  index === 0 ? 'bg-gradient-to-br from-orange-400 to-orange-500' :
                  index === 1 ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                  'bg-gradient-to-br from-orange-600 to-orange-700'
                }`}>
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à optimiser votre empreinte carbone ?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Rejoignez les entreprises qui utilisent déjà IAXIS ESG pour leurs analyses RSE
          </p>
          <Link to="/analyze">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg shadow-lg">
              Analyser mon rapport maintenant
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

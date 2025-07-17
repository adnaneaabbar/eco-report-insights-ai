
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
    <div className="min-h-screen bg-gradient-to-br from-eco-50 to-green-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-eco-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Analysez vos données
              <span className="text-eco-600"> carbone </span>
              en quelques secondes
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Téléchargez votre rapport RSE et obtenez instantanément l'extraction 
              de vos données Scope 1, 2 et 3 grâce à notre intelligence artificielle avancée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/analyze">
                <Button size="lg" className="bg-eco-600 hover:bg-eco-700 text-white px-8 py-3 text-lg">
                  Commencer l'analyse
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-eco-600 text-eco-600 hover:bg-eco-50 px-8 py-3 text-lg">
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
              <Card key={index} className="border-eco-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-eco-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-eco-600" />
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
      <section className="py-20 bg-eco-50">
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
                <div className="mx-auto bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-10 w-10 text-eco-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-eco-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à optimiser votre empreinte carbone ?
          </h2>
          <p className="text-xl text-eco-100 mb-8">
            Rejoignez les entreprises qui utilisent déjà IAXIS ESG pour leurs analyses RSE
          </p>
          <Link to="/analyze">
            <Button size="lg" variant="secondary" className="bg-white text-eco-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Analyser mon rapport maintenant
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

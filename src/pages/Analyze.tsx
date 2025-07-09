
import { useState } from 'react';
import { Upload, FileText, BarChart3, Download, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface CarbonData {
  scope: string;
  category: string;
  value: number;
  unit: string;
  percentage: number;
}

const Analyze = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  // Données d'exemple pour la démonstration
  const mockData: CarbonData[] = [
    { scope: 'Scope 1', category: 'Combustion stationnaire', value: 1250, unit: 'tCO2e', percentage: 15.6 },
    { scope: 'Scope 1', category: 'Combustion mobile', value: 850, unit: 'tCO2e', percentage: 10.6 },
    { scope: 'Scope 1', category: 'Émissions fugitives', value: 320, unit: 'tCO2e', percentage: 4.0 },
    { scope: 'Scope 2', category: 'Électricité achetée', value: 2100, unit: 'tCO2e', percentage: 26.3 },
    { scope: 'Scope 2', category: 'Chaleur/vapeur achetée', value: 180, unit: 'tCO2e', percentage: 2.3 },
    { scope: 'Scope 3', category: 'Transport amont', value: 950, unit: 'tCO2e', percentage: 11.9 },
    { scope: 'Scope 3', category: 'Déplacements professionnels', value: 680, unit: 'tCO2e', percentage: 8.5 },
    { scope: 'Scope 3', category: 'Transport aval', value: 1200, unit: 'tCO2e', percentage: 15.0 },
    { scope: 'Scope 3', category: 'Autres activités', value: 470, unit: 'tCO2e', percentage: 5.9 },
  ];

  const totalEmissions = mockData.reduce((sum, item) => sum + item.value, 0);

  const getScopeTotal = (scope: string) => {
    return mockData.filter(item => item.scope === scope).reduce((sum, item) => sum + item.value, 0);
  };

  const getScopeColor = (scope: string) => {
    switch (scope) {
      case 'Scope 1': return 'text-red-600 bg-red-50';
      case 'Scope 2': return 'text-orange-600 bg-orange-50';
      case 'Scope 3': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setProgress(0);

    // Simulation de l'analyse
    const progressSteps = [
      { step: 20, message: 'Lecture du PDF...' },
      { step: 40, message: 'Extraction des données...' },
      { step: 60, message: 'Identification des Scopes...' },
      { step: 80, message: 'Calcul des totaux...' },
      { step: 100, message: 'Analyse terminée !' }
    ];

    for (const { step } of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(step);
    }

    setIsAnalyzing(false);
    setAnalysisComplete(true);
  };

  const resetAnalysis = () => {
    setFile(null);
    setIsAnalyzing(false);
    setAnalysisComplete(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Analyse de Rapport RSE</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Téléchargez votre rapport RSE et obtenez l'extraction automatique de vos données carbone
          </p>
        </div>

        {!analysisComplete ? (
          <div className="max-w-2xl mx-auto">
            {/* Upload Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2 h-5 w-5" />
                  Télécharger votre rapport RSE
                </CardTitle>
                <CardDescription>
                  Sélectionnez un fichier PDF contenant votre rapport RSE
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-eco-300 rounded-lg p-8 text-center hover:border-eco-400 transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      {file ? file.name : 'Cliquez pour sélectionner un fichier PDF'}
                    </p>
                    <p className="text-sm text-gray-500">
                      Ou glissez-déposez votre fichier ici
                    </p>
                  </label>
                </div>

                {file && (
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="mr-2 h-4 w-4" />
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </div>
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="bg-eco-600 hover:bg-eco-700"
                    >
                      {isAnalyzing ? 'Analyse en cours...' : 'Analyser le rapport'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Progress Section */}
            {isAnalyzing && (
              <Card>
                <CardHeader>
                  <CardTitle>Analyse en cours...</CardTitle>
                  <CardDescription>
                    Notre IA traite votre rapport pour extraire les données carbone
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={progress} className="mb-4" />
                  <p className="text-sm text-gray-600 text-center">
                    {progress}% terminé
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        ) : (
          /* Results Section */
          <div className="space-y-8">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-eco-50 to-green-50 border-eco-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-eco-700">
                    {totalEmissions.toLocaleString()}
                  </CardTitle>
                  <CardDescription className="text-eco-600">
                    Total des émissions (tCO2e)
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-red-700">
                    {getScopeTotal('Scope 1').toLocaleString()}
                  </CardTitle>
                  <CardDescription className="text-red-600">
                    Scope 1 (tCO2e)
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-orange-700">
                    {getScopeTotal('Scope 2').toLocaleString()}
                  </CardTitle>
                  <CardDescription className="text-orange-600">
                    Scope 2 (tCO2e)
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-blue-700">
                    {getScopeTotal('Scope 3').toLocaleString()}
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    Scope 3 (tCO2e)
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Detailed Results Table */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Détail des émissions par catégorie
                  </CardTitle>
                  <CardDescription>
                    Répartition complète de vos émissions carbone
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Exporter CSV
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Scope</TableHead>
                      <TableHead>Catégorie</TableHead>
                      <TableHead className="text-right">Émissions</TableHead>
                      <TableHead className="text-right">Unité</TableHead>
                      <TableHead className="text-right">% du total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScopeColor(item.scope)}`}>
                            {item.scope}
                          </span>
                        </TableCell>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell className="text-right font-mono">
                          {item.value.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right text-gray-500">{item.unit}</TableCell>
                        <TableCell className="text-right">
                          <span className="font-medium">{item.percentage}%</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Success Alert */}
            <Alert className="border-eco-200 bg-eco-50">
              <AlertCircle className="h-4 w-4 text-eco-600" />
              <AlertDescription className="text-eco-700">
                <strong>Analyse terminée avec succès !</strong> Nous avons extrait {mockData.length} catégories 
                d'émissions de votre rapport RSE. Les données sont prêtes à être exportées ou analysées davantage.
              </AlertDescription>
            </Alert>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <Button onClick={resetAnalysis} variant="outline">
                Analyser un autre rapport
              </Button>
              <Button className="bg-eco-600 hover:bg-eco-700">
                <Download className="mr-2 h-4 w-4" />
                Télécharger le rapport complet
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyze;

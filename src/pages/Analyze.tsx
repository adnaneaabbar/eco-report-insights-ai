
import { useState } from 'react';
import { Upload, FileText, BarChart3, Download, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface CarbonData {
  category: string;
  value: number;
  unit: string;
}

const Analyze = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  // Données d'exemple pour la démonstration
  const mockData: CarbonData[] = [
    { category: 'Scope 1 emissions', value: 2420, unit: 'tCO2e' },
    { category: 'Scope 2 location-based emissions', value: 1850, unit: 'tCO2e' },
    { category: 'Scope 2 market-based emissions', value: 1650, unit: 'tCO2e' },
    { category: 'Scope 3 emissions', value: 3300, unit: 'tCO2e' },
  ];

  const totalEmissions = mockData.reduce((sum, item) => sum + item.value, 0);

  const getCategoryColor = (category: string) => {
    if (category.includes('Scope 1')) return 'text-red-700 bg-red-50';
    if (category.includes('Scope 2')) return 'text-orange-700 bg-orange-50';
    if (category.includes('Scope 3')) return 'text-blue-700 bg-blue-50';
    return 'text-gray-700 bg-gray-50';
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Analyse de Rapport RSE</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Téléchargez votre rapport RSE et obtenez l'extraction automatique de vos données carbone
          </p>
        </div>

        {!analysisComplete ? (
          <div className="max-w-2xl mx-auto">
            {/* Upload Section */}
            <Card className="mb-8 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Upload className="mr-2 h-5 w-5" />
                  Télécharger votre rapport RSE
                </CardTitle>
                <CardDescription>
                  Sélectionnez un fichier PDF contenant votre rapport RSE
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <FileText className="mx-auto h-12 w-12 text-orange-400 mb-4" />
                    <p className="text-lg font-medium text-foreground mb-2">
                      {file ? file.name : 'Cliquez pour sélectionner un fichier PDF'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ou glissez-déposez votre fichier ici
                    </p>
                  </label>
                </div>

                {file && (
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FileText className="mr-2 h-4 w-4" />
                      {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </div>
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="bg-primary hover:bg-orange-600"
                    >
                      {isAnalyzing ? 'Analyse en cours...' : 'Analyser le rapport'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Progress Section */}
            {isAnalyzing && (
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle>Analyse en cours...</CardTitle>
                  <CardDescription>
                    Notre IA traite votre rapport pour extraire les données carbone
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={progress} className="mb-4" />
                  <p className="text-sm text-muted-foreground text-center">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    {totalEmissions.toLocaleString()}
                  </CardTitle>
                  <CardDescription className="text-orange-700">
                    Total GHG Emissions (tCO2e)
                  </CardDescription>
                </CardHeader>
              </Card>

              {mockData.map((item, index) => (
                <Card key={index} className="border-orange-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-foreground">
                      {item.value.toLocaleString()}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {item.category} ({item.unit})
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Detailed Results Table */}
            <Card className="border-orange-200">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center text-foreground">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Détail des émissions GES
                  </CardTitle>
                  <CardDescription>
                    Répartition complète de vos émissions carbone par catégorie
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" className="border-orange-200 hover:bg-orange-50">
                  <Download className="mr-2 h-4 w-4" />
                  Exporter CSV
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Catégorie d'émissions</TableHead>
                      <TableHead className="text-right">Valeur</TableHead>
                      <TableHead className="text-right">Unité</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-mono text-lg">
                          {item.value.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">{item.unit}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="border-t-2 border-orange-200 bg-orange-50">
                      <TableCell className="font-bold">
                        <span className="px-3 py-1 rounded-full text-sm font-bold bg-primary text-white">
                          Total GHG Emissions
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-mono text-xl font-bold text-primary">
                        {totalEmissions.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground font-medium">tCO2e</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Success Alert */}
            <Alert className="border-orange-200 bg-orange-50">
              <AlertCircle className="h-4 w-4 text-primary" />
              <AlertDescription className="text-foreground">
                <strong>Analyse terminée avec succès !</strong> Nous avons extrait {mockData.length} catégories 
                d'émissions de votre rapport RSE. Les données sont prêtes à être exportées ou analysées davantage.
              </AlertDescription>
            </Alert>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <Button onClick={resetAnalysis} variant="outline" className="border-orange-200 hover:bg-orange-50">
                Analyser un autre rapport
              </Button>
              <Button className="bg-primary hover:bg-orange-600">
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

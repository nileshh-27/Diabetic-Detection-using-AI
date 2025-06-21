import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

const Prediction = () => {
  const [inputs, setInputs] = useState({
    pregnancies: 0,
    glucose: 0,
    insulin: 0,
    bmi: 0.0,
    age: 0
  });

  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const handlePredict = async () => {
  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);

    setPrediction({
      accuracy: data.accuracy,
      probability: data.probability,
      result: data.result
    });
  } catch (error) {
    console.error("Prediction error:", error);
    alert("Something went wrong while predicting.");
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-blue/5 to-medical-green/5 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Info
            </Button>
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-medical-navy mb-4 flex items-center justify-center gap-2">
            🌟 Diabetes Prediction App 🌟
          </h1>
          <p className="text-lg text-muted-foreground">
            Harness the power of machine learning to predict diabetes and provide insights!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Parameters */}
          <div className="lg:col-span-1">
            <Card className="bg-medical-navy text-white">
              <CardHeader>
                <CardTitle className="text-white">Input Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-medical-green font-medium">Enter value for Pregnancies</Label>
                  <Input
                    type="number"
                    value={inputs.pregnancies}
                    onChange={(e) => handleInputChange('pregnancies', e.target.value)}
                    className="mt-2 bg-gray-800 border-gray-600 text-white"
                  />
                </div>

                <div>
                  <Label className="text-medical-green font-medium">Enter value for Glucose</Label>
                  <Input
                    type="number"
                    value={inputs.glucose}
                    onChange={(e) => handleInputChange('glucose', e.target.value)}
                    className="mt-2 bg-gray-800 border-gray-600 text-white"
                  />
                </div>

                <div>
                  <Label className="text-medical-green font-medium">Enter value for Insulin</Label>
                  <Input
                    type="number"
                    value={inputs.insulin}
                    onChange={(e) => handleInputChange('insulin', e.target.value)}
                    className="mt-2 bg-gray-800 border-gray-600 text-white"
                  />
                </div>

                <div>
                  <Label className="text-medical-green font-medium">Enter value for BMI</Label>
                  <Input
                    type="number"
                    step="0.1"
                    value={inputs.bmi}
                    onChange={(e) => handleInputChange('bmi', e.target.value)}
                    className="mt-2 bg-gray-800 border-gray-600 text-white"
                  />
                </div>

                <div>
                  <Label className="text-medical-green font-medium">Enter value for Age</Label>
                  <Input
                    type="number"
                    value={inputs.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="mt-2 bg-gray-800 border-gray-600 text-white"
                  />
                </div>

                <Button 
                  onClick={handlePredict}
                  className="w-full bg-medical-green hover:bg-medical-green/90 text-white"
                >
                  <Activity className="w-4 h-4 mr-2" />
                  Predict
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {/* Model Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Model Accuracy:</span>
                      <span className="ml-2 font-semibold">
                        {prediction ? `${prediction.accuracy}%` : '82.29%'}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Prediction:</span>
                      <span className="ml-2 font-semibold">
                        {prediction ? prediction.result : 'No Diabetes'}
                      </span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Probability:</span>
                      <span className="ml-2 font-semibold">
                        {prediction ? `${prediction.probability}%` : '19.55%'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Prediction Result */}
              <div className="text-center">
                <Button 
                  className={`px-8 py-3 text-lg font-semibold ${
                    prediction?.result === "No Diabetes" 
                      ? "bg-medical-blue hover:bg-medical-blue/90" 
                      : "bg-red-500 hover:bg-red-600"
                  } text-white`}
                  disabled
                >
                  {prediction ? prediction.result : 'No Diabetes'}
                </Button>
              </div>

              {/* Probability Circle */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-32 h-32 rounded-full border-8 border-gray-200 relative">
                        <div 
                          className="absolute top-0 left-0 w-32 h-32 rounded-full border-8 border-medical-lightblue border-t-transparent"
                          style={{
                            transform: `rotate(${(prediction?.probability || 19.55) * 3.6}deg)`
                          }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-medical-lightblue font-bold text-lg">
                            {prediction ? `${prediction.probability}%` : '19.55%'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Input Streaming */}
              <Card>
                <CardHeader>
                  <CardTitle>Input Streaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">See your inputs in real-time below!</p>
                  <div className="space-y-2">
                    <div><strong>Your</strong></div>
                    <div><strong>Inputs:</strong></div>
                    <div className="text-medical-green">Pregnancies: <span className="text-foreground">{inputs.pregnancies}</span></div>
                    <div className="text-medical-green">Glucose: <span className="text-foreground">{inputs.glucose}</span></div>
                    <div className="text-medical-green">Insulin: <span className="text-foreground">{inputs.insulin}</span></div>
                    <div className="text-medical-green">BMI: <span className="text-foreground">{inputs.bmi}</span></div>
                    <div className="text-medical-green">Age: <span className="text-foreground">{inputs.age}</span></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Disclaimer />
      </div>
      <Footer />
    </div>
  );
};

export default Prediction;
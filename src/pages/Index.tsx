import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, AlertCircle, Eye, Droplets, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

const Index = () => {
  const symptoms = [
    { icon: Droplets, text: "Frequent urination" },
    { icon: Droplets, text: "Excessive thirst" },
    { icon: Zap, text: "Extreme hunger" },
    { icon: Zap, text: "Fatigue" },
    { icon: Eye, text: "Blurred vision" },
    { icon: Heart, text: "Slow-healing wounds" },
    { icon: AlertCircle, text: "Unexplained weight loss" }
  ];

  const complications = [
    "Heart disease",
    "Kidney damage", 
    "Vision loss (diabetic retinopathy)",
    "Nerve damage (diabetic neuropathy)",
    "Increased risk of infections"
  ];

  const managementTips = [
    { title: "Diet", description: "Eating a balanced diet, avoiding high-sugar foods" },
    { title: "Exercise", description: "Regular physical activity to improve insulin sensitivity" },
    { title: "Medications", description: "Insulin therapy or oral diabetes medications" },
    { title: "Monitoring", description: "Regularly checking blood glucose levels" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-blue/5 to-medical-green/5">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-medical-blue to-medical-darkblue text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            🌟 Diabetes Prediction App 🌟
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Learn about diabetes and use AI-powered prediction tools to assess your risk
          </p>
          <Link to="/prediction">
            <Button size="lg" className="bg-medical-green hover:bg-medical-green/90 text-white px-8 py-3 text-lg">
              <Activity className="w-5 h-5 mr-2" />
              Start Prediction
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* What is Diabetes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl text-medical-navy">What is diabetes?</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Diabetes is a chronic health condition that affects how your body turns food into energy. 
              It is characterized by high levels of glucose (sugar) in the blood, which occurs because 
              the body either doesn't produce enough insulin, doesn't use insulin effectively, or both.
            </p>
          </CardContent>
        </Card>

        {/* Types of Diabetes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-medical-navy">Types of Diabetes:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-medical-blue pl-6">
              <h3 className="text-xl font-semibold text-medical-navy mb-2">Type 1 Diabetes:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• An autoimmune condition where the immune system attacks and destroys insulin-producing cells in the pancreas.</li>
                <li>• Typically diagnosed in children and young adults.</li>
                <li>• Requires daily insulin injections to manage blood sugar.</li>
              </ul>
            </div>

            <div className="border-l-4 border-medical-green pl-6">
              <h3 className="text-xl font-semibold text-medical-navy mb-2">Type 2 Diabetes:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• The body becomes resistant to insulin, or the pancreas doesn't produce enough insulin.</li>
                <li>• Often linked to lifestyle factors like obesity, physical inactivity, and poor diet, but genetics also play a role.</li>
                <li>• Managed through lifestyle changes, medications, and sometimes insulin.</li>
              </ul>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-xl font-semibold text-medical-navy mb-2">Gestational Diabetes:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Occurs during pregnancy when the body cannot make enough insulin to support the increased demand.</li>
                <li>• Usually resolves after childbirth, but it increases the risk of developing type 2 diabetes later in life.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Symptoms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-medical-navy">Symptoms of Diabetes:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-medical-blue/5 rounded-lg">
                  <symptom.icon className="w-5 h-5 text-medical-blue" />
                  <span className="text-muted-foreground">{symptom.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Complications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-medical-navy">Complications of Untreated Diabetes:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {complications.map((complication, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-700">{complication}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Management */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-medical-navy">Management:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {managementTips.map((tip, index) => (
                <div key={index} className="p-4 bg-medical-green/5 rounded-lg border border-medical-green/20">
                  <h4 className="font-semibold text-medical-navy mb-2">{tip.title}:</h4>
                  <p className="text-muted-foreground">{tip.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Link to="/prediction">
            <Button size="lg" className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-3 text-lg">
              <Activity className="w-5 h-5 mr-2" />
              Try Diabetes Prediction Tool
            </Button>
          </Link>
        </div>

        <Disclaimer />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

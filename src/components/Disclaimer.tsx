import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Disclaimer = () => {
  return (
    <div className="mt-12 mb-8">
      <Alert className="border-yellow-200 bg-yellow-50">
        <AlertTriangle className="h-4 w-4 text-yellow-600" />
        <AlertDescription className="text-yellow-800">
          This project (model) was created for learning purposes, the model may make mistakes. 
          Please trust only qualified experts.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Disclaimer;
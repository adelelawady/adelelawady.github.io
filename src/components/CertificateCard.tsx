import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Certificate } from "@/lib/certificates";
import { Eye, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-lg font-semibold line-clamp-2">
            {certificate.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {certificate.thumbnail ? (
            <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
              <img
                src={certificate.thumbnail}
                alt={certificate.title}
                className="object-cover w-full h-full"
              />
             
            </div>
          ) : (
            <div className="aspect-video mb-4 bg-slate-100 rounded-md flex items-center justify-center">
              <span className="text-slate-400">No preview available</span>
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            Issued by {certificate.issuer}
          </p>
          <p className="text-sm text-muted-foreground">
            {certificate.date}
          </p>
          {certificate.courseUrl && (
            <a 
              href={certificate.courseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:text-blue-600 mt-2 flex items-center gap-1"
            >
              View Course <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </CardContent>
        <CardFooter>
          <Button
          
            variant="outline"
            className="w-full gap-2"
          
          >
            <Eye className="w-4 h-4" />
         


            <a 
            style={{
                padding: "0px",
                margin: "0px",
                color:"black"
              }}
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:text-blue-600 mt-2 flex items-center gap-1"
            >
                 View Certificate <ExternalLink className="w-3 h-3" />
            </a>

          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showPdf} onOpenChange={setShowPdf}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh]">
          <iframe
            src={certificate.pdfUrl}
            className="w-full h-full"
            title={certificate.title}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
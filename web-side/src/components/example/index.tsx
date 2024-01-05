import React from "react";

interface ComponentsExamplesProps {
     children: React.ReactNode;
}
export default function ComponentsExamples({
     children
}: ComponentsExamplesProps) {
     return (
          <div>
               {children}
          </div>
     )
}
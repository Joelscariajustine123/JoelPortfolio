
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ProfileImage = () => {
  return (
    <Card className="w-fit mx-auto">
      <CardContent className="p-6 text-center">
        <div className="relative mb-4">
          <img
            src="/lovable-uploads/703884bd-c297-4155-a117-4e1a97e4ad48.png"
            alt="Joel Scaria Justine"
            className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-primary/20"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileImage;

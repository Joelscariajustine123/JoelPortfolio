
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, User } from "lucide-react";

const ProfileImage = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-fit mx-auto">
      <CardContent className="p-6 text-center">
        <div className="relative mb-4">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Joel Scaria Justine"
              className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-primary/20"
            />
          ) : (
            <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center mx-auto border-4 border-primary/20">
              <User className="w-24 h-24 text-muted-foreground" />
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="profile-upload"
          />
          <label htmlFor="profile-upload">
            <Button variant="outline" className="cursor-pointer" asChild>
              <span>
                <Upload className="w-4 h-4 mr-2" />
                {profileImage ? 'Change Photo' : 'Upload Photo'}
              </span>
            </Button>
          </label>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileImage;

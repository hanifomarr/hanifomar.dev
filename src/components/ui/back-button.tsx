"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button variant="secondary" onClick={handleBack} className={className}>
      <ArrowLeft />
      Back
    </Button>
  );
};

export default BackButton;

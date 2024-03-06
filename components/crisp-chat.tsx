"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

import React from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2ea430e3-3726-43f2-a31e-3c611cabdc9b");
  }, []);

  return null;
};

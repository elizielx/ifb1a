"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  children: React.ReactNode;
}

const AOSWrapper: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div data-aos="fade-up">{children}</div>;
};

export default AOSWrapper;
